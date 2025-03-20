import Image from "next/image"
import type { Metadata } from "next";
// import localFont from "next/font/local";
import { EB_Garamond } from 'next/font/google'
import "./globals.css";
import background from "../images/background.png"
import sign_bg from "../images/sign_bg.png"
import og_long_tan from "../images/og_long_tan.png"
import tan_sq from "../images/tan_sq.png"

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  display: 'swap',

})

// const regFont = localFont({
//   src: "../fonts/EBGaramond12-AllSC.ttf",
//   display: "swap"
// })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased relative min-h-screen w-full ${ebGaramond.className}`}
      >
        <div className="">
          <div className="absolute top-0 left-0 w-full h-full min-h-screen">
            <Image 
                className="-z-10"
                src={background}
                alt="background image"
                layout="fill"
                objectFit="cover"
                priority
              />
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                <Image 
                  className="z-2"
                  src={sign_bg}
                  alt="sign background"
                  width={500}
                  priority
                />
            </div>
            <div className="absolute bottom-2 -mb-2 left-0 w-full h-[calc(65%-4rem)] flex justify-center items-center opacity-90 blur-lg">
                <Image 
                  className="-z-1 w-[350px] sm:w-[430px]"
                  src={tan_sq}
                  alt="tan background"
                  priority
                />
          </div>
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                <Image 
                  className="-z-10"
                  src={og_long_tan}
                  alt="tan background"
                  width={450}
                  priority
                />
            </div>
          </div>
        </div>
        <div className="z-10">{children}</div>
      </body>
    </html>
  );
}


// ${geistSans.variable} ${geistMono.variable} 
