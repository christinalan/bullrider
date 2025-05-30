// import Image from "next/image"
import type { Metadata } from "next";
import { EB_Garamond } from 'next/font/google'
import "./globals.css";
import BackgroundLayer from "./backgroundLayer"
import { ClientWalletProvider } from "./ClientWalletProvider";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  display: 'swap'
})

// const regFont = localFont({
//   src: "../fonts/EBGaramond12-AllSC.ttf",
//   display: "swap"
// })

export const metadata: Metadata = {
  title: "Bullrider",
  description: "Bullrider",
  openGraph: {
    images: ['/web_share.png']
  }
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
       <BackgroundLayer />
       <ClientWalletProvider>
        <main className="z-10">{children}</main>
       </ClientWalletProvider>
      </body>
    </html>
  );
}


// ${geistSans.variable} ${geistMono.variable} 