"use client"
import * as d3 from "d3";
import { useEffect, useRef } from "react";

type LinePlotProps = {
    data?: number[];
    width?: number;
    height?: number;
    marginTop?: number;
    marginRight?: number;
    marginBottom?: number;
    marginLeft?: number;
  };
  
  const placeholderData = [10, 20, 15, 30, 25, 40, 35, 50, 45, 60];
  
  export default function LinePlot({
    data = placeholderData,
    width = 380,
    height = 200,
    marginTop = 20,
    marginRight = 20,
    marginBottom = 20,
    marginLeft = 20,
  }: LinePlotProps) {
    const svgRef = useRef<SVGSVGElement>(null);
  
    useEffect(() => {
      if (!svgRef.current) return;
  
      const x = d3.scaleLinear().domain([0, data.length - 1]).range([marginLeft, width - marginRight]);
      const y = d3.scaleLinear().domain(d3.extent(data) as [number, number]).range([height - marginBottom, marginTop]);
      const line = d3.line<number>().x((_, i) => x(i)).y(d => y(d));
  
      const svg = d3.select(svgRef.current);
      svg.selectAll("*").remove();
  
      // Add background grid
      const xAxis = d3.axisBottom(x).ticks(data.length);
      const yAxis = d3.axisLeft(y).ticks(5);
      
      svg.append("g")
        .attr("transform", `translate(0,${height - marginBottom})`)
        .call(xAxis)
        .selectAll("line")
        .attr("stroke", "#812C27");
      
      svg.append("g")
        .attr("transform", `translate(${marginLeft},0)`)
        .call(yAxis)
        .selectAll("line")
        .attr("stroke", "#812C27");
      
      svg.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "#812C27")
        .attr("stroke-width", 1.5)
        .attr("d", line);
  
      svg.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", (_, i) => x(i))
        .attr("cy", d => y(d))
        .attr("r", 2.5)
        .attr("fill", "#812C27")
        .attr("stroke", "none")
        .attr("stroke-width", 1.5);
    }, [data, width, height, marginTop, marginRight, marginBottom, marginLeft]);
  
    return <svg ref={svgRef} width={width} height={height} />;
  }
  