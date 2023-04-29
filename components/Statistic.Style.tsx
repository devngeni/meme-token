import styled from "styled-components";

export const StaticWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-content: center;
`;
export const StaticContainer = styled.div`
  border-radius: 16px;
  position: relative;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgb(30, 39, 64);
  width: 70%;
  height: 40vh;
  display: flex;
  flex-direction: row;
`;
export const StaticHeader = styled.div`
  color: #88d7cf;
  font-size: 1rem;
`;
export const StaticBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 2rem;
`;
export const StaticTitle = styled.div`
  color: #fff;
  font-size: 2rem;
`;
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
`;
export const StaticText = styled.div``;
export const StaticAdress = styled.div`
  color: rgb(23, 243, 221);
  font-size: 1.5rem;
`;
export const StaticImage = styled.div`
width: 50%;
height: 100%;
background: url("/Astronat.jpg") #000;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
border-radius: 16px;
`;

