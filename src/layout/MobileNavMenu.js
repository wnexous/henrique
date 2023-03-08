import styled from "styled-components";

import { MdOutlineMedicalServices, MdOutlinePerson } from "react-icons/md";
import { GoLocation } from "react-icons/go";

const NavMobile = styled.nav`
  z-index: 99;
  position: fixed;
  width: 100%;
  height: 3rem;
  background-color: white;
  box-shadow: 0px 0px 10px rgb(0, 0, 0, 0.3);
  bottom: 0;
  display: flex;
  justify-content: space-around;
  list-style: none;
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
      height: 1.3rem;
      width: 1.3rem;
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
        <a href="/#actuator">
          <MdOutlineMedicalServices />
          <span>Atuação</span>
        </a>
      </li>
      <li>
        <a href="/#aboutme">
          <MdOutlinePerson />
          <span>Sobre mim</span>
        </a>
      </li>
      <li>
        <a href="/#local">
          <GoLocation />
          <span>Local</span>
        </a>
      </li>
    </NavMobile>
  );
}
