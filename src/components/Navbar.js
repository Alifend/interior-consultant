import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: black;
  height: 75px;
`;

const List = styled.ul`
  width: 40%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  transition: 0.5s all ease;
  text-decoration: none;
  @media (max-width: 900px) {
    z-index: 1;
    top: 75px;
    position: absolute;
    flex-direction: column;
    justify-content: space-evenly;
    left: -100%;
    left: ${(props) => (props.click ? "0" : "-100%")};
    width: 100vw;
    background-color: black;
    height: calc(100vh - 75px);
  }
`;

const Item = styled.li`
  text-decoration: none;
  list-style: none;
  cursor: pointer;
`;

const Hamburger = styled(FaBars)`
  display: none;
  color: white;
  cursor: pointer;
  margin-right: 20px;
  font-size: 30px;
  @media (max-width: 900px) {
    display: block;
  }
`;

const CloseIcon = styled(FaTimes)`
  color: white;
  cursor: pointer;
  margin-right: 20px;
  font-size: 30px;
`;

const Navbar = () => {
  const [click, setClick] = useState(false);

  useEffect(() => {}, []);

  return (
    <Nav>
      <List click={click}>
        <Item>Home</Item>
        <Item>Collection</Item>
        <Item>About</Item>
        <Item>Contact</Item>
      </List>

      {click ? (
        <CloseIcon onClick={() => setClick(false)} />
      ) : (
        <Hamburger onClick={() => setClick(true)} />
      )}
    </Nav>
  );
};

export default Navbar;
