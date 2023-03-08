import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";
import { Config } from "../config/Config";

const Whatsapp = styled.div`
  cursor: pointer;
  height: 4rem;
  width: 4rem;
  position: fixed;
  right: 7vw;
  bottom: 7rem;
  background-color: #00e576;
  border-radius: 10rem;
  display: flex;
  align-items: center;
  z-index: 100;
  box-shadow: 1px 1px 10px rgb(0, 0, 0, 0.2);
  -webkit-transition: 0.3s;

  svg {
    height: 2rem;
    width: 2rem;
    color: white;
    margin: auto;
  }
  &:hover {
    opacity: 50%;
  }
`;

export default function WhatsappBtn() {
  return (
    <Whatsapp
      onClick={(e) => {
        window.location.href = Config.calls.whatsapp.link;
      }}
    >
      <FaWhatsapp />
    </Whatsapp>
  );
}
