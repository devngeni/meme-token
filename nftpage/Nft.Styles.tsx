import { AboutContainer } from "@/components/About.styles";
import { Button } from "@/components/Landing.Style";
import styled from "styled-components";
export const NFTContainer = styled(AboutContainer)`
  padding: 3rem 0;
`;
export const NftHeader = styled.h1`
  font-weight: 700;
  font-size: 40px;
  line-height: 44px;
  text-align: center;
  color: #ffffff;
`;
export const NftCard = styled.div`
  width: 1120px;
  height: 540px;
  border-radius: 10px;
  backdrop-filter: blur(150px);
  border: 1px solid #19f1df;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  background: rgba(32, 17, 36, 0.25);
`;
export const NftGrid = styled.div`
  width: 80%;
  height: 80%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  color: #ffffff;
`;
export const NftGridLeft = styled.div`
  position: relative;
  border-right: 1px solid #19f1df;
  z-index: 1;
`;
export const NftGridRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
  img {
    border-radius: 10px;
  }
`;
export const NftHeader2 = styled.h2`
  font-weight: 700;
  font-size: 23px;
  line-height: 24px;
  color: #acf780;
`;

export const NftTextWrapper = styled.div``;
export const NftHeader3 = styled.h3`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;
export const NftText = styled.p`
  font-weight: 300;
  font-size: 13px;
  line-height: 24px;
  color: #b3b3b3;
`;

export const NftButton = styled(Button)`
  width: 273px;
  height: 48px;
  font-weight: 400;
  font-size: 18px;
  color: #000;
`;
