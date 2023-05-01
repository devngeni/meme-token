import { Title } from "@/commons";
import styled from "styled-components";

export const NavbarWrapper = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  align-content: center;
  justify-content: center;
  backdrop-filter: blur(15px);
  background: transparent;
  position: fixed;
  z-index: 10;
`;
export const NavbarContainer = styled.div`
  width: 80%;
  height: 100%;
  justify-content: space-evenly;
  display: inline-flex;
  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`;
export const NavbarContent = styled.div``;
export const NavbarLogo = styled.div``;
export const NavbarTitle = styled(Title)`
  font-size: 1.5rem;
  text-align: left;
  width: 20%;
  @media (max-width: 768px) {
    width: 50%;
    font-size: 1.5rem;
  }
`;
export const NavbarMenu = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  gap: 2rem;
  align-items: center;
  width: 30%;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const NavbarMenuItemLink = styled.div`
  background: linear-gradient(
    270deg,
    rgb(156, 81, 255) 0%,
    rgb(85, 161, 255) 50%,
    rgb(156, 81, 255) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  position: relative;
  &:hover {
    color: #9e9e9e;
    transition: all 0.5s ease-in-out;
    background: #9e9e9e;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    &:after {
      content: "";
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      right: 0;
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

export const NavbarMenuItem = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  @media (max-width: 768px) {
    width: 50%;
  }
`;
export const NavbarButton = styled.button`
  width: 120px;
  height: 40px;
  background: #3396ff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-weight: 500;
  font-size: 1.2rem;
  cursor: pointer;
  &:hover {
    border: 1px solid #ffd2ed;
    transition: all 0.5s ease-in-out;
  }
  @media (max-width: 768px) {
    width: 60%;
  }
`;
