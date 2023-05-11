import { useContext } from "react";
import {
  AboutImage,
  AboutList,
  AboutListWrapper,
  AboutRightItem,
  AboutTitle,
  EconomicsContainer,
  EconomicsWrapper,
  WhatContent,
} from "./About.styles";
import GlobalContext from "@/context/GlobalContext";

export default function EconomicsSection() {
  const { isMobile } = useContext(GlobalContext);
  return (
    <EconomicsWrapper>
      <EconomicsContainer>
        <AboutTitle>BOBtonomics Distribution</AboutTitle>
        <WhatContent>
          <AboutListWrapper>
            <AboutList>
              25% airdrop tokens distributed to eligible wallets which have
              minted NFTs. Remaining tokens will be burned.
            </AboutList>
            <AboutList>
              Liquidity - 50% goes for growing the community
            </AboutList>
            <AboutList>10% will be distributed to team management</AboutList>
            <AboutList>
              15% will be distributed to the marketing team.
            </AboutList>
          </AboutListWrapper>
          <AboutRightItem>
            <AboutImage />
          </AboutRightItem>
        </WhatContent>
      </EconomicsContainer>
    </EconomicsWrapper>
  );
}
