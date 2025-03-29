"use client";
import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";
import star from "../../images/star.png";
// import tan_sq from "../../images/tan_sq.png"
// import long_tan from "../../images/long_tan.png"
import LinePlot from "./graph";
import VestedSlider from "./vestedDisplay";
import BuySell from "./buySell";
import { useSolana } from "@/hooks/useSolana";
import { useState } from "react";
import { useEffect } from "react";

const bullriderFont = localFont({
  src: "../../fonts/reward.ttf",
  display: "swap",
});

export default function Vesting() {
  // const { claimRewards, getFeePoolBalance } = useSolana();
  const [poolBalance, setPoolBalance] = useState("31K");

  // useEffect(() => {
  //   const fetchPoolBalance = async () => {
  //     const unformattedBalance = await getFeePoolBalance();
  //     let formattedBalance = "0.00";
      
  //     if (unformattedBalance) {
  //       if (unformattedBalance >= 1000) {
  //         formattedBalance = (unformattedBalance / 1000).toFixed(1) + "K";
  //       } else {
  //         formattedBalance = unformattedBalance.toFixed(2);
  //       }
  //     }
      
  //     setPoolBalance(formattedBalance);
  //   };
  //   fetchPoolBalance();
  // }, [getFeePoolBalance]);

  return (
    <div className="relative min-h-screen w-full">
      <main className="flex flex-col w-full min-h-screen justify-center items-center z-10 w-full">
        {/* block with Vesting-specific content, scrollable wrapper */}
        <div className="w-full max-w-[450px] sm:max-w-[600px] h-[82vh] sm:h-[88vh] overflow-y-auto flex flex-col items-center pb-4 scrollbar-hide z-20">
          {/* Header info */}

          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/";
            }}
            className="flex w-full justify-center items-center sm:mt-[-12px]"
          >
            <h1 className={`${bullriderFont.className} text-[65px] sm:text-[80px] text-[#251F14]`}>Bull Rider</h1>
          </Link>

          {/* Stars and Text */}
          <div className="flex w-full justify-center items-center gap-4 mt-[-20px]">
            <Image src={star} alt="star" width={20} priority />
            <div
              className={`${bullriderFont.className} flex flex-col items-center text-[#251F14] text-[26px] text-center`}
            >
              <p>{`Don't fall off the bull`}</p>
            </div>
            <Image src={star} alt="star" width={20} priority />
          </div>

          <div className="flex flex-col w-full justify-center gap-1 z-10">
            {/* Vector Line */}
            <div className="mx-auto">
              <div className="w-[345px] sm:w-[420px] h-[4px] bg-[#251F14] mt-1"></div>
              <div className="w-[345px] sm:w-[420px] h-[2px] bg-[#251F14] mt-0.5"></div>
            </div>

            {/* graph block */}
            <div className="flex flex-col w-full justify-center items-center gap-4">
              <div
                className={`flex flex-col items-center text-[#812C27] text-[22px] sm:text-[25px] text-center font-black pt-2`}
              >
                <h1>{`${poolBalance} IN THE LONG RIDER POOL`}</h1>
              </div>

              <div className="sm:my-2">
                <LinePlot />
              </div>

              <div className="w-[330px] sm:w-[380px]">{/* TimeSelector is now part of the graph component */}</div>

              {/* Buy Sell block*/}
              <BuySell />

              {/* next block with vested info */}
              <div className="w-[330px] sm:w-[380px]">
                <VestedSlider />

                <div className="mt-4">
                  <button
                    className={`${bullriderFont.className} w-full py-4 px-8 bg-[#812C27] text-[#F5E6D3] 
        text-2xl sm:text-3xl rounded-full hover:bg-[#6d251f] transition-colors
        shadow-md tracking-wider`}
                    onClick={() => {
                      // claimRewards();
                      console.log("Claiming vested shares...");
                    }}
                  >
                    CLAIM VESTED SHARES
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
