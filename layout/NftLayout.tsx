import { Footer, Navbar } from "@/components";
import Head from "next/head";

export default function NftLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Bob Pepe NFT</title>
        <meta name="description" content="Mint your BOB nft" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
