import styled from "styled-components";

export const Title = styled.h1`
  font-weight: 700;
  font-size: clamp(44px, calc(1.5rem + ((1vw - 7.68px) * 3.4722)), 64px);
  line-height: 70px;
  color: #83f7a3;
  margin: 0;
  @media (max-width: 768px) {
    line-height: 44px;
  }
`;

export const Headers = styled.h1`
  font-weight: 700;
  font-size: 64px;
  line-height: 70px;
  color: #83f7a3;
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
  font-size: calc(0.6rem + ((1vw - 0.2rem) * 1));
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const TextBreak = styled.br``;
