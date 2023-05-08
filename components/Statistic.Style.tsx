import styled from "styled-components";

export const StaticWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-content: center;
  margin: 20px 0;
`;
export const StaticContainer = styled.div`
  border-radius: 16px;
  position: relative;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgb(30, 39, 64);
  width: 60%;
  height: 40vh;
  display: flex;
  flex-direction: row;
  @media (max-width: 1200px) {
    width: 80%;
    height: 60vh;
  }
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    height: 70vh;
  }
`;
export const StaticHeader = styled.div`
  color: #88d7cf;
  font-size: 1rem;
`;
export const StaticBody = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 2rem;
  @media (max-width: 1200px) {
    padding: 1rem;
  }
  @media (max-width: 768px) {
    padding: 10px;
    flex-direction: column;
    flex-wrap: wrap;
  }
`;
export const StaticTitle = styled.div`
  color: #fff;
  font-size: 2rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  @media (max-width: 768px) {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    gap: 1rem;
  }
`;
export const StaticText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;
export const StaticAdress = styled.div`
  color: rgb(23, 243, 221);
  font-size: calc(0.6rem + ((1vw - 0.2rem) * 1));
  flex-wrap: nowrap;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
export const StaticImage = styled.div`
  width: 50%;
  height: 100%;
  background: url("/Frog.png");
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;
  border-radius: 16px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
