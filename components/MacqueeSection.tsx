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
      title: "Comming Soon",
      text: "BOB PEPE Accumulated $ARTS Burned",
    },
    {
      title: "Comming Soon",
      text: "BOB PEPE Total Supply",
    },
    {
      title: "Comming Soon",
      text: "BOB PEPE Total Burn",
    },
    {
      title: "Comming Soon",
      text: "BOB PEPE Accumulated $ARB",
    },
    {
      title: "Comming Soon",
      text: "BOB PEPE Trading Volume",
    },
    {
      title: "Comming Soon",
      text: "BOB PEPE Currency Supply",
    },
    {
      title: "Comming Soon",
      text: "Lucky Drop Reward $ARB",
    },
  ];

  const renderMarqueeItems = () =>
    marqueeData.map((item, index) => (
      <MarqueeItem key={index} className="marquee__content">
        <MarqueeTitle>{item.title}</MarqueeTitle>
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
