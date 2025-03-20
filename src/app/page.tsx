import Link from "next/link"
import Image from "next/image";
import localFont from "next/font/local";
import star from "../images/star.png"
// import tan_sq from "../images/tan_sq.png"
import hand from "../images/hand_new.png"

const bullriderFont = localFont({
  src: "../fonts/reward.ttf",
  display: "swap"
})

export default function Home() {
  return (
    <div className="relative min-h-screen w-full pt-8 pb-10 sm:p-20 ">
      <main className="flex flex-col row-start-2 items-center sm:items-start z-10">
        {/* Bull rider text */}
        <div className="flex w-full justify-center items-center sm:pt-4 pt-12">
          <h1 className={`${bullriderFont.className} text-[65px] sm:text-[80px] text-[#251F14] text-center`}>Bull Rider</h1>
        </div>
            {/* Stars and Text */}
        <div className="flex w-full justify-center items-center gap-4 mt-[-20px] sm:mt-[-24px]">
          <Image 
              src={star}
              alt="star"
              width={20}
              priority
            />
            <div className={`${bullriderFont.className} flex flex-col items-center text-[#251F14] text-[18px] sm:text-[20px] text-center leading-[1.1]`}>
                 <p>Sell early, die poor. Hold long,</p>
                 <p>{`ride rich. Don't fall off the bull.`}</p>
            </div>
          <Image 
            src={star}
            alt="star"
            width={20}
            priority
          />
        </div>
         {/* Vector Line */}
         <div className="mx-auto">
            <div className="w-[345px] h-[4px] bg-[#251F14] mt-1"></div>
            <div className="w-[345px] h-[2px] bg-[#251F14] mt-0.5"></div>
         </div>
         {/* another video */}
         <div className="flex w-full justify-center">
            <video
                className="-z-10 w-[350px] sm:w-[470px]"
                height="360" 
                src="/bull_video.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
        </div>

           {/* 2nd pair of Vector Lines */}
        <div className="flex flex-col w-full justify-center gap-1 z-10">
          <div className="mx-auto">
              <div className="w-[345px] h-[4px] bg-[#251F14] mt-1"></div>
              <div className="w-[345px] h-[2px] bg-[#251F14] mt-0.5"></div>
          </div>
                {/* How it Works block */}
          <div className="flex w-full justify-center items-center gap-4">
            <Image 
                src={hand}
                alt="hand"
                width={30}
                priority
                className="mix-blend-darken opacity-80"
              />
              <div className={`${bullriderFont.className} flex flex-col items-center text-[#812C27] text-[40px] text-center leading-[1.1]`}>
                  <h1>How it works</h1>
              </div>
            <Image 
              src={hand}
              alt="hand"
              width={30}
              priority
              className="scale-x-[-1]"
            />
          </div>
              {/* text block */}
            <div className="flex flex-col gap-2 justify-center items-start mx-auto mt-1 sm:mt-0 text-[14px] sm:text-[14.5px] text-[#251F14] w-[72%] sm:w-[70%] max-w-[330px] h-[220px] sm:h-[200px] leading-[1.1]">
              <div className="flex flex-col pt-0 gap-3">
                  <div className="flex gap-4 items-start">
                    <Image 
                        src={star}
                        alt="star"
                        width={14}
                        height={14}
                        priority
                      />
                    <p>When you buy in, 50% of your money is withheld for long riders</p>
                  </div>

                  <div className="flex gap-4 items-center">
                    <Image 
                        src={star}
                        alt="star"
                        width={14}
                        height={14}
                        priority
                      />
                    <p>Your withheld funds vest linearly over 7 days.</p>
                  </div>

                  <div className="flex gap-4 items-center">
                    <Image 
                        src={star}
                        alt="star"
                        width={14}
                        height={14}
                        priority
                      />
                    <p>If you sell before fully vesting, your unvested shares are forfeited and redistributed to Long Riders.
                    </p>
                  </div>

                  <div className="flex gap-4 items-center">
                    <Image 
                        src={star}
                        alt="star"
                        width={14}
                        height={14}
                        priority
                      />
                    <p>Once fully vested, your share of the Long Rider Pool increases by 7% every day.
                    </p>
                  </div>

                  <div className="flex gap-4 items-center">
                    <Image 
                        src={star}
                        alt="star"
                        width={14}
                        height={14}
                        priority
                      />
                    <p>The longer you hold, the bigger your stake grows—compounding your claim over time.
                    </p>
                  </div>
                </div>
            </div>

            {/* connect wallet button */}
            <div className="flex w-full justify-center items-center pt-4 sm:pt-6">
            <Link href="/vesting">
                <button className={`${bullriderFont.className} text-[38px] sm:text-[50px] text-[#812C27] text-center rotate-[-7deg] sm:rotate-[-9deg] mt-[-6px] sm:mt-[0px] px-6 py-[2px] sm:py-[4px] outline outline-[3.6px] outline-[#812C27] leading-none cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95`}>
                  Connect Wallet
                </button>
            </Link>
            </div>
        </div>
      </main>
    </div>
  );
}




       {/* <div className="fixed top-40 left-0 w-full h-full flex justify-center items-center opacity-90 blur-lg">
                <Image 
                  className="-z-1"
                  src={tan_sq}
                  alt="tan background"
                  width={430}
                  priority
                />
          </div> */}