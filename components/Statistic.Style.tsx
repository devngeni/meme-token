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
  flex-wrap: nowrap;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  line-height: 2.5rem;
  a {
    color: #21c0de;
    position: relative;
    display: flex;
    align-items: center;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    text-align: justify;
    font-size: clamp(0.8rem, calc(0.5rem + ((1vw - 0.225rem) * 0.5128)), 1rem);
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

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
  }
`;
export const StaticImage = styled.div`
  width: 100%;
  height: 100%;
  background: url("/frogpepe.png");
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;
  border-radius: 16px;
  @media (max-width: 768px) {
    width: 100%;
    background-position: center;
    background-size: cover;
  }
`;
