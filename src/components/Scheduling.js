import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";
import Title from "./Title";

const Card = styled.div`
  background-color: var(--green-color);
  min-height: 20rem;
  width: 100%;
  box-shadow: 1px 1px 15px rgb(0, 0, 0, 0.3);
  position: relative;
`;

const Backgrond = styled.div`
  background-image: url("/background/card.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;

  filter: blur(5px) grayscale(20%) brightness(70%);
`;
const Filter = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  background-color: var(--green-color);
  opacity: 50%;
`;
const Content = styled.div`
  padding-block: 3rem;
  top: 0;
  bottom: 0;
  width: 100%;
  z-index: 6;
  position: relative;
  display: block;
`;
const SubContent = styled.div`
  margin-inline: auto;
  z-index: 6;
  top: 0;
  bottom: 0;
  padding: 2rem;
  max-width: 55rem;
  color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  div {
    display: flex;
    justify-content: center;
    align-content: center;
    width: 30%;
    max-width: 40rem;
    min-width: 20rem;
    padding: 1rem;
    margin: auto;
    &:nth-child(1) {
    }
    &:nth-child(2) {
      height: 3rem;
      display: flex;
      align-items: center;
      button {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

export default function Scheduling(props = { data: Array }) {

  return (
    <Card>
      <Backgrond />
      <Filter />

      <Content>
        <Title color="white">Agende sua consulta</Title>

        <SubContent>
          <div>
            Estamos sempre buscando facilitar o acesso aos nossos serviços e
            agora é possível agendar sua consulta médica via WhatsApp. Basta
            clicar no botão ao lado e enviar uma mensagem para nossa equipe para
            que possamos agendar um horário que seja conveniente para você.
            <br />
            <br />
            Com essa facilidade, você pode agendar sua consulta de forma rápida
            e prática, sem precisar fazer ligações ou sair de casa.
            <br />
            <br />
            Não perca mais tempo, clique no botão ao lado e agende já sua
            consulta. Estamos prontos para atendê-lo da melhor maneira possível.
          </div>
          <div>
            <button>
              <FaWhatsapp /> Agende sua consulta
            </button>
          </div>
        </SubContent>
      </Content>
    </Card>
  );
}
