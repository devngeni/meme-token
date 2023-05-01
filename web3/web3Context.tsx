// src/web3/web3Context.tsx

import React, { createContext, useContext, useState, useEffect } from "react";
import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { configs } from "@/config/config";

interface IWeb3Context {
  web3: Web3 | null;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
}

const Web3Context = createContext<IWeb3Context>({
  web3: null,
  connectWallet: async () => {},
  disconnectWallet: () => {},
});

export const useWeb3 = () => useContext(Web3Context);

interface Web3ProviderProps {
  children: React.ReactNode;
}

export const Web3Provider: React.FC<Web3ProviderProps> = ({ children }) => {
  const [web3, setWeb3] = useState<Web3 | null>(null);
  const [web3Modal, setWeb3Modal] = useState<Web3Modal | null>(null);

  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: configs.INFURA_ID, // Replace with your Infura Project ID
      },
    },
  };

  useEffect(() => {
    const initWeb3Modal = () => {
      const web3ModalInstance = new Web3Modal({
        network: "mainnet",
        cacheProvider: true,
        providerOptions,
      });

      setWeb3Modal(web3ModalInstance);

      if (web3ModalInstance.cachedProvider) {
        connectWallet();
      }
    };

    if (typeof window !== "undefined") {
      initWeb3Modal();
    }
  }, []);

  const connectWallet = async () => {
    try {
      const provider = await web3Modal.connect();
      const web3Instance = new Web3(provider);
      setWeb3(web3Instance);
    } catch (error) {
      if (error instanceof Error && error.message === 'User closed modal') {
        // Handle the error as needed, e.g., display a notification, log it, or just ignore it
        console.log('User closed the wallet connection modal');
      } else {
        // Handle any other errors
        console.error('An unexpected error occurred:', error);
      }
    }
  };

  const disconnectWallet = () => {
    web3Modal.clearCachedProvider();
    setWeb3(null);
  };

  useEffect(() => {
    if (web3Modal?.cachedProvider) {
      connectWallet();
    }
  }, [web3Modal]);
  if (!web3Modal) {
    return <div>Loading...</div>; // Display a loading message while waiting for web3Modal to be initialized
  }
  return (
    <Web3Context.Provider value={{ web3, connectWallet, disconnectWallet }}>
      {children}
    </Web3Context.Provider>
  );
};
