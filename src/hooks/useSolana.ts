// import { useMemo } from "react";
// import { useWallet, useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
// import * as anchor from "@project-serum/anchor";
// import { getAssociatedTokenAddress } from "@solana/spl-token";
// import { PublicKey } from "@solana/web3.js";

// import IDL from "../../solana/idl.json";

// const MINT_ADDRESS = new PublicKey("5yuefgbJJpmFNK2iiYbLSpv1aZXq7F9AUKkZKErTYCvs");
// const FEE_POOL = new PublicKey("5yuefgbJJpmFNK2iiYbLSpv1aZXq7F9AUKkZKErTYCvs");
// const PROGRAM_ID = new PublicKey("5yuefgbJJpmFNK2iiYbLSpv1aZXq7F9AUKkZKErTYCvs");

// export const useSolana = () => {
//   const { publicKey } = useWallet();
//   const anchorWallet = useAnchorWallet();
//   const { connection } = useConnection();

//   const program = useMemo(() => {
//     if (anchorWallet) {
//       const provider = new anchor.AnchorProvider(connection, anchorWallet, anchor.AnchorProvider.defaultOptions());
//       const programKey = new PublicKey(PROGRAM_ID);
//       const program = new anchor.Program(IDL, programKey, provider);

//       return program;
//     }
//   }, [connection, anchorWallet]);

//   async function getFeePoolBalance() {
//     const balanceInfo = await connection.getTokenAccountBalance(FEE_POOL);
//     console.log("Fee pool balance:", balanceInfo.value.uiAmount);
//     return balanceInfo.value.uiAmount;
//   }

//   async function claimRewards() {
//     if (!publicKey || !anchorWallet || !connection || !program) {
//       console.error("Could not claim rewards");
//       return;
//     }

//     const [withdrawAuthority] = await PublicKey.findProgramAddressSync(
//       [Buffer.from("withheld"), MINT_ADDRESS.toBuffer()],
//       program.programId
//     );

//     const userWallet = publicKey;
//     const userTokenAccount = await getAssociatedTokenAddress(MINT_ADDRESS, userWallet);

//     console.log("User Token Account:", userTokenAccount.toBase58());

//     // Call the claimInterest instruction on the program.
//     try {
//       const tx = await program.methods
//         .claimInterest()
//         .accounts({
//           mint: MINT_ADDRESS,
//           withdrawAuthority: withdrawAuthority,
//           feePool: FEE_POOL,
//           userTokenAccount: userTokenAccount,
//           tokenProgram: anchor.utils.token.TOKEN_PROGRAM_ID,
//         })
//         .rpc({ skipPreflight: true, commitment: "confirmed" });

//       console.log("Claim Interest transaction signature:", tx);
//     } catch (err) {
//       console.error("Error claiming interest:", err);
//     }
//   }

//   return {
//     getFeePoolBalance,
//     claimRewards,
//   };
// };
