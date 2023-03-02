import styled from "styled-components";

import { MdOutlineMedicalServices, MdOutlinePerson } from "react-icons/md";
import { GoLocation } from "react-icons/go";

const NavMobile = styled.nav`
  position: fixed;
  width: 100%;
  min-height: 2rem;
  background-color: white;
  box-shadow: 0px 0px 10px rgb(0, 0, 0, 0.3);
  bottom: 0;
  display: flex;
  justify-content: space-around;
  list-style: none;
  align-items: center;
  padding-block: 1rem;

  li {
    width: 8rem;
    text-align: center;
    display: block;
    align-items: center;
    a {
      text-decoration: none;
      color: rgb(0, 0, 0, 0.7);
    }
    svg {
      height: 1.5rem;
      width: 1.5rem;
      margin-inline: auto;
      display: flex;
    }
    span {
      margin: 0;
      text-align: center;
    }
  }
`;
export default function MobileNavMenu(props = { mobile: String }) {
  return (
    <NavMobile
      style={{
        visibility: props.mobile === "block" ? "visible" : "hidden",
      }}
    >
      <li>
        <a href="#actuator">
          <MdOutlineMedicalServices />
          <span>Áreas de atuação</span>
        </a>
      </li>
      <li>
        <a href="#aboutme">
          <MdOutlinePerson />
          <span>Sobre mim</span>
        </a>
      </li>
      <li>
        <a href="#local">
          <GoLocation />
          <span>Local</span>
        </a>
      </li>
    </NavMobile>
  );
}
