import type { Metadata } from "next";
// import localFont from "next/font/local";
import { EB_Garamond } from 'next/font/google'
import "../globals.css";
import BackgroundVesting from "./backgroundVesting"

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  display: 'swap',
})

// const regFont = localFont({
//   src: "../fonts/EBGaramond12-AllSC.ttf",
//   display: "swap"
// })

export const metadata: Metadata = {
  title: "Bullrider",
  description: "Bullrider",
};

export default function VestingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`antialiased relative min-h-screen w-full ${ebGaramond.className}`}>
      <BackgroundVesting />
      <main className="z-10">{children}</main>
    </div>
  );
}


// ${geistSans.variable} ${geistMono.variable} 
