import { Headers, Title } from "@/commons";
import styled from "styled-components";

export const AboutWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  margin: 20px 0;
  opacity: 1;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: url("/Dots.svg") #000;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 187.5px;
    opacity: 0.5;
    z-index: -1;
  }
`;
export const AboutContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const AboutTitle = styled(Title)`
  text-align: left;
  text-decoration: underline;
`;
export const AboutHeader = styled(Headers)`
  background-position: left;
  background: url("/Line.svg");
  background-repeat: no-repeat;
  background-position: left;
  background-size: contain;
  width: 100%;
`;
export const AboutBody = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;
export const AboutContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;
export const AboutCard = styled.div`
  background: #404430;
  backdrop-filter: blur(17px);
  border-radius: 22px;
  width: 400px;
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;
export const AboutText = styled.div`
  color: #fff;
  line-height: 1.5;

  span {
    color: #41bfb3;
  }
`;

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 2rem;
`;
export const AboutLeftItem = styled.div``;
export const AboutRightItem = styled.div`
  width: 90%;
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
  font-size: 2rem;
`;
export const AboutList = styled.li`
  color: #fff;
`;
