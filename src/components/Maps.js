import styled from "styled-components";
import { GoLocation } from "react-icons/go";
import Title from "./Title";

const Card = styled.div`
  display: block;
  align-items: center;

  iframe {
    border: 0;
    height: 30rem;
    width: 90vw;
    max-width: 70rem;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
  }
  div {
    display: flex;
    align-items: center;
    margin-block: 1rem;
    color: rgb(0, 0, 0, 0.8);

    img {
      height: 3rem;
      width: 3rem;
      margin-inline: 1rem;
      cursor: pointer;
    }
    svg {
      margin-inline: 1rem;
      height: 1.5rem;
      color: white;
      width: 1.5rem;
      padding: 0.7rem;
      background-color: var(--green-color);
      border-radius: 10rem;
    }
  }
`;

export default function Maps(props = { data: Array }) {
  const { name, address, maps } = props.data;

  return (
    <div>
      <Title>Local</Title>

      <Card>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.854204592759!2d-49.287630098950494!3d-25.44313738956404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce3816a3d1e01%3A0x7205cbf530c7daed!2zQ2zDrW5pY2EgRmVtaSBTYcO6ZGU!5e0!3m2!1spt-BR!2sbr!4v1677790358518!5m2!1spt-BR!2sbr"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>

        <div>
          <GoLocation /> {address}
        </div>
        <div
          onClick={(e) => {
            window.location.href = maps;
          }}
        >
          <img alt="maps-btn" src="/icon/maps.png" /> Clique para obter no maps.
        </div>
      </Card>
    </div>
  );
}
