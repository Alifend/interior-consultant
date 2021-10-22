import React from "react";
import styled from "styled-components";
import ImgUrl from "../resources/photo1.png";
import PersonUrl from "../resources/photo2.png";
const Container = styled.div`
  display: flex;
  background-color: #181719;

  background-color: salmon;
`;

const TextContainer = styled.div`
  grid-area: leftside;
  background-color: black;
`;

const Title = styled.p`
  color: white;
  font-family: Lora;
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 61px;
`;
const Text = styled.p`
  color: white;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 29px;
`;
const ImgContainer = styled.div`
  grid-area: rightside;
  background-color: black;
  /* padding-right: 10px; */
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  /* background-color: aquamarine; */
`;
const Image = styled.img`
  height: 70%;
  width: 100%;
  /* min-width: 350px; */
  max-width: 550px;
  @media (min-width: 700px) {
    /* min-width: 500px; */
  }
`;
const Card = styled.div`
  position: absolute;
  background-color: pink;
  height: 20%;
  width: 45%;
  bottom: 20%;
  right: 10%;
`;
const Content = () => {
  return (
    <>
      <TextContainer>
        <Title>Modern interior</Title>
        <Text>
          A full-Service residential & commercial interior design and staging
          company offering professional organizing & eco-services.{" "}
        </Text>
      </TextContainer>
      <ImgContainer>
        {/* <Image src={ImgUrl} />
        <Card /> */}
      </ImgContainer>
    </>
  );
};

export default Content;
