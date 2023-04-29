import styled, { keyframes } from "styled-components";

export const MarqueeContainer = styled.div`
  background: linear-gradient(180deg, #040d21 0%, #040d21 100%);
  overflow-x: hidden;
  width: 100%;
  margin: 2em 0 0 0;
`;

export const MarqueeInner = styled.div`
  display: flex;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  text-align: center;
  padding: 2rem;
  z-index: 1;
  display: inline-flex;
  white-space: nowrap;
  align-items: center;
  width: 100%;
  height: 5rem;
  overflow: hidden;
  position: relative;
  animation: scroll 10s linear infinite;
`;
export const MarqueeItem = styled.div`
  display: flex;
  flex-direction: column;
`;
export const MarqueeTitle = styled.div`
  color: #88d7cf;
  font-size: 1.5rem;
`;
export const MarqueeText = styled.div`
  color: #9e9e9e;
  font-size: 1rem;
`;
