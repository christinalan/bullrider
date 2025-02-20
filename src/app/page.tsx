import Link from "next/link"
import Image from "next/image";
import localFont from "next/font/local";
import star from "../images/star.png"
import tan_sq from "../images/tan_sq.png"
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
            <div className={`${bullriderFont.className} flex flex-col items-center text-[#251F14] text-[20px] text-center leading-[1.1]`}>
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
                className="-z-10"
                width="470" 
                height="360" 
                src="/bull_video.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
        </div>
         <div className="fixed top-40 left-0 w-full h-full flex justify-center items-center opacity-90 blur-lg">
                <Image 
                  className="-z-1"
                  src={tan_sq}
                  alt="tan background"
                  width={430}
                  priority
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
            <div className="flex flex-col gap-2 justify-center items-start mx-auto mt-2 text-[14.5px] text-[#251F14] w-[70%] max-w-[330px] h-[220px] leading-[1.1]">
                <div className="flex gap-4 items-center">
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
                  <p>If you sell before fully vesting, your unvested shares are forfeited and redistributed
                    proportionally to long riders.
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
                  <p>Those who have fully vested can reclaim their withheld funds along with a
                    proportional share or forfeited funds from early sellers.
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
                  <p>After fully vesting, your share of the long rider pool increases by 1% every day.
                  </p>
                </div>
            </div>

            {/* connect wallet button */}
            <div className="flex w-full justify-center items-center pt-6">
            <Link href="/vesting">
                <button className={`${bullriderFont.className} text-[50px] text-[#812C27] text-center rotate-[-9deg] px-6 py-[4px] outline outline-[3.6px] outline-[#812C27] leading-none cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95`}>
                  Connect Wallet
                </button>
            </Link>
            </div>
        </div>
      </main>
    </div>
  );
}




{/* 
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
    </div>
  <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}