import { useState } from "react";
import { EB_Garamond } from 'next/font/google';

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  display: 'swap'
})

type TimePeriod = '1 HOUR' | '1 DAY' | '1 WEEK' | '1 MONTH';

export default function TimeSelector({ onPeriodChange }: { onPeriodChange: (period: TimePeriod) => void }) {
  const [selectedPeriod, setSelectedPeriod] = useState<TimePeriod>('1 DAY');

  const periods: TimePeriod[] = ['1 HOUR', '1 DAY', '1 WEEK', '1 MONTH'];

  const handlePeriodClick = (period: TimePeriod) => {
    setSelectedPeriod(period);
    onPeriodChange(period);
  };

  return (
    <div className="flex justify-between items-center bg-[#C4A484] rounded-lg w-full">
      {periods.map((period) => (
        <button
          key={period}
          onClick={() => handlePeriodClick(period)}
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
  );
} 