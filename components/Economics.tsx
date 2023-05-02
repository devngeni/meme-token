import Technomics from "@/public/Technomics";
import { useContext } from "react";
import {
  AboutContainer,
  AboutGrid,
  AboutImage,
  AboutLeftItem,
  AboutList,
  AboutListWrapper,
  AboutRightItem,
  AboutTitle,
  AboutWrapper,
  EconomicsContainer,
  EconomicsWrapper,
} from "./About.styles";
import GlobalContext from "@/context/GlobalContext";

export default function EconomicsSection() {
  const { isMobile } = useContext(GlobalContext);
  return (
    <EconomicsWrapper>
      <EconomicsContainer>
        <AboutTitle>BOBtonomics Distribution</AboutTitle>
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
            <AboutImage />
          </AboutRightItem>
        </AboutGrid>
      </EconomicsContainer>
    </EconomicsWrapper>
  );
}
