import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Content from "../components/Content";
import Footer from "../components/Footer";

const Container = styled.div`
  height: 100%;
`;

const InteriorConsultant = () => {
  return (
    <Container>
      <Navbar></Navbar>
      <Content></Content>
      <Footer />
    </Container>
  );
};

export default InteriorConsultant;
