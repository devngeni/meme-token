import { useContext } from "react";
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
import { TextBreak } from "@/commons";
export default function Navbar() {
  const { isMobile } = useContext(GlobalContext);
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
            Buy
          </NavbarMenuItemLink>
          <NavbarMenuItemLink onClick={() => connectToWallet()}>
            NFT
          </NavbarMenuItemLink>
        </NavbarMenu>
        <NavbarMenuItem>
          <Web3Button icon="show" label="Connect Wallet" balance="show" />
          {!isMobile && (
            <>
              <br />
              <Web3NetworkSwitch />
            </>
          )}
        </NavbarMenuItem>
      </NavbarContainer>
    </NavbarWrapper>
  );
}
