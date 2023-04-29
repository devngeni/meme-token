import { Headers, Title } from "@/commons";
import styled from "styled-components";

export const AboutWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-content: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  margin: 0;
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
  width: 435px;
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
