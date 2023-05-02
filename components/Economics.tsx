import Technomics from "@/public/Technomics";
import {
  AboutContainer,
  AboutGrid,
  AboutLeftItem,
  AboutList,
  AboutListWrapper,
  AboutRightItem,
  AboutTitle,
  AboutWrapper,
  EconomicsContainer,
  EconomicsWrapper,
} from "./About.styles";

export default function EconomicsSection() {
  return (
    <EconomicsWrapper>
      <EconomicsContainer>
        <AboutTitle>BOBtonomics</AboutTitle>
        <AboutGrid>
          <AboutLeftItem>
            <AboutListWrapper>
              <AboutList>10% Team (Lock for 6Months)</AboutList>
              <AboutList>15% Marketing</AboutList>
              <AboutList>55% LP + Staking Rewards</AboutList>
              <AboutList>20% Airdrop</AboutList>
            </AboutListWrapper>
          </AboutLeftItem>
          <AboutRightItem>
            <Technomics />
          </AboutRightItem>
        </AboutGrid>
      </EconomicsContainer>
    </EconomicsWrapper>
  );
}
