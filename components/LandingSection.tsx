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

export default function LandingSection() {
  return (
    <LandingWrapper>
      <LandingContainer>
        <Title>BOB PEPE AI</Title>
        <Headers>proudly launched on Arbitram</Headers>
        <TextWrapper>
          <BodyImage>
            <LandingTitle>You can claim BOB PEPE AI now!</LandingTitle>
            <LandingText>
              BOB PEPE AI is excited to announce that a whopping 210 quadrillion
              BOB tokens are up for grabs for those who participated in the
              ARB airdrop. Don't miss out on this opportunity to claim your
              share of the tokens!
              <TextBreak />
            </LandingText>
            <TextCard>🔥31 days will be burned🔥</TextCard>
            <ButtonWrapper>
              <Button>Claim Airdrop</Button>
              <LandingButton>Invite</LandingButton>
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
              BOB PEPE AI. We're here to make investing an adrenaline-fueled
              ride
            </Text>
          </TextBody>
        </TextWrapper>
      </LandingContainer>
    </LandingWrapper>
  );
}
