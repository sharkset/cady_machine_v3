import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";

export const network = (process.env.NEXT_PUBLIC_SOLANA_NETWORK ||
  WalletAdapterNetwork.Devnet) as WalletAdapterNetwork;
// const network = WalletAdapterNetwork.Devnet;
export const rpcHost =
  process.env.NEXT_PUBLIC_RPC_HOST || clusterApiUrl(network);

export const candyMachineId = new PublicKey(
  process.env.NEXT_PUBLIC_CANDY_MACHINE_ID ||
  "DtTzubR7B9bzv4aotDw8MiuUuWEAycNxBFgeHfepHgVh"
);
export const defaultGuardGroup =
  process.env.NEXT_PUBLIC_DEFAULT_GUARD_GROUP || undefined; // undefined means default

// "qasJ6jhgtngKk2QnEPdDjuFH8NMoM58W8TxPBXAChPY"
// "3zwFR3spiwbSSMtvVKG2bRT6ttqFoC3MHCafGP8ZrdLz"
// "DAA8yRLu7acVs3kxaTyCjoEjNWGinLaCKVhDY29ASNua"

export const whitelistedWallets = [
  "9qcF1iLiVFaDr9RnvAhpZJ9WVtkfsCdxXjwfEcNxNqLr",
  "N6RkXyFPGCf9kkfMaSYpnFXHBoUNYTzbhZxisom7Aa3",
  "FnuHCzdTSDfujrFa2W5DurP8iTYBpovifeA8uttk56T",
  "3rcvyfGKsT72BZ1kDFVgcSDDyhWmj13FjPPa687ww97X",
  "DR2jouEGRXAUFT7DEnMaz6VixLmpTYV1bAE8LZVMbWXY",
  "3priwFVhMqkVt8mfzVAkUPJUqWGsUqb6aknMjxMnjtVE"
];

export const collectionImageURL =
  process.env.NEXT_PUBLIC_COLLECTION_IMAGE_URL || "https://images.pexels.com/photos/2832432/pexels-photo-2832432.png";

export const collectionTitle =
  process.env.NEXT_PUBLIC_COLLECTION_TITLE || "Collection Name";

export const collectionDescription =
  process.env.NEXT_PUBLIC_COLLECTION_DESCRIPTION || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.";

export const tokenType =
  process.env.NEXT_PUBLIC_TOKEN_TYPE || "Token";

export const websiteURL =
  process.env.NEXT_PUBLIC_WEBSITE_URL || "#";

export const twitterURL =
  process.env.NEXT_PUBLIC_TWITTER_URL || "#";

export const discordURL =
  process.env.NEXT_PUBLIC_DISCORD_URL || "#";