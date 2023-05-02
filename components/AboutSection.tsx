import { Headers, Title } from "@/commons";
import {
  AboutBody,
  AboutCard,
  AboutContainer,
  AboutContent,
  AboutGrid,
  AboutHeader,
  AboutLeftItem,
  AboutRightItem,
  AboutText,
  AboutTitle,
  AboutWrapper,
  LineWrapper,
} from "./About.styles";
import Line from "@/public/Lines";
import Technomics from "@/public/Technomics";

export default function AboutSection() {
  const aboutData = [
    {
      title:
        "At <span>BOB PEPE</span>, we believe that investing should be thrilling, not boring. That’s why we’ve created a token that’s designed for people who want to take risks, have fun, and maybe even get a little bit rekted along the way.",
    },
    {
      title:
        "So if you’re tired of playing it safe and want to join the craziest ride in the crypto world, then <span>BOB PEPE</span> is the token for you. With us, you can rekt your portfolio and embrace the chaos of the market.",
    },
    {
      title:
        "Join the <span>BOB PEPE AI</span> army today and REKTify you portfolio! Remember – it’s not about the destination, it’s about the rekted journey.",
    },
  ];
  return (
    <AboutWrapper>
      <AboutContainer>
        <AboutTitle>WELCOME TO BOB PEPE AI</AboutTitle>
        <AboutHeader>This is the about section</AboutHeader>
        <AboutBody>
          {aboutData.map((data) => (
            <AboutContent key={data.title}>
              <AboutCard>
                <AboutText dangerouslySetInnerHTML={{ __html: data.title }} />
              </AboutCard>
              <LineWrapper>
                <Line />
              </LineWrapper>
            </AboutContent>
          ))}
        </AboutBody>
      </AboutContainer>
    </AboutWrapper>
  );
}
