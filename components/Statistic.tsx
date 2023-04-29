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
              0x000000000000000000000000000000000000dEaD ↗
            </StaticAdress>
          </StaticText>
        </StaticBody>
        <StaticImage></StaticImage>
      </StaticContainer>
    </StaticWrapper>
  );
}
