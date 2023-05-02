import { Title } from "@/commons";
import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background: #1f2117;
`;
export const FooterContainer = styled.div`
  width: 80%;
  height: 40vh;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 3rem;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
  }
`;
export const FooterBody = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  width: 90%;
`;
export const FooterTile = styled(Title)`
  font-size: 1.5rem;
  text-align: left;
  justify-content: left;
  width: 100%;
`;
export const FooterText = styled.p`
  width: 100%;
  color: #fff;
`;
export const FooterHeader = styled.div`
  color: #fff;
  font-size: 1.5rem;
`;
export const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;
export const FooterLink = styled.div`
  cursor: pointer;
  width: 100%;
  line-height: 2rem;
  color: #9e9e9e;
  &:hover {
    color: #88d7cf;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    &:after {
      content: "";
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      right: 10%;
      background-color: #88d7cf;
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }
    &:hover:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
`;

export const FooterIconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
  @media (max-width: 768px) {
    gap: 1rem;
    backdrop-filter: blur(10px);
    border-radius: 22px;
    padding: 0.5rem 0;
  }
`;
export const FooterIcon = styled.div`
  cursor: pointer;
  &:hover {
    path {
      fill: #88d7cf;
      transition: 0.2s ease-in-out;
    }
  }
`;
