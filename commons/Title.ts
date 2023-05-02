import styled from "styled-components";

export const Title = styled.h1`
  width: 100%;
  font-weight: 700;
  font-size: 49px;
  line-height: 63px;
  letter-spacing: 0.01em;
  background: linear-gradient(64.87deg, #ffd2ed -0.1%, #01baef 91.22%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  text-fill-color: transparent;
  font-variation-settings: "slnt" 0;
  @media (max-width: 768px) {
    font-size: 30px;
    line-height: 40px;
    text-align: center;
    margin-bottom: 2px;
  }
`;

export const Headers = styled.h1`
  color: #fff;
  font-weight: 700;
  font-size: 49px;
  background: url("/Line.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  @media (max-width: 768px) {
    font-size: 30px;
    line-height: 40px;
    text-align: center;
    padding: 0 10px;
  }
`;

export const Text = styled.p`
  color: #fff;
  font-weight: 400;
  font-size: 1.5rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const TextBreak = styled.br``;
