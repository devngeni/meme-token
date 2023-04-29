import LinkedIn from "@/public/LinkedIn";
import {
  FooterBody,
  FooterContainer,
  FooterContent,
  FooterHeader,
  FooterIcon,
  FooterIconWrapper,
  FooterLink,
  FooterText,
  FooterTile,
  FooterWrapper,
} from "./Footer.Styles";
import Twitter from "@/public/Twitter";
import Youtube from "@/public/Youtube";
import Discord from "@/public/Discord";

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterBody>
          <FooterTile>🚀BOB PEPE AI</FooterTile>
          <FooterText>
            BOB PEPE AI is a community driven, fair launched DeFi Token. Three
          </FooterText>
        </FooterBody>
        <FooterContent>
          <FooterBody>
            <FooterHeader>QuickLinks</FooterHeader>
            <FooterLink>About us</FooterLink>
            <FooterLink>White Paper</FooterLink>
            <FooterLink>FAQs</FooterLink>
          </FooterBody>

          <FooterBody>
            <FooterHeader>Products</FooterHeader>
            <FooterLink>Airdrop</FooterLink>
            <FooterLink>Lucky Drop</FooterLink>
            <FooterLink>Earn</FooterLink>
          </FooterBody>

          <FooterBody>
            <FooterHeader>Press</FooterHeader>
            <FooterLink>Terms of Use</FooterLink>
            <FooterLink>Privacy Policy</FooterLink>
            <FooterLink>Brand</FooterLink>
          </FooterBody>
        </FooterContent>
        <FooterBody>
          <FooterText>
            The secret weapon that humans have over AI is &#34;intuition.&#34;
            Your intuition tells you to join our great community.
          </FooterText>
          <FooterIconWrapper>
            <FooterIcon>
              <Twitter />
            </FooterIcon>
            <FooterIcon>
              <LinkedIn />
            </FooterIcon>
            <FooterIcon>
              <Youtube />
            </FooterIcon>
            <FooterIcon>
              <Discord />
            </FooterIcon>
          </FooterIconWrapper>
        </FooterBody>
      </FooterContainer>
    </FooterWrapper>
  );
}
