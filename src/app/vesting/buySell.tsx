'use client'
import { useState } from 'react'
import localFont from "next/font/local";

const bullriderFont = localFont({
  src: "../../fonts/reward.ttf",
  display: "swap"
})

export default function BuySell() {
    const [isBuying, setIsBuying] = useState(true);
    const [selectedPercent, setSelectedPercent] = useState<string | null>(null);

    const handleToggle = (percent:string) => {
      setSelectedPercent(prev => (prev === percent ? null : percent));
    }
    
    return (
        <div className="w-[334px] h-[210px] rounded-lg border-2 border-[#812C27] flex flex-col gap-4">
        {/* Row 1: Buy and Sell Buttons */}
        <div className="flex flex-col">
        <div className={`${bullriderFont.className} flex text-2xl`}>
          <button 
            onClick={() => setIsBuying(true) }
            className={`w-1/2 pt-1 pb-2 ${isBuying ? "bg-[#812C27] text-[#D7BA94]": "bg-transparent text-[#812C27]" }`}
            
            >Buy</button>
          <button 
            onClick={() => setIsBuying(false) } 
            className={`w-1/2 pt-1 pb-2 ${!isBuying ? "bg-[#812C27] text-[#D7BA94]" : "bg-transparent text-[#812C27]"}`}
            >Sell</button>
        </div>
          <div className="w-[330px] h-[2px] bg-[#812C27]"></div>
        </div>

       {/* Percentage Buttons */}
      <div className="flex gap-4 items-start justify-center ">
        {["25%", "50%", "100%"].map((percent) => {
          const isActive = selectedPercent === percent;
          return (
            <button
              key={percent}
              onClick={() => handleToggle(percent)}
              className={`px-4 pb-1 rounded-full border-2 border-[#812C27] text-md drop-shadow-[0.5px_0.5px_0px_#812C27] 
                ${isActive ? "bg-[#812C27] text-white" : "bg-transparent text-[#812C27]"}`}
            >
              {percent}
            </button>
          );
        })}
      </div>

        {/* Row 3: ETH Amount Input */}
        <div className="flex justify-start items-center border-2 border-[#812C27] rounded-full items-center mx-auto px-4 gap-2 text-[#812C27] drop-shadow-[0.7px_0.7px_0px_#812C27] ">
            <select className="bg-transparent pb-1 ">
              <option value="SOL">SOL</option>
              {/* <option value="BTC">BTC</option>
              <option value="USDT">USDT</option> */}
            </select>
            <div className="w-[2px] h-[28px] bg-[#812C27] text-[#812C27]"></div>
              <input 
                  type="number"
                  placeholder={isBuying ? "Amount to buy in ETH" : "Amount to sell in ETH"}
                  className="bg-transparent pb-1 outline-none placeholder-[#812C27] placeholder-opacity-70 text-center"
                />
          </div>

        {/* Row 4: Quick Buy Button */}
        <div className="flex justify-center">
          <button 
            className={`py-1 px-8 rounded-full bg-[#812C27] text-xl ${bullriderFont.className}`}>{isBuying ? "Quick Buy" : "Quick Sell"}</button>
        </div>
    </div>
    )
}