"use client"
import * as d3 from "d3";
import { useEffect, useRef, useState } from "react";
import { EB_Garamond } from 'next/font/google';

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  display: 'swap'
})

type TimePeriod = '1 HOUR' | '1 DAY' | '1 WEEK' | '1 MONTH';

interface MarketData {
  id: string;
  date: string;
  name: string;
  symbol: string;
  price: number;
  marketCap: number;
  volume: number;
  change: number;
}

interface LinePlotProps {
  width?: number;
  height?: number;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
}

const filterDataByTimePeriod = (data: MarketData[], period: TimePeriod): number[] => {
  const sortedData = [...data].sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  const latestDate = new Date(sortedData[sortedData.length - 1].date);
  let timeFilter: Date;

  switch (period) {
    case '1 HOUR':
      timeFilter = new Date(latestDate.getTime() - 3600000); // 1 hour in milliseconds
      break;
    case '1 DAY':
      timeFilter = new Date(latestDate.getTime() - 86400000); // 24 hours in milliseconds
      break;
    case '1 WEEK':
      timeFilter = new Date(latestDate.getTime() - 604800000); // 7 days in milliseconds
      break;
    case '1 MONTH':
      timeFilter = new Date(latestDate.getTime() - 2592000000); // 30 days in milliseconds
      break;
    default:
      timeFilter = new Date(latestDate.getTime() - 3600000); // default to 1 hour
  }

  return sortedData
    .filter(item => new Date(item.date) >= timeFilter)
    .map(item => item.marketCap);
};

