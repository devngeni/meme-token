import {
  NavbarButton,
  NavbarContainer,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuItemLink,
  NavbarTitle,
  NavbarWrapper,
} from "./Navbar.styles";

export default function Navbar() {
  return (
    <NavbarWrapper>
      <NavbarContainer>
        <NavbarTitle>🚀BOB PEPE AI</NavbarTitle>
        <NavbarMenu>
          <NavbarMenuItemLink>
            <span>AirDrop</span>
          </NavbarMenuItemLink>
          <NavbarMenuItemLink>Earn</NavbarMenuItemLink>
          <NavbarMenuItemLink>LP</NavbarMenuItemLink>
          <NavbarMenuItemLink>LuckyDrop</NavbarMenuItemLink>
          <NavbarMenuItemLink>Dao</NavbarMenuItemLink>
        </NavbarMenu>
        <NavbarMenuItem>
          <NavbarButton>Connect Wallet</NavbarButton>
        </NavbarMenuItem>
      </NavbarContainer>
    </NavbarWrapper>
  );
}
