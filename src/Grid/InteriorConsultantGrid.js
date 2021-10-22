import React from "react";
import styled from "styled-components";
import Navbar from "../Grid/Navbar";
import Content from "../Grid/Content";
import Footer from "../Grid/Footer";
import Leftside from "./Leftside";
import Rightside from "./Rightside";

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-areas:
    "nav nav"
    "leftside rightside"
    "footer footer";
  grid-template-rows: 10% 74% 16%;
  grid-template-columns: 40% 60%;

  @media (max-width: 700px) {
    grid-template-areas:
      "nav"
      "leftside"
      "rightside"
      "footer";
    grid-template-rows: 10% 26% 53% 16%;
    grid-template-columns: 1fr;
  }
`;

const InteriorConsultant = () => {
  return (
    <Container>
      <Navbar></Navbar>
      <Leftside />
      <Rightside />
      <Footer />
    </Container>
  );
};

export default InteriorConsultant;
