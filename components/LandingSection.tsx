import { Title, Headers, Text, TextBreak } from "@/commons";
import {
  BodyImage,
  Button,
  ButtonWrapper,
  LandingButton,
  LandingContainer,
  LandingText,
  LandingTitle,
  LandingWrapper,
  TextBody,
  TextCard,
  TextWrapper,
} from "./Landing.Style";
import { toast } from "react-hot-toast";
import { FooterIcon, FooterIconWrapper } from "./Footer.Styles";
import Twitter from "@/public/Twitter";
import LinkedIn from "@/public/LinkedIn";
import Youtube from "@/public/Youtube";
import Discord from "@/public/Discord";
export default function LandingSection() {
  const connectToWallet = () => {
    toast.success("Coming soon...");
  };
  return (
    <LandingWrapper>
      <LandingContainer>
        <Headers>proudly launched on Arbitram</Headers>
        <TextWrapper>
          <BodyImage>
            <LandingTitle>You can claim BOB PEPE AI now!</LandingTitle>
            <LandingText>
              BOB PEPE AI is excited to announce that a whopping 210 quadrillion
              BOB tokens are up for grabs for those who participated in the ARB
              airdrop. tokens that have not been claimed within
              <TextBreak />
            </LandingText>
            <TextCard>🔥31 days will be burned🔥</TextCard>
            <ButtonWrapper>
              <Button onClick={() => connectToWallet()}>Claim Airdrop</Button>
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
            </ButtonWrapper>
          </BodyImage>
          <TextBody>
            <Text>
              Bob Pepe AI is a community driven, fair launched DeFi Token. Three
              simple functions occur during each trade: Reflection, LP
              Acquisition, and Burn.
            </Text>
            <Text>
              Say goodbye to mundane investments and hello to the excitement of
              BOB PEPE AI. We&#39;re here to make investing an adrenaline-fueled
              ride
            </Text>
          </TextBody>
        </TextWrapper>
      </LandingContainer>
    </LandingWrapper>
  );
}
