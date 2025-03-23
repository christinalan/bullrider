import AmmImpl from "@mercurial-finance/dynamic-amm-sdk";
import { AnchorProvider } from '@project-serum/anchor';
import { PublicKey } from "@solana/web3.js";
import { useAnchorWallet, useConnection, useWallet } from "@solana/wallet-adapter-react";
import { BN } from "@project-serum/anchor";

export const useMeteora = () => {
  const { publicKey } = useWallet();
  const anchorWallet = useAnchorWallet();
  const { connection } = useConnection();

  const swap = async (amountIn: number, direction: "buy" | "sell") => {
    console.log("swap", amountIn, direction);
    if (!publicKey || !anchorWallet || !connection) return;
    const provider = new AnchorProvider(connection, anchorWallet, AnchorProvider.defaultOptions());

    const constantProductPool = await AmmImpl.create(connection, new PublicKey("5yuefgbJJpmFNK2iiYbLSpv1aZXq7F9AUKkZKErTYCvs"));
    // const inAmountLamport = new BN(amountIn * 10 ** constantProductPool.tokenBMint.decimals);
    const inAmountLamport = new BN(amountIn * 10 ** constantProductPool.tokenBMint.decimals);

    const slippage = 0.01;
    // Swap SOL → USDT
    const { minSwapOutAmount } = constantProductPool.getSwapQuote(
      direction === "sell"
        ? new PublicKey(constantProductPool.tokenAMint.address)
        : new PublicKey(constantProductPool.tokenBMint.address),
      inAmountLamport,
      slippage
    );

    const swapTx = await constantProductPool.swap(
      publicKey,
      direction === "sell"
        ? new PublicKey(constantProductPool.tokenAMint.address)
        : new PublicKey(constantProductPool.tokenBMint.address),
      inAmountLamport,
      minSwapOutAmount
    );

    const swapResult = await provider.sendAndConfirm(swapTx);
    console.log(swapResult);
  };

  const buy = async (amountIn: number) => {
    await swap(amountIn, "buy");
  };

  const sell = async (amountIn: number) => {
    await swap(amountIn, "sell");
  };

  return { buy, sell };
};