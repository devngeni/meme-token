import { Title } from "@/commons";
import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background: #201124;
`;
export const FooterContainer = styled.div`
  width: 80%;
  height: 40vh;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 3rem;
  @media (max-width: 1200px) {
    width: 96%;
    gap: 1rem;
  }
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
  @media (max-width: 1200px) {
    font-size: 1.2rem;
  }
`;
export const FooterText = styled.p`
  width: 100%;
  color: #fff;
  @media (max-width: 1200px) {
    font-size: 0.8rem;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
export const FooterHeader = styled.div`
  color: #fff;
  font-size: 1.5rem;
  @media (max-width: 1200px) {
    font-size: 1.2rem;
  }
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
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
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 2.5rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 10px;
  span {
    color: rgb(161, 161, 161);
    font-size: 0.8rem;
  }
  a {
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: rgb(161, 161, 161);
  }

  a:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #88d7cf;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  a:hover {
    color: #88d7cf;
  }

  a:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  @media (max-width: 769px) {
    font-size: 1.5rem;
    text-align: center;
  }

  @media (max-width: 1200px) {
    font-size: 0.8rem;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const FooterIconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
  @media (max-width: 1200px) {
    gap: 1rem;
  }
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
