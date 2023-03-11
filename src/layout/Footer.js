import styled from "styled-components";
import React, { useEffect, useState } from "react";
import responsive from "../functions/Responsive";
import { Config } from "../config/Config";

import Logo from "../components/Logo";

const FooterSC = styled.header`
  padding: 3rem;
  align-items: center;
  box-shadow: 1px 1px 6px rgb(0, 0, 0, 0.2);
  background-color: #131313;
  color: white;
  display: block;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10rem;
`;
const LogoContent = styled.div`
  display: flex;
  justify-content: center;
  img {
    max-width: 10rem;
  }
`;
const CardFooter = styled.div`
  display: block;

  a {
    width: 100%;
    text-decoration: none;
    color: white;
    opacity: 60%;
    -webkit-transition: 0.3s;

    &:hover {
      opacity: 30%;
    }
  }
  svg {
    margin-inline: 0.2rem;
    color: white;
    width: 1.3rem;
    height: 1.3rem;
    -webkit-transition: 0.3s;
    &:hover {
      opacity: 30%;
    }
  }
`;

export default function Footer(props = { mobile: String }) {
  const [responFooter, setResponFooter] = useState("");
  useEffect(() => {
    responsive({ min: 800, setState: setResponFooter });
  }, []);
  return (
    <FooterSC
      style={{
        display: responFooter,
        paddingBottom: props.mobile === "block" ? "8rem" : "3rem",
      }}
    >
      <LogoContent>
        <Logo />
      </LogoContent>
      <CardFooter>
        <h3>Links rapidos</h3>
        <a href="#actuator">Área de atuação</a>
        <br />
        <a href="#aboutme">Sobre mim</a>
        <br />
        <a href="#local">Local</a>
      </CardFooter>
      <CardFooter>
        <h3>Sociais</h3>
        {Config.socials.map((scl, i) => (
          <a href={scl.link}>{scl.icon}</a>
        ))}
      </CardFooter>
    </FooterSC>
  );
}
