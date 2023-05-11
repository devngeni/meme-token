import { AboutWrapper } from "@/components/About.styles";
import {
  NFTContainer,
  NftButton,
  NftCard,
  NftGrid,
  NftGridLeft,
  NftGridRight,
  NftHeader,
  NftHeader2,
  NftHeader3,
  NftText,
  NftTextWrapper,
} from "./Nft.Styles";
import Image from "next/image";
import { Button } from "@/components/Landing.Style";

export default function NftSection() {
  return (
    <AboutWrapper>
      <NFTContainer>
        <NftHeader>
          Mint <span>BOB PEPE</span> OG
        </NftHeader>

        <NftCard>
          <NftGrid>
            <NftGridLeft>
              <NftHeader2>Statistics</NftHeader2>
              <NftTextWrapper>
                <NftText>Total Distributed ARB</NftText>
                <NftHeader3>2173238.149</NftHeader3>
              </NftTextWrapper>

              <NftTextWrapper>
                <NftText>Total Distributed ARB</NftText>
                <NftHeader3>50.960</NftHeader3>
              </NftTextWrapper>

              <NftTextWrapper>
                <NftText>Total Players</NftText>
                <NftHeader3>22273</NftHeader3>
              </NftTextWrapper>

              <NftTextWrapper>
                <NftText>Total Winners</NftText>
                <NftHeader3>841</NftHeader3>
              </NftTextWrapper>
            </NftGridLeft>

            <NftGridRight>
              <Image src="/Frog.png" width={273} height={273} alt="nft" />
              <NftButton>Mint PEPE</NftButton>
            </NftGridRight>
          </NftGrid>
        </NftCard>
      </NFTContainer>
    </AboutWrapper>
  );
}
