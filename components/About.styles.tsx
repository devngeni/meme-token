import { Headers, Title } from "@/commons";
import styled from "styled-components";
export const AboutWrapper = styled.section`
  width: 100%;
  padding: 4rem 0;
  position: relative;
  background: url("/Dots.svg") #000;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;
export const AboutContainer = styled.div`
  width: 80%;
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
  font-size: clamp(2rem, 4vw, 3rem);
  text-align: center;
  text-decoration: underline;
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

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 80%;
`;

export const AboutCard = styled.div`
  background: #404430;
  backdrop-filter: blur(17px);
  border-radius: 22px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AboutText = styled.div`
  color: #fff;
  font-size: clamp(0.8rem, 1.6vw, 1.2rem);
  line-height: 1.5;

  span {
    color: #41bfb3;
  }
`;

export const AboutImage = styled.div`
  width: 100%;
  height: 40vh;
  background: url("/Stats.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  transform: scaleX(1.1);
  @media (min-width: 768px) {
    width: 100%;
    svg {
      width: 600px;
    }
  }
`;
export const LineWrapper = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
export const EconomicsWrapper = styled(AboutWrapper)`
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

export const AboutLeftItem = styled.div``;
export const AboutRightItem = styled.div`
  width: 100%;
  height: 100%;
`;
export const EconomicsContainer = styled(AboutContainer)`
  width: 100%;
`;
export const AboutListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  font-size: 2rem;
  @media (max-width: 768px) {
    font-size: 1rem;
    width: 90%;
  }
`;
export const AboutList = styled.li`
  color: #fff;
  font-size: calc(1rem + ((1vw - 0.2rem) * 1));
`;
