import React from "react";
import styled from "styled-components";
import ImgUrl from "../resources/photo1.png";
import PersonUrl from "../resources/photo2.png";
const Container = styled.div`
  display: flex;
  background-color: #181719;
  height: calc(90vh - 75px);
  width: 100%;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    height: 90vh;
  }
  background-color: salmon;
`;

const TextContainer = styled.div`
  width: 100%;
  @media (min-width: 700px) {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
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
  width: 80%;
  margin-top: 25px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 29px;
`;
const ImgContainer = styled.div`
  background-color: seagreen;
  /* padding-right: 10px; */
  width: 100%;
  height: 90%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (min-width: 700px) {
    width: 60%;
  }
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
    <Container>
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
    </Container>
  );
};

export default Content;
