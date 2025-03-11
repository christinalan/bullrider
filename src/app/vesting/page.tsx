'use client'
import { useState } from 'react'
import Image from "next/image";
import localFont from "next/font/local";
import star from "../../images/star.png"
import tan_sq from "../../images/tan_sq.png"
import long_tan from "../../images/long_tan.png"
import LinePlot from "../graph"

const bullriderFont = localFont({
  src: "../../fonts/reward.ttf",
  display: "swap"
})

export default function Vesting() {
  const [isBuying, setIsBuying] = useState(true);

  return (
    <div className="relative min-h-screen w-full pt-8 pb-10 sm:p-20 ">
      <main className="flex flex-col row-start-2 items-center sm:items-start z-10">
        {/* Bull rider text */}
          <div className="flex w-full justify-center items-center pt-4">
          <h1 className={`${bullriderFont.className} text-[80px] text-[#251F14] text-center`}>Bull Rider</h1>
        </div>

        {/* Stars and Text */}
        <div className="flex w-full justify-center items-center gap-4 mt-[-24px]">
          <Image 
              src={star}
              alt="star"
              width={20}
              priority
            />
            <div className={`${bullriderFont.className} flex flex-col items-center text-[#251F14] text-[26px] text-center`}>
                 <p>{`Don't fall off the bull`}</p>
            </div>
          <Image 
            src={star}
            alt="star"
            width={20}
            priority
          />
        </div>

        <div className="fixed top-10 left-0 w-full h-full flex justify-center items-center blur-lg">
                <Image 
                  className="-z-1"
                  src={long_tan}
                  alt="tan background"
                  width={500}
                  priority
                />
          </div>

          <div className="fixed top-[-50] left-0 w-full h-full flex justify-center items-center opacity-70 blur-xl">
                <Image 
                  className="-z-1"
                  src={tan_sq}
                  alt="tan background"
                  width={450}
                  priority
                />
          </div>
          
          {/* new block with high z */}
          <div className="flex flex-col w-full justify-center gap-1 z-10">
            {/* Vector Line */}
            <div className="mx-auto">
                <div className="w-[345px] h-[4px] bg-[#251F14] mt-1"></div>
                <div className="w-[345px] h-[2px] bg-[#251F14] mt-0.5"></div>
            </div>

            {/* How it Works block */}
            <div className="flex flex-col w-full justify-center items-center gap-4">
            
                <div className={`flex flex-col items-center text-[#812C27] text-[26px] text-center drop-shadow-[1.5px_1.5px_0px_#812C27]`}>
                    <h1>31K in the long rider pool</h1>
                </div>
        
                <LinePlot />

            {/* Buy Sell block*/}
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
                  {/* Row 2: Percentage Selection */}
                  <div className="flex mx-auto gap-4">
                    {["25%", "50%", "100%"].map((percent) => (
                      <div key={percent} className="px-4 flex items-start justify-center border-lg border-[#812C27] text-[#812C27] drop-shadow-[0.5px_0.5px_0px_#812C27] rounded-full border-2 border-current pb-1">
                        {percent}
                      </div>
                    ))}
                  </div>

                  {/* Row 3: ETH Amount Input */}
                  <div className="flex justify-start items-center border-2 border-[#812C27] rounded-full items-center mx-auto px-4 gap-2 text-[#812C27] drop-shadow-[0.7px_0.7px_0px_#812C27] ">
                      <select className="bg-transparent pb-1 ">
                        <option value="ETH">ETH</option>
                        <option value="BTC">BTC</option>
                        <option value="USDT">USDT</option>
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
                      className={`w-[150] py-1 rounded-full bg-[#812C27] text-xl ${bullriderFont.className}`}>{isBuying ? "Quick Buy" : "Quick Sell"}</button>
                  </div>
            </div>

                    {/* next block with vested info */}
                  <div>
                    <h1 className="text-[#812C27] text-3xl drop-shadow-[1px_1px_0px_#812C27]">$1312 Vested (52%)</h1>
                  </div>

            </div>
          </div>
      </main>
    </div>
  );
}
