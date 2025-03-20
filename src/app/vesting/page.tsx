import Image from "next/image";
import localFont from "next/font/local";
import star from "../../images/star.png"
import tan_sq from "../../images/tan_sq.png"
// import long_tan from "../../images/long_tan.png"
import LinePlot from "./graph"
import VestedSlider from "./vestedDisplay"
import BuySell from "./buySell"
import Board from "./board"

const bullriderFont = localFont({
  src: "../../fonts/reward.ttf",
  display: "swap"
})

export default function Vesting() {

  return (
    <div className="relative min-h-screen w-full pt-8 pb-10 sm:p-20 ">
      <main className="flex flex-col row-start-2 items-center sm:items-center z-10 w-full">

              {/* background images to cover the hole */}
          {/* <div className="fixed top-15 left-10 w-full h-full flex justify-center items-center blur-lg">
                <Image 
                  className="-z-1"
                  src={long_tan}
                  alt="tan background"
                  width={500}
                  priority
                />
          </div> */}

          <div className="fixed top-[-150] left-0 w-full h-full flex justify-center items-center blur-lg">
                <Image 
                  className="-z-1"
                  src={tan_sq}
                  alt="tan background"
                  width={465}
                  priority
                />
          </div>
          
          {/* block with Vesting-specific content, scrollable wrapper */}
          <div className="w-full max-w-[380px] h-[82vh] overflow-y-auto flex flex-col items-center px-4 pb-4 scrollbar-hide z-20">
               {/* Header info */}
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

            <div className="flex flex-col w-full justify-center gap-1 z-10">
            {/* Vector Line */}
            <div className="mx-auto">
                <div className="w-[345px] h-[4px] bg-[#251F14] mt-1"></div>
                <div className="w-[345px] h-[2px] bg-[#251F14] mt-0.5"></div>
            </div>

            {/* graph block */}
            <div className="flex flex-col w-full justify-center items-center gap-4">
            
                <div className={`flex flex-col items-center text-[#812C27] text-[22px] text-center font-black pt-2`}>
                    <h1>31K IN THE LONG RIDER POOL</h1>
                </div>
        
                <LinePlot />

            {/* Buy Sell block*/}
              <BuySell />

                  {/* next block with vested info */}
                  <div className="w-[330px]">
                  <VestedSlider />
                  <Board />
                  </div>

            </div>
          </div>

          </div>
      </main>
    </div>
  );
}
