import Link from "next/link"
import Image from "next/image";
import localFont from "next/font/local";
import star from "../../images/star.png"
// import tan_sq from "../../images/tan_sq.png"
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
    <div className="relative min-h-screen w-full">
      <main className="flex flex-col w-full min-h-screen justify-center items-center z-10 w-full">
          
          {/* block with Vesting-specific content, scrollable wrapper */}
          <div className="w-full max-w-[450px] sm:max-w-[600px] h-[82vh] sm:h-[88vh] overflow-y-auto flex flex-col items-center pb-4 scrollbar-hide z-20">
               {/* Header info */}

              <Link href="/" className="flex w-full justify-center items-center sm:mt-[-12px] no-underline">
                <h1 className={`${bullriderFont.className}  text-[65px] sm:text-[80px] text-[#251F14]`}>Bull Rider</h1>
              </Link>


            {/* Stars and Text */}
            <div className="flex w-full justify-center items-center gap-4 mt-[-20px]">
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
                <div className="w-[345px] sm:w-[420px] h-[4px] bg-[#251F14] mt-1"></div>
                <div className="w-[345px] sm:w-[420px] h-[2px] bg-[#251F14] mt-0.5"></div>
            </div>

            {/* graph block */}
            <div className="flex flex-col w-full justify-center items-center gap-4">
            
                <div className={`flex flex-col items-center text-[#812C27] text-[22px] sm:text-[25px] text-center font-black pt-2`}>
                    <h1>31K IN THE LONG RIDER POOL</h1>
                </div>
        
                <div className="sm:my-2"><LinePlot /></div>
       
            {/* Buy Sell block*/}
              <BuySell />

                  {/* next block with vested info */}
                  <div className="w-[330px] sm:w-[380px]">
                  <VestedSlider />
                  
                  <div className="mt-4">
                  <Board />
                  </div>
                  </div>

            </div>
          </div>

          </div>
      </main>
    </div>
  );
}
