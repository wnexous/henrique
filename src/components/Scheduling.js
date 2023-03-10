import styled from "styled-components";
import TitleLine from "./TitleLine";

const Card = styled.div`
  background-color: var(--green-color);
  min-height: 20rem;
  width: 100%;
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
  filter: blur(3px) grayscale(20%) brightness(50%);
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
  padding-bottom: 7rem;
  padding-top: 10rem;
  top: 0;
  bottom: 0;
  width: 100%;
  z-index: 6;
  position: relative;
  display: block;
`;
const SubContent = styled.div`
  padding-top: 5rem;
  margin-inline: auto;
  z-index: 6;
  top: 0;
  bottom: 0;
  max-width: 50rem;
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
    padding-block: 1rem;
    margin: auto;
    &:nth-child(1) {
    }
    &:nth-child(2) {
      height: 3rem;
      display: flex;
      align-items: center;
      button {
        align-items: center;
        width: 100%;
        height: 100%;
        display: flex;
        font-size: 1.1rem;

        img {
          max-width: 7rem;
          max-height: 2rem;
        }
      }
    }
  }
`;

const PlanosAtendidos = styled.div`
  position: absolute;
  width: 100%;
  justify-content: center;
  align-content: center;
  top: 0;
  background-color: var(--green-color-light);
  color: rgb(0, 0, 0, 0.8);
  margin: auto;
  right: 0;
  left: 0;
  gap: 1rem;

  div {
    max-width: 40rem;
    min-width: 20rem;
    padding-block: 0.3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: auto;
    div {
      margin: auto;
      text-align: center;

      max-width: 100%;
      display: flex;
      align-content: center;
      justify-content: center;
      font-size: large;
      font-weight: 600;
    }
  }
`;

export default function Scheduling({ data }) {
  const { calls } = data;
  return (
    <Card>
      <Backgrond />
      <Filter />

      <Content>
        <PlanosAtendidos>
          <div>
            <div>Planos de sa??de atendidos</div>
            <div>
              <img src="/icon/unimed.png" alt="plano-saude" />
            </div>
          </div>
        </PlanosAtendidos>
        <TitleLine color="white">Agende sua consulta</TitleLine>

        <SubContent>
          <div>
            Estamos sempre buscando facilitar o acesso aos nossos servi??os e
            agora ?? poss??vel agendar sua consulta m??dica via WhatsApp. Basta
            clicar no bot??o ao lado e enviar uma mensagem para nossa equipe para
            que possamos agendar um hor??rio que seja conveniente para voc??.
            <br />
            <br />
            Com essa facilidade, voc?? pode agendar sua consulta de forma r??pida
            e pr??tica, sem precisar fazer liga????es ou sair de casa.
            <br />
            <br />
            N??o perca mais tempo, clique no bot??o ao lado e agende j?? sua
            consulta. Estamos prontos para atend??-lo da melhor maneira poss??vel.
          </div>
          <div style={{ display: "block" }}>
            {Object.keys(calls).map((cl, i) => (
              <button
                key={i}
                style={{ marginBlock: "5px" }}
                onClick={(e) => {
                  window.location.href = calls[cl].link;
                }}
              >
                <img src={calls[cl].iconLink} alt="icon-atendimento" />{" "}
                {calls[cl].text}
              </button>
            ))}
          </div>
        </SubContent>
      </Content>
    </Card>
  );
}
