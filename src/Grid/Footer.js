import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  grid-area: footer;
  background-color: black;
  color: white;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 90%;
`;
const Footer = () => {
  return (
    <FooterContainer style={{ background: "black" }}>
      <Wrapper>
        <p>From DevChallenges.io</p>
      </Wrapper>
    </FooterContainer>
  );
};

export default Footer;
