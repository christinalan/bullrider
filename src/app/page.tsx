"use client";

import Image from "next/image";
import localFont from "next/font/local";
import star from "../images/star.png";
// import tan_sq from "../images/tan_sq.png"
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useRouter } from "next/navigation";
import hand from "../images/hand_new.png";
import { useEffect } from "react";

const bullriderFont = localFont({
  src: "../fonts/reward.ttf",
  display: "swap",
});

export default function Home() {
  const { publicKey } = useWallet();
  const { setVisible } = useWalletModal();
  const router = useRouter();

  useEffect(() => {
    if (publicKey) {
      // redirect to vesting page
      router.push("/vesting");
    }
  }, [publicKey, router]);

  const handleConnectWallet = async () => {
    try {
      setVisible(true);
    } catch {
      throw new Error("Unable to connect wallet");
    }
  };

  return (
    <div className="relative min-h-screen w-full">
      <main className="flex flex-col items-center justify-center w-full min-h-screen z-10">
        {/* Bull rider text */}
        <div className="flex w-full justify-center items-center mt-[-8px] sm:mt-[-20px]">
          <h1 className={`${bullriderFont.className} text-[60px] sm:text-[80px] text-[#251F14] text-center`}>
            Bull Rider
          </h1>
        </div>
        {/* Stars and Text */}
        <div className="flex w-full justify-center items-center gap-4 mt-[-16px] sm:mt-[-18px]">
          <Image src={star} alt="star" width={20} priority />
          <div
            className={`${bullriderFont.className} flex flex-col items-center text-[#251F14] text-[18px] sm:text-[20px] text-center leading-[1.1]`}
          >
            <p>Sell early, die poor. Hold long,</p>
            <p>{`ride rich. Don't fall off the bull.`}</p>
          </div>
          <Image src={star} alt="star" width={20} priority />
        </div>
        {/* Vector Line */}
        <div className="mx-auto">
          <div className="w-[345px] sm:w-[420px] h-[4px] bg-[#251F14] mt-1"></div>
          <div className="w-[345px] sm:w-[420px] h-[2px] bg-[#251F14] mt-0.5"></div>
        </div>
        {/* another video */}
        <div className="relative w-[90vw] max-w-[470px] mx-auto overflow-hidden shadow-xl isolate">
          <video
            className="w-full h-auto [mask-image:radial-gradient(circle,white_60%,transparent_100%)]"
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
            <div className="w-[345px] sm:w-[420px] h-[4px] bg-[#251F14] mt-1"></div>
            <div className="w-[345px] sm:w-[420px] h-[2px] bg-[#251F14] mt-0.5"></div>
          </div>
          {/* How it Works block */}
          <div className="flex w-full justify-center items-center sm:mt-2 gap-4">
            <Image src={hand} alt="hand" width={30} priority className="mix-blend-darken opacity-80" />
            <div
              className={`${bullriderFont.className} flex flex-col items-center text-[#812C27] text-[40px] text-center leading-[1.1]`}
            >
              <h1>How it works</h1>
            </div>
            <Image src={hand} alt="hand" width={30} priority className="scale-x-[-1]" />
          </div>
          {/* text block */}
          <div className="flex flex-col justify-center items-start mx-auto xs:mt-4 sm:mt-2 -mt-2 text-[14px] sm:text-[14.5px] text-[#251F14] font-black w-[80%] sm:w-[80%] max-w-[400px] h-[220px] sm:h-[200px] leading-[1.1]">
            <div className="flex flex-col pt-0 gap-3">
              <div className="flex gap-4 items-start">
                <Image src={star} alt="star" width={14} height={14} priority />
                <p>When you buy in, 50% of your money is withheld for long riders</p>
              </div>

              <div className="flex gap-4 items-center">
                <Image src={star} alt="star" width={14} height={14} priority />
                <p>Your withheld funds vest linearly over 7 days.</p>
              </div>

              <div className="flex gap-4 items-center">
                <Image src={star} alt="star" width={14} height={14} priority />
                <p>
                  If you sell before fully vesting, your unvested shares are forfeited and redistributed to Long Riders.
                </p>
              </div>

              <div className="flex gap-4 items-center">
                <Image src={star} alt="star" width={14} height={14} priority />
                <p>Once fully vested, your share of the Long Rider Pool increases by 7% every day.</p>
              </div>

              <div className="flex gap-4 items-center">
                <Image src={star} alt="star" width={14} height={14} priority />
                <p>The longer you hold, the bigger your stake grows—compounding your claim over time.</p>
              </div>
            </div>
          </div>

          {/* connect wallet button */}
          <div className="flex w-full justify-center items-center pt-2 sm:pt-2">
            <button
              onClick={handleConnectWallet}
              className={`${bullriderFont.className} text-[38px] sm:text-[44px] md:text-[54px] text-[#812C27] text-center rotate-[-5deg] md:rotate-[-7deg] mt-[-8px] sm:mt-[8px] px-6 py-[2px] sm:py-[4px] outline outline-[3.6px] outline-[#812C27] leading-none cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95`}
            >
              Connect Wallet
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

{
  /* <div className="fixed top-40 left-0 w-full h-full flex justify-center items-center opacity-90 blur-lg">
                <Image 
                  className="-z-1"
                  src={tan_sq}
                  alt="tan background"
                  width={430}
                  priority
                />
          </div> */
}
