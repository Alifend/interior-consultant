import React from "react";
import styled from "styled-components";
import ImgUrl from "../resources/photo1.png";
import Card from "./Card";

const ImgContainer = styled.div`
  grid-area: rightside;
  background-color: black;
  padding: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* background-color: aquamarine; */
`;
const Image = styled.img`
  object-fit: cover;
  max-width: 800px;
  max-height: 560px;
  border-radius: 5px;
  height: 80%;
  width: 100%;
  /* min-width: 350px; */
  /* max-width: 550px; */
  @media (min-width: 700px) {
    /* min-width: 500px; */
  }
`;

const Rightside = () => {
  return (
    <ImgContainer>
      <Image src={ImgUrl} />
      <Card />
    </ImgContainer>
  );
};

export default Rightside;
