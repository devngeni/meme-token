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
  const connectToWallet = () => {
    toast.success("Coming soon...");
  };
  return (
    <NavbarWrapper>
      <NavbarContainer>
        <NavbarTitle>🚀BOB PEPE AI</NavbarTitle>
        <NavbarMenu>
          <NavbarMenuItemLink>
            <span>AirDrop</span>
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
          <NavbarButton onClick={() => connectToWallet()}>
            Connect Wallet
          </NavbarButton>
        </NavbarMenuItem>
      </NavbarContainer>
    </NavbarWrapper>
  );
}
