import { Title } from "@/commons";
import styled from "styled-components";

const responsive = {
  mobile: "@media (max-width: 768px)",
  tablet: "@media (max-width: 992px)",
  desktop: "@media (max-width: 1200px)",
};
export const NavbarWrapper = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(15px);
  background: #201124;
  position: fixed;
  z-index: 10;
`;

export const NavbarContainer = styled.div`
  width: 80%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  grid-gap: 1rem;
  padding: 0 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
    width: 100%;
  }
`;

export const NavbarTitle = styled(Title)`
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  text-align: left;
  margin: 0;
  grid-column: 1;
`;

export const NavbarMenu = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  grid-column: 2;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavbarMenuItemLink = styled.div`
  font-weight: 400;
  line-height: 27px;
  color: #75d88a;
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  cursor: pointer;
  position: relative;
    a {
      cursor: pointer;
      position: relative;
      display: flex;
      align-items: center;
      transition: 0.2s ease-in-out;
      text-decoration: none;
       color: #75d88a;
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
      color:#fff;
    }

    a:hover:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
`;

export const NavbarMenuItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  grid-column: 3;
  @media (max-width: 768px) {
    grid-column: 2;
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
  font-size: clamp(1rem, 2vw, 1.2rem);
  cursor: pointer;
  &:hover {
    border: 1px solid #ffd2ed;
    transition: all 0.5s ease-in-out;
  }
`;
