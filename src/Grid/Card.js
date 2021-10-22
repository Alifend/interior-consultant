import React from "react";
import styled from "styled-components";
import PersonUrl from "../resources/photo2.png";
const Container = styled.div`
  position: absolute;
  height: 20%;
  width: 25%;
  /* bottom: 0;
  right: 15%; */
  bottom: 0;
  right: 30px;
  transform: translate(-40px, 15px);
  min-width: 300px;

  background-color: black;
  border-radius: 5px;
  padding: 20px;
  font-size: 15px;
  @media (max-width: 700px) {
    font-size: 12px;
    min-width: 250px;
    height: 18%;
    bottom: 0;
    right: 30%;
    transform: translate(30%, 0);
  }
`;

const User = styled.div`
  height: 50%;
  display: flex;
`;
const Text = styled.p`
  height: 50%;
  color: white;
  text-align: left;

  font-family: Lora;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 31px;
  width: 70%;
`;
const Image = styled.img`
  border-radius: 50%;
  height: 45px;
  width: 45px;
  @media (max-width: 700px) {
    height: 30px;
    width: 30px;
  }
`;
const UserInfo = styled.div`
  width: 75%;
  color: white;
`;
const Name = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 5px;
`;
const Job = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #828282;
`;
const Card = () => {
  return (
    <Container>
      <User>
        <div style={{ width: "25%" }}>
          {" "}
          <Image src={PersonUrl} />
        </div>
        <UserInfo>
          <Name>Aliza Webber </Name>
          <Job>Interior designer</Job>
        </UserInfo>
      </User>
      <Text>Designed in 2020 by Aliza Webber</Text>
    </Container>
  );
};

export default Card;
