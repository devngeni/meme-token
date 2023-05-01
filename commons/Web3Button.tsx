import { Web3Button } from "@web3modal/react";
import { useWeb3 } from "../web3/web3Context";

interface Props {
  icon?: "show" | "hide";
  label?: string;
  balance?: "show" | "hide";
}

export const ConnectWalletButton: React.FC<Props> = ({
  icon = "show",
  label = "",
  balance = "hide",
}) => {
  const { web3, connectWallet, disconnectWallet } = useWeb3();

  const handleClick = async () => {
    if (web3) {
      disconnectWallet();
    } else {
      await connectWallet();
    }
  };

  return (
    <Web3Button
      icon={icon}
      label={label}
      balance={balance}
    />
  );
};
