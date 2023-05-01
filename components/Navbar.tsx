import { useContext } from "react";
import { useWeb3 } from "@/web3";
import {
  NavbarContainer,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuItemLink,
  NavbarTitle,
  NavbarWrapper,
} from "./Navbar.styles";
import { toast } from "react-hot-toast";
import { Web3Button, Web3NetworkSwitch } from "@web3modal/react";
import GlobalContext from "@/context/GlobalContext";
export default function Navbar() {
  const { isMobile } = useContext(GlobalContext);
  const { web3, connectWallet, disconnectWallet } = useWeb3();

  const handleClick = async () => {
    if (web3) {
      disconnectWallet();
    } else {
      await connectWallet();
    }
  };
  const connectToWallet = () => {
    toast.success("Coming soon...");
  };
  return (
    <NavbarWrapper>
      <NavbarContainer>
        <NavbarTitle>🚀BOB PEPE AI</NavbarTitle>
        <NavbarMenu>
          <NavbarMenuItemLink onClick={() => connectToWallet()}>
            AirDrop
          </NavbarMenuItemLink>
          <NavbarMenuItemLink onClick={() => connectToWallet()}>
            Earn
          </NavbarMenuItemLink>
          <NavbarMenuItemLink onClick={() => connectToWallet()}>
            LP
          </NavbarMenuItemLink>
          <NavbarMenuItemLink onClick={() => connectToWallet()}>
            LuckyDrop
          </NavbarMenuItemLink>
          <NavbarMenuItemLink onClick={() => connectToWallet()}>
            Dao
          </NavbarMenuItemLink>
        </NavbarMenu>
        {isMobile ? (
          <NavbarMenuItem>
            <Web3Button icon="show" label="Connect Wallet" balance="show" />
          </NavbarMenuItem>
        ) : (
          <NavbarMenuItem>
            <Web3Button icon="show" label="Connect Wallet" balance="show" />
            <br />
            <Web3NetworkSwitch />
          </NavbarMenuItem>
        )}
      </NavbarContainer>
    </NavbarWrapper>
  );
}
