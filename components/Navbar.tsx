import { useWeb3 } from "@/web3";
import {
  NavbarButton,
  NavbarContainer,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuItemLink,
  NavbarTitle,
  NavbarWrapper,
} from "./Navbar.styles";
import { toast } from "react-hot-toast";
export default function Navbar() {
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
        <NavbarMenuItem>
          <NavbarButton onClick={() => handleClick()}>
            {web3 ? "Disconnect Wallet" : "Connect Wallet"}
          </NavbarButton>
        </NavbarMenuItem>
      </NavbarContainer>
    </NavbarWrapper>
  );
}
