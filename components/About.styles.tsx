import { Headers, Title } from "@/commons";
import styled from "styled-components";
import { LandingText } from "./Landing.Style";
export const AboutWrapper = styled.section`
  width: 100%;
  padding: 4rem 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  backdrop-filter: blur(15px);
  background: url("Glowb.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left;
  z-index: 1;
  position: relative;
  &::before {
    background-image: url("/GroupLines.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 1;
  }
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;
export const AboutContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const AboutTitle = styled(Title)`
  font-weight: 700;
  font-size: 40px;
  line-height: 44px;
  text-align: center;
  color: #ffffff;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const AboutHeader = styled(Headers)`
  font-size: clamp(1.5rem, 3vw, 2rem);
  line-height: 1.5;
  background: url("/Line.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 100%;
  text-align: center;
  @media (max-width: 768px) {
    padding: 0;
  }
`;
export const AboutParagraph = styled(LandingText)`
  text-align: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  width: 60%;
  padding: 3rem 0;
  @media (max-width: 768px) {
    width: 90%;
    padding: 1rem 0;
  }
`;
export const AboutCardTitle = styled.div`
  font-weight: 700;
  font-size: 28px;
  line-height: 40px;
  background: linear-gradient(264.66deg, #83f7a3 19.25%, #acf780 95.17%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  display: flex;
  text-align: left;
  margin: 0;
`;
export const AboutCard = styled.div`
  background: #201124;
  border-radius: 10px;
  backdrop-filter: blur(17px);
  padding: 2rem;
  height: 317px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
`;

export const AboutText = styled.div`
  color: #fff;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  color: #e0e0e0;
  span {
    color: #acf780;
  }
`;

export const AboutImage = styled.div`
  width: 100%;
  height: 80vh;
  background: url("/Graph.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  @media (max-width: 768px) {
    height: 50vh;
  }
`;
export const LineWrapper = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
export const EconomicsWrapper = styled(AboutWrapper)`
  background: url("/Glowing.svg");
  background-repeat: no-repeat;
  backdrop-filter: blur(15px);
  &::before {
    background-image: none;
  }
  @media (max-width: 768px) {
    &::before {
      top: 0;
    }
  }
`;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  @media (max-width: 1200px) {
    gap: 1rem;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const AboutLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 40%;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
  }
`;

export const AboutLeftItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  width: 100%;
`;
export const AboutRightItem = styled.div``;
export const EconomicsContainer = styled(AboutContainer)`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-content: center;
  flex-wrap: wrap;
`;
export const AboutListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-content: center;
  flex-wrap: wrap;
  font-size: 2rem;
  margin: 0;
  padding: 2rem 0;
  @media (max-width: 768px) {
    font-size: 2rem;
    gap: 1rem;
  }
`;
export const AboutList = styled.div`
  color: #fff;
  font-size: clamp(16px, calc(1rem + ((1vw - 7.68px) * 0.1736)), 18px);
  text-align: center;
`;

export const WhatTitle = styled(Title)`
  font-size: 40px;
`;

export const WhatHeader = styled.div`
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  color: #e0e0e0;
  padding: 2rem 0;
`;

export const WhatImage = styled.div`
  width: 367px;
  height: 415px;
  background: #201124;
  box-shadow: -7px 6px 57px 6px rgba(172, 247, 128, 0.25);
  border-radius: 10px;
  background: url("/Frog.png");
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const WhatContent = styled.div`
  width: 100%;
`;
