import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styled from "styled-components";

gsap.registerPlugin(ScrollTrigger);

const Container = styled.div`
  display: flex;
  width: 100%;
  overflow-x: hidden;
  background: url("/Mesh.svg");
  height: 100vh;
  overflow: hidden;
`;

const Card = styled.div`
  box-sizing: border-box;
  width: 498px;
  height: 459px;
  background: #201124;
  border-radius: 10px;
  flex: 0 0 auto;
  padding: 20px;
  margin-right: 10px;
  border: 1px solid #19f1df;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    width: 40%;
    height: auto;
    margin: 10px auto;
  }
`;

const SVGImage = styled.div`
  width: 437px;
  height: 263px;
  background: url("/Water.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`;

const Title = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 40px;
  background: linear-gradient(264.66deg, #83f7a3 19.25%, #acf780 95.17%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

const Button = styled.button`
  width: 102px;
  height: 22px;
  background: rgba(172, 247, 128, 0.1);
  border-radius: 5px;
  border: none;
  color: #c2c2c2;
  font-size: 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Wrapper = styled.div`
  display: flex;
  align-self: center;
  gap: 2rem;
  justify-content: space-evenly;
  padding-left: 20vw;

  @media (max-width: 768px) {
    padding-right: 10vw;
    padding-left: 90vw;
  }
`;

const cardInfo = [
  { title: "Basin", buttonCount: 5 },
  { title: "Canyon", buttonCount: 3 },
  { title: "Hill", buttonCount: 2 },
  { title: "Mountain", buttonCount: 4 },
];

export default function IndexPage() {
  const horizontalSection: any = useRef();
  useEffect(() => {
    ScrollTrigger.matchMedia({
      // desktop
      "(min-width: 769px)": function () {
        let ctx = gsap.context(() => {
          const sections = gsap.utils.toArray(".panel");
          gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
              trigger: horizontalSection.current,
              pin: true,
              invalidateOnRefresh: true,
              anticipatePin: 1,
              scrub: 1.23,
              end: () =>
                "+=" +
                (document.querySelector(".container") as HTMLElement).offsetWidth,
            },
          });
        });
      },
      // mobile
      "(max-width: 768px)": function () {
        const sections: any = gsap.utils.toArray(".panel");
        const totalSectionsWidth: any = sections.reduce((acc: any, section: any) => acc + section.offsetWidth, 0);
        const viewportWidth = window.innerWidth;

        gsap.to(sections, {
          xPercent: -200 * (totalSectionsWidth / viewportWidth - 1),
          ease: "none",
          scrollTrigger: {
            trigger: horizontalSection.current,
            pin: true,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            scrub: 1,
            end: () =>
              "+=" + horizontalSection.current.offsetWidth,
          },
        });
      },
    });

  }, []);


  return (
    <Container className="container" ref={horizontalSection}>
      <Wrapper>
        {cardInfo.map((info, index) => (
          <Card
            className="panel"
            key={index}
            style={{ marginRight: index === cardInfo.length - 1 ? 0 : "2rem" }}
          >
            <SVGImage />
            <Title>{info.title}</Title>
            <ButtonWrapper>
              {Array.from({ length: info.buttonCount }).map((_, btnIndex) => (
                <Button key={btnIndex}>Button {btnIndex + 1}</Button>
              ))}
            </ButtonWrapper>
          </Card>
        ))}
      </Wrapper>
    </Container>
  );
}