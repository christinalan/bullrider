"use client";
import { useEffect, useState } from "react";
import localFont from "next/font/local";
import { useMeteora } from "@/hooks/useMeteora";
import { PublicKey } from '@solana/web3.js';
import { getAssociatedTokenAddress, getAccount } from "@solana/spl-token";
import { useWallet } from "@solana/wallet-adapter-react";
import { useConnection } from "@solana/wallet-adapter-react";
const bullriderFont = localFont({
  src: "../../fonts/reward.ttf",
  display: "swap",
});

// TODO: update to the actual BULL token address
const BULL_TOKEN_ADDRESS = new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v");

export default function BuySell() {
  const [isBuying, setIsBuying] = useState(true);
  const [amount, setAmount] = useState<number | null>(null);
  const [selectedPercent, setSelectedPercent] = useState<string | null>(null);
  const [selectedAmount, setSelectedAmount] = useState<string | null>(null);
  const [balance, setBalance] = useState<number | null>(null);

  const { publicKey } = useWallet();
  const { connection } = useConnection();

  const { buy, sell } = useMeteora();

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        console.log("publicKey", publicKey);
        console.log("connection", connection);
        if (!publicKey || !connection) return;
        const tokenAccountAddress = await getAssociatedTokenAddress(
          BULL_TOKEN_ADDRESS,
          publicKey,
          false
        );

        const tokenAccountInfo = await getAccount(connection, tokenAccountAddress);
        const rawAmount = Number(tokenAccountInfo.amount);

        const decimals = 9;
        const tokenBalance = rawAmount / Math.pow(10, decimals);

        setBalance(tokenBalance);
        console.log("tokenBalance", tokenBalance);
      } catch (error) {
        console.error('Error fetching token balance:', error);
      }
    };

    fetchBalance();
  }, [publicKey, connection]);

  const handleBuySell = async () => {
    if (!amount) return;
    // const percentValue = parseInt(selectedPercent);
    if (isBuying) {
      await buy(amount);
    } else {
      await sell(amount);
    }
  };

  const handleToggle = (percent: string) => {
    setSelectedPercent((prev) => (prev === percent ? null : percent));
    const percentValue = parseInt(percent);
    if (balance) {
      const tokenAmount = balance * (percentValue / 100);
      setAmount(tokenAmount);
    }
  };

  const handleToggleAmount = (amount: string) => {
    setSelectedAmount((prev) => (prev === amount ? null : amount));
    setAmount(Number(amount));
  };

  return (
    <div className="w-[334px] h-[210px] rounded-lg border-2 border-[#812C27] flex flex-col gap-4">
      {/* Row 1: Buy and Sell Buttons */}
      <div className="flex flex-col">
        <div className={`${bullriderFont.className} flex text-2xl`}>
          <button
            onClick={() => {
              setIsBuying(true);
              setSelectedAmount(null);
              setAmount(null);
            }}
            className={`w-1/2 pt-1 pb-2 ${isBuying ? "bg-[#812C27] text-[#D7BA94]" : "bg-transparent text-[#812C27]"}`}
          >
            Buy
          </button>
          <button
            onClick={() => {
              setIsBuying(false);
              setSelectedAmount(null);
              setAmount(null);
            }}
            className={`w-1/2 pt-1 pb-2 ${!isBuying ? "bg-[#812C27] text-[#D7BA94]" : "bg-transparent text-[#812C27]"}`}
          >
            Sell
          </button>
        </div>
        <div className="w-[330px] h-[2px] bg-[#812C27]"></div>
      </div>

      {/* Percentage Buttons */}
      {!isBuying && (
        <div className="flex gap-4 items-start justify-center ">
          {["25%", "50%", "100%"].map((percent) => {
            const isActive = selectedPercent === percent;
            return (
              <button
                key={percent}
                onClick={() => handleToggle(percent)}
                className={`px-4 pb-1 rounded-full border-2 border-[#812C27] text-md drop-shadow-[0.5px_0.5px_0px_#812C27] 
                ${isActive ? "bg-[#812C27] text-white" : "bg-transparent text-[#812C27]"}`}
              >
                {percent}
              </button>
            );
          })}
        </div>
      )}

      {isBuying && (
        <div className="flex gap-4 items-start justify-center ">
          {["0.5", "1", "5"].map((amount) => {
            const isActive = selectedAmount === amount;
            return (
              <button
                key={amount}
                onClick={() => handleToggleAmount(amount)}
                className={`px-4 pb-1 rounded-full border-2 border-[#812C27] text-md drop-shadow-[0.5px_0.5px_0px_#812C27] 
                ${isActive ? "bg-[#812C27] text-white" : "bg-transparent text-[#812C27]"}`}
              >
                {amount}
              </button>
            );
          })}
        </div>
      )}

      {/* Row 3: ETH Amount Input */}
      <div className="flex justify-start items-center border-2 border-[#812C27] rounded-full items-center mx-auto px-4 gap-2 text-[#812C27] drop-shadow-[0.7px_0.7px_0px_#812C27] ">
        {isBuying ? "SOL" : "BULL"}
        <div className="w-[2px] h-[28px] bg-[#812C27] text-[#812C27]"></div>
        <input
          type="number"
          placeholder={isBuying ? "Buying $BULL" : "Selling $BULL"}
          onChange={(e) => setAmount(e.target.value ? Number(e.target.value) : null)}
          value={amount || ""}
          className="bg-transparent pb-1 outline-none placeholder-[#812C27] placeholder-opacity-70 text-center"
        />
      </div>

      {/* Row 4: Quick Buy Button */}
      <div className="flex justify-center">
        <button
          onClick={handleBuySell}
          className={`py-1 px-8 rounded-full bg-[#812C27] text-xl ${bullriderFont.className}`}
        >
          {isBuying ? "Quick Buy" : "Quick Sell"}
        </button>
      </div>

    </div>
  );
}
