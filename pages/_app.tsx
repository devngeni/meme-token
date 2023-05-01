import "@/styles/globals.css";
import { Web3Provider } from "@/web3";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Web3Provider>
        <Component {...pageProps} />
      </Web3Provider>
      <Toaster
        toastOptions={{
          style: {
            border: "1px solid #713200",
            padding: "5px",
            color: "#713200",
            fontFamily: "Space Mono",
            fontWeight: 500,
            fontSize: "16px",
          },
        }}
      />
    </>
  );
}
