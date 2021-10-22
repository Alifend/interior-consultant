import React from "react";
import styled from "styled-components";

const Container = styled.div`
  grid-area: leftside;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 25px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 90%;
  @media (max-width: 700px) {
    justify-content: center;
  }
`;

const Title = styled.p`
  font-family: "Lora", serif;
  color: white;
  font-family: Lora;
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 61px;

  margin-bottom: 30px;
  @media (max-width: 700px) {
    font-size: 36px;
    margin-bottom: 15px;
  }
`;
const Text = styled.p`
  font-family: "Montserrat", sans-serif;
  color: white;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 29px;
  @media (max-width: 700px) {
    font-size: 14px;
    width: 65%;
    line-height: 17px;
  }
`;
const Leftside = () => {
  return (
    <Container>
      <TextContainer>
        <Title>Modern interior</Title>
        <Text>
          A full-Service residential & commercial interior design and staging
          company offering professional organizing & eco-services.{" "}
        </Text>
      </TextContainer>
    </Container>
  );
};

export default Leftside;
