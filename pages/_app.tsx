import { configs } from "@/config";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import "@/styles/globals.css";
import { Web3Provider } from "@/web3";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import {
  arbitrum,
  avalanche,
  bsc,
  fantom,
  gnosis,
  mainnet,
  optimism,
  polygon,
} from "wagmi/chains";
import { useEffect, useState } from "react";
import { Web3Modal } from "@web3modal/react";
import GlobalProvider from "@/context/GlobalProvider";

const projectId = configs.INFURA_ID;

const chains = [
  mainnet,
  polygon,
  avalanche,
  arbitrum,
  bsc,
  optimism,
  gnosis,
  fantom,
];

const { provider } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ version: 1, chains, projectId }),
  provider,
});
const ethereumClient = new EthereumClient(wagmiClient, chains);
export default function App({ Component, pageProps }: AppProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);
  return (
    <>
      {ready ? (
        <WagmiConfig client={wagmiClient}>
          <GlobalProvider>
            <Component {...pageProps} />
          </GlobalProvider>
        </WagmiConfig>
      ) : null}
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
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
