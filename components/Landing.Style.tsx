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
    background: url("/BobGun.svg") #000;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    z-index: -1;
    opacity: 1;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    &::before {
      background: url("/BobGun.svg");
      background-size: contain;
      background-repeat: no-repeat;
      background-position: bottom;
    }
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
  backdrop-filter: blur(50px);
  @media (max-width: 768px) {
    width: 90%;
    padding: 20px;
    gap: 0;
  }
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
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const LandingHeader = styled.div`
  font-weight: 700;
  font-size: clamp(24px, calc(1.5rem + ((1vw - 7.68px) * 3.4722)), 64px);
  line-height: 70px;
  color: #ffffff;
  @media (max-width: 768px) {
    text-align: center;
    line-height: 40px;
    padding: 10px 0;
  }
`;
export const LandingText = styled.div`
  font-weight: 400;
  font-size: 21px;
  line-height: 30px;
  color: #e0e0e0;
  @media (max-width: 768px) {
    text-align: center;
    padding: 1rem 0;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const Button = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 32px;
  gap: 10px;
  width: 219px;
  height: 57px;
  font-weight: 400;
  font-size: 18px;
  background: linear-gradient(264.66deg, #83f7a3 19.25%, #acf780 95.17%);
  border: 0.5px solid #e8e8e8;
  box-shadow: 1px 1px 0px #000000;
  border-radius: 10px;
  color: #201124;
  border: none;
  cursor: pointer;
  &:hover {
    background: rgba(172, 247, 128, 0.05);
    border: 0.5px solid #e8e8e8;
    transition: all 1s ease-in-out;
    color: #fff;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
`;
export const Button2 = styled(Button)`
  background: rgba(172, 247, 128, 0.05);
  border: 0.5px solid #e8e8e8;
  color: #ffffff;
  backdrop-filter: blur(10px);
  &:hover {
    background: linear-gradient(264.66deg, #83f7a3 19.25%, #acf780 95.17%);
    color: #201124;
  }
`;

export const Button3 = styled(Button)`
  width: 491px;
  a {
    text-decoration: none;
    color: #201124;
  }
  a:hover {
    color: #fff;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
`;
