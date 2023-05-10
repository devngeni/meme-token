import {
  StaticAdress,
  StaticBody,
  StaticContainer,
  StaticHeader,
  StaticImage,
  StaticText,
  StaticTitle,
  StaticWrapper,
  TextWrapper,
} from "./Statistic.Style";

export default function StatisticSection() {
  return (
    <StaticWrapper>
      <StaticContainer>
        <StaticBody>
          <StaticTitle>Burn Statistic 🔥</StaticTitle>
          <TextWrapper>
            <StaticText>
              <StaticHeader>Total BOB PEPE Destroyed</StaticHeader>
              <StaticTitle>202,746T</StaticTitle>
            </StaticText>

            <StaticText>
              <StaticHeader>Amount of Burned BOB PEPE (%)</StaticHeader>
              <StaticTitle>4.1%</StaticTitle>
            </StaticText>
          </TextWrapper>
          <StaticText>
            <StaticHeader>Destroyed Address</StaticHeader>
            <StaticAdress>
              <a
                href="https://arbiscan.io/address/0xd9a5f0164d3e707bca2c6b82c5b987776261b770#code"
                rel={"noreferrer"}
                target={"_blank"}
              >
                0xd9A5f0164D3E707Bca2c6B82C5b987776261B770↗
              </a>
            </StaticAdress>
          </StaticText>
        </StaticBody>
        <StaticImage />
      </StaticContainer>
    </StaticWrapper>
  );
}
