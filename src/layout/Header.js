import styled from "styled-components";
import React from "react";

const HeaderSC = styled.header`
  display: grid;
  grid-template-columns: 13rem auto 13rem;
  min-height: 3rem;
  align-items: center;
  box-shadow: 1px 1px 6px rgb(0, 0, 0, 0.2);
`;

const Logo = styled.div`
  text-align: center;
`;
const Nav = styled.nav`
  display: flex;
  justify-content: center;
  text-decoration: none;
  list-style-type: none;
  text-align: center;
  gap: 4rem;
  li {
    a {
      text-decoration: none;
      color: black;
      opacity: 80%;
    }
  }
`;
const Btn = styled.div`
  display: flex;
  justify-content: center;

  button {
    margin-left: auto;
    min-width: 10rem;
  }
`;

export default function Header(props) {
  return (
    <HeaderSC>
      <Logo>
        <h3>Henrique Stachon</h3>
      </Logo>
      <Nav
        style={{
          display: props.mobile === "block" ? "none" : "flex",
        }}
      >
        <li>
          <a href="#actuator">Área de atuação</a>
        </li>
        <li>
          <a href="#aboutme">Sobre mim</a>
        </li>
        <li>
          <a href="#local">Local</a>
        </li>
      </Nav>
      <Btn>
        <button>Agende sua cunsulta</button>
      </Btn>
    </HeaderSC>
  );
}