export default function LinePlot({
  width = 380,
  height = 200,
  marginTop = 20,
  marginRight = 20,
  marginBottom = 20,
  marginLeft = 20,
}: LinePlotProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [selectedPeriod, setSelectedPeriod] = useState<TimePeriod>('1 HOUR');
  const [data, setData] = useState<number[]>([]);
  const [marketData, setMarketData] = useState<MarketData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch('https://vqkn59wozf.execute-api.us-east-1.amazonaws.com');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();
      setMarketData(jsonData);
      setData(filterDataByTimePeriod(jsonData, selectedPeriod));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  // Initial data fetch
  useEffect(() => {
    fetchData();
  }, []);

  // Set up polling for live updates
  useEffect(() => {
    const pollInterval = setInterval(fetchData, 30000); // Poll every 30 seconds

    return () => clearInterval(pollInterval);
  }, []);

  // Update filtered data when period changes
  useEffect(() => {
    if (marketData.length > 0) {
      setData(filterDataByTimePeriod(marketData, selectedPeriod));
    }
  }, [selectedPeriod, marketData]);

  const handlePeriodChange = (period: TimePeriod) => {
    setSelectedPeriod(period);
  };

  useEffect(() => {
    if (!svgRef.current || data.length === 0) return;

    const x = d3.scaleLinear().domain([0, data.length - 1]).range([marginLeft, width - marginRight]);
    const y = d3.scaleLinear().domain(d3.extent(data) as [number, number]).range([height - marginBottom, marginTop]);
    
    // Create line generator
    const line = d3.line<number>()
      .x((_, i) => x(i))
      .y(d => y(d))
      .curve(d3.curveBasis);

    // Create area generator for the fill
    const area = d3.area<number>()
      .x((_, i) => x(i))
      .y0(height - marginBottom)
      .y1(d => y(d))
      .curve(d3.curveBasis);

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    // Add title
    svg.append("text")
      .attr("x", width / 2)
      .attr("y", marginTop - 5)
      .attr("text-anchor", "middle")
      .attr("fill", "#812C27")
      .attr("font-size", "16px")
      .attr("font-weight", "bold")
      .text("Market Cap");

    // Add gradient definition
    const gradient = svg.append("defs")
      .append("linearGradient")
      .attr("id", "area-gradient")
      .attr("gradientUnits", "userSpaceOnUse")
      .attr("x1", 0)
      .attr("y1", 0)
      .attr("x2", 0)
      .attr("y2", height - marginBottom);

    gradient.append("stop")
      .attr("offset", "0%")
      .attr("stop-color", "#812C27")
      .attr("stop-opacity", 0.3);

    gradient.append("stop")
      .attr("offset", "100%")
      .attr("stop-color", "#812C27")
      .attr("stop-opacity", 0.1);

    // Add X grid lines
    const xAxis = d3.axisBottom(x)
      .ticks(data.length)
      .tickSize(-height + marginTop + marginBottom);

    const xAxisGroup = svg.append("g")
      .attr("transform", `translate(0,${height - marginBottom})`)
      .call(xAxis);

    // Remove x-axis numbers but keep grid lines
    xAxisGroup.selectAll("text").remove();
    xAxisGroup.selectAll(".tick line")
      .attr("stroke", "#812C27")
      .attr("stroke-opacity", 0.2);
    xAxisGroup.select(".domain").remove();

    // Add Y grid lines
    const yAxis = d3.axisLeft(y)
      .ticks(5)
      .tickSize(-width + marginLeft + marginRight);

    const yAxisGroup = svg.append("g")
      .attr("transform", `translate(${marginLeft},0)`)
      .call(yAxis);

    // Remove y-axis numbers but keep grid lines
    yAxisGroup.selectAll("text").remove();
    yAxisGroup.selectAll(".tick line")
      .attr("stroke", "#812C27")
      .attr("stroke-opacity", 0.2);
    yAxisGroup.select(".domain").remove();
    
    // Add area fill
    svg.append("path")
      .datum(data)
      .attr("fill", "url(#area-gradient)")
      .attr("d", area);

    // Add line path
    svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#812C27")
      .attr("stroke-width", 2)
      .attr("d", line);

    // Create tooltip group (initially hidden)
    const tooltipGroup = svg.append("g")
      .attr("class", "tooltip")
      .style("opacity", 0);

    // Add tooltip background
    tooltipGroup.append("rect")
      .attr("x", -90)
      .attr("y", -15)
      .attr("width", 80)
      .attr("height", 30)
      .attr("rx", 5)
      .attr("fill", "#F5E6D3")
      .attr("stroke", "#812C27")
      .attr("stroke-width", 1);

    // Add tooltip text
    tooltipGroup.append("text")
      .attr("x", -50)
      .attr("y", 5)
      .attr("text-anchor", "middle")
      .attr("fill", "#812C27")
      .attr("font-size", "14px")
      .attr("font-weight", "bold");

    // Add tooltip point
    tooltipGroup.append("circle")
      .attr("cx", 0)
      .attr("cy", 0)
      .attr("r", 4)
      .attr("fill", "#812C27")
      .attr("stroke", "#F5E6D3")
      .attr("stroke-width", 2);

    // Add invisible overlay for mouse tracking
    svg.append("rect")
      .attr("width", width)
      .attr("height", height)
      .attr("fill", "none")
      .attr("pointer-events", "all")
      .on("mouseover", () => {
        tooltipGroup.style("opacity", 1);
      })
      .on("mouseout", () => {
        tooltipGroup.style("opacity", 0);
      })
      .on("mousemove", (event) => {
        const [mouseX] = d3.pointer(event);
        const index = Math.round(x.invert(mouseX));
        
        if (index >= 0 && index < data.length) {
          const value = data[index];
          tooltipGroup
            .attr("transform", `translate(${x(index)},${y(value)})`);
          tooltipGroup.select("text")
            .text(value.toLocaleString());
        }
      });

    // Add end marker with current price
    const lastValue = data[data.length - 1];
    const markerGroup = svg.append("g")
      .attr("transform", `translate(${x(data.length - 1)},${y(lastValue)})`);

    // Add marker background
    markerGroup.append("rect")
      .attr("x", -90)
      .attr("y", -15)
      .attr("width", 80)
      .attr("height", 30)
      .attr("rx", 5)
      .attr("fill", "#F5E6D3")
      .attr("stroke", "#812C27")
      .attr("stroke-width", 1);

    // Add price text
    markerGroup.append("text")
      .attr("x", -50)
      .attr("y", 5)
      .attr("text-anchor", "middle")
      .attr("fill", "#812C27")
      .attr("font-size", "14px")
      .attr("font-weight", "bold")
      .text(lastValue.toLocaleString());

    // Add end point marker
    markerGroup.append("circle")
      .attr("cx", 0)
      .attr("cy", 0)
      .attr("r", 4)
      .attr("fill", "#812C27")
      .attr("stroke", "#F5E6D3")
      .attr("stroke-width", 2);

  }, [data, width, height, marginTop, marginRight, marginBottom, marginLeft]);

  // Update the render logic to handle no data case
  if (isLoading) {
    return (
      <div className="flex flex-col gap-4 items-center">
        <div className="w-[380px] h-[200px] flex items-center justify-center bg-[#F5E6D3] rounded-lg">
          <div className="text-[#812C27]">Loading...</div>
        </div>
        <div className="w-[330px] sm:w-[380px]">
          <div className="flex justify-between items-center bg-[#C4A484] rounded-lg w-full">
            {['1 HOUR', '1 DAY', '1 WEEK', '1 MONTH'].map((period) => (
              <button
                key={period}
                disabled
                className={`${ebGaramond.className} text-center py-2 text-sm sm:text-base transition-colors flex-1 font-bold rounded-full text-[#812C27] opacity-50`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col gap-4 items-center">
        <div className="w-[380px] h-[200px] flex items-center justify-center bg-[#F5E6D3] rounded-lg">
          <div className="text-[#812C27]">Error: {error}</div>
        </div>
        <div className="w-[330px] sm:w-[380px]">
          <div className="flex justify-between items-center bg-[#C4A484] rounded-lg w-full">
            {['1 HOUR', '1 DAY', '1 WEEK', '1 MONTH'].map((period) => (
              <button
                key={period}
                disabled
                className={`${ebGaramond.className} text-center py-2 text-sm sm:text-base transition-colors flex-1 font-bold rounded-full text-[#812C27] opacity-50`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="flex flex-col gap-4 items-center">
        <div className="w-[380px] h-[200px] flex items-center justify-center bg-[#F5E6D3] rounded-lg">
          <div className="text-[#812C27] text-center">
            <div className="font-bold mb-2">No Data Available</div>
            <div className="text-sm opacity-80">Data for {selectedPeriod.toLowerCase()} will be available soon</div>
          </div>
        </div>
        <div className="w-[330px] sm:w-[380px]">
          <div className="flex justify-between items-center bg-[#C4A484] rounded-lg w-full">
            {['1 HOUR', '1 DAY', '1 WEEK', '1 MONTH'].map((period) => (
              <button
                key={period}
                onClick={() => handlePeriodChange(period as TimePeriod)}
                className={`${ebGaramond.className} text-center py-2 text-sm sm:text-base transition-colors flex-1 font-bold rounded-full
                  ${selectedPeriod === period 
                    ? 'bg-[#812C27] text-[#F5E6D3]' 
                    : 'text-[#812C27] hover:bg-[#B3917A] hover:text-[#F5E6D3]'
                  }`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 items-center">
      <svg ref={svgRef} width={width} height={height} />
      <div className="w-[330px] sm:w-[380px]">
        <div className="flex justify-between items-center bg-[#C4A484] rounded-lg w-full">
          {['1 HOUR', '1 DAY', '1 WEEK', '1 MONTH'].map((period) => (
            <button
              key={period}
              onClick={() => handlePeriodChange(period as TimePeriod)}
              className={`${ebGaramond.className} text-center py-2 text-sm sm:text-base transition-colors flex-1 font-bold rounded-full
                ${selectedPeriod === period 
                  ? 'bg-[#812C27] text-[#F5E6D3]' 
                  : 'text-[#812C27] hover:bg-[#B3917A] hover:text-[#F5E6D3]'
                }`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
  