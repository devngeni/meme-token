import {
  MarqueeContainer,
  MarqueeInner,
  MarqueeItem,
  MarqueeText,
  MarqueeTitle,
} from "./Marquee.Styles";

export default function MarqueeSection() {
  const marqueeData = [
    {
      title: "492929.12",
      text: "BOB PEPE Accumulated $ARTS Burned",
    },
    {
      title: "202 746T",
      text: "BOB PEPE Total Supply",
    },
    {
      title: "7207.74T",
      text: "BOB PEPE Total Burn",
    },
    {
      title: "202 746T",
      text: "BOB PEPE Accumulated $ARB",
    },
    {
      title: "395,810T",
      text: "BOB PEPE Trading Volume",
    },
    {
      title: "202,748T",
      text: "BOB PEPE Currency Supply",
    },
    {
      title: "571385.23",
      text: "Lucky Drop Reward $ARB",
    },
  ];

  const renderMarqueeItems = () =>
    marqueeData.map((item, index) => (
      <MarqueeItem key={index} className="marquee__content">
        <MarqueeTitle>{item.title}</MarqueeTitle>
        <MarqueeText>{item.text}</MarqueeText>
      </MarqueeItem>
    ));

  return (
    <MarqueeContainer>
      <MarqueeInner>
        {renderMarqueeItems()}
        {renderMarqueeItems()}
      </MarqueeInner>
    </MarqueeContainer>
  );
}
