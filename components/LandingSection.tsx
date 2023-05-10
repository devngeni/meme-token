import { Title } from "@/commons";
import {
  Button,
  Button2,
  ButtonWrapper,
  LandingContainer,
  LandingContent,
  LandingGrid,
  LandingHeader,
  LandingText,
  LandingWrapper,
} from "./Landing.Style";

export default function LandingSection() {
  return (
    <LandingWrapper>
      <LandingContainer>
        <LandingContent>
          <Title>Proudly Launched on Arbitrum</Title>
          <LandingHeader>$BBPP airdrop is coming soon!</LandingHeader>
          <LandingText>
            A total of 1,000,000,000 with o%tax BBPP tokens will be
            airdroppedAll users must register the form to participate in the
            Airdrop.
          </LandingText>
          <ButtonWrapper>
            <Button>Claim</Button>
            <Button2>Join Wishlist</Button2>
          </ButtonWrapper>
        </LandingContent>
        <LandingGrid />
      </LandingContainer>
    </LandingWrapper>
  );
}
