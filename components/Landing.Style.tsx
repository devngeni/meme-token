import styled from "styled-components";

export const LandingWrapper = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
  position: relative;
  &::before {
    background: url("/Glow.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top left;
    z-index: 1;
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    opacity: 0.5;
  }
`;
export const LandingContainer = styled.div`
  width: 100%;
  overflow: hidden;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  align-content: center;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url("/BobGun.svg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    z-index: -1;
    opacity: 1;
  }
`;

export const LandingContent = styled.div`
  width: 60%;
  justify-self: center;
  justify-content: space-evenly;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const LandingGrid = styled.div`
  position: absolute;
  width: 1841.33px;
  height: 1790.84px;
  left: 1149.46px;
  top: -242.22px;
  z-index: -1;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(152, 221, 78, 0.5) 0%,
    rgba(6, 8, 24, 0) 100%
  );
`;

export const LandingHeader = styled.div`
  font-family: "Kanit";
  font-weight: 700;
  font-size: 64px;
  line-height: 70px;
  color: #ffffff;
`;
export const LandingText = styled.div`
  font-weight: 400;
  font-size: 21px;
  line-height: 30px;
  color: #ffffff;
`;
