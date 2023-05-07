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
import Link from "next/link";

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterBody>
          <FooterTile>🚀BOB PEPE AI</FooterTile>
          <FooterText>
            BOB PEPE AI is a community driven, fair launched DeFi Token.
          </FooterText>
        </FooterBody>
        <FooterContent>
          <FooterBody>
            <FooterHeader>QuickLinks</FooterHeader>
            <FooterLink>
              <Link href="">About us</Link>
            </FooterLink>
            <FooterLink>
              <Link href="">White Paper</Link>
            </FooterLink>
            <FooterLink>
              <Link href="">FAQs</Link>
            </FooterLink>
          </FooterBody>

          <FooterBody>
            <FooterHeader>Products</FooterHeader>
            <FooterLink>
              <Link href="">Airdrop</Link>
            </FooterLink>
            <FooterLink>
              <Link href="">Lucky Drop</Link>
            </FooterLink>
            <FooterLink>
              <Link href="">Earn</Link>
            </FooterLink>
          </FooterBody>

          <FooterBody>
            <FooterHeader>Press</FooterHeader>
            <FooterLink>
              <Link href="">Terms of Use</Link>
            </FooterLink>
            <FooterLink>
              <Link href="">Privacy Policy</Link>
            </FooterLink>
            <FooterLink>
              <Link href="">Brand</Link>
            </FooterLink>
          </FooterBody>
        </FooterContent>
        <FooterBody>
          <FooterText>
            The secret weapon that humans have over AI is &#34;intuition.&#34;
            Your intuition tells you to join our great community.
          </FooterText>
          <FooterIconWrapper style={{ justifyContent: "start" }}>
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
