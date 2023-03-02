import styled from "styled-components";
import Title from "./Title";

const IconCard = styled.div`
  display: flex;
  margin-block: 0.5rem;

  align-items: center;
  gap: 1rem;
  margin-inline: 2rem;
  width: 20rem;
  svg {
    background-color: var(--green-color);
    padding: 0.5rem;
    height: 2rem;
    width: 2rem;
    color: white;
    border-radius: 100rem;
  }
`;

export default function Actuator(props = { data: Array }) {
  const { actuator } = props.data;
  return (
    <div>
      <Title>Áreas de atuação</Title>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          maxWidth: "50rem",
        }}
      >
        {actuator.map((act, i) => (
          <IconCard key={i}>
            {act.icon}
            <p>{act.text}</p>
          </IconCard>
        ))}
      </div>
    </div>
  );
}
