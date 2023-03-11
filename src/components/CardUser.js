import { useEffect, useState } from "react";
import styled from "styled-components";
import responsive from "../functions/Responsive";
const Card = styled.div`
  box-shadow: 1px 1px 6px rgb(0, 0, 0, 0.2);
  align-items: center;
  margin: auto;
  background-color: white;
`;

const Content = styled.div`
  padding: 2rem;
  width: 20rem;
  height: 10rem;
  h3,
  p {
    width: 100%;
    text-align: center;
  }
`;
const Socials = styled.div`
  gap: 5px;
  display: flex;
  justify-content: center;

  span {
    -webkit-transition: 0.3s;
    &:hover {
      opacity: 50%;
    }
    svg {
      margin-inline: 0.2rem;
      width: 1.3rem;
      height: 1.3rem;
    }
  }
`;
const ImgCard = styled.div`
  padding: 1rem;
  width: 22rem;
  height: 20rem;
  background-size: cover;
  background-position: 0rem -4rem;
`;

export default function CardUser(props = { data: Object }) {
  const [resp, setResp] = useState("");
  useEffect(() => {
    responsive({ min: 800, setState: setResp });
  }, []);
  const { socials, name, description, cardimgid } = props.data;
  return (
    <Card style={{ display: resp }}>
      <Content>
        <h3>{name}</h3>
        <p>{description}</p>

        <Socials>
          {socials.map((scl, i) => (
            <span
              key={i}
              onClick={(e) => {
                window.location.href = scl.link;
              }}
            >
              {scl.icon}
            </span>
          ))}
        </Socials>
      </Content>
      <ImgCard
        style={{ backgroundImage: `url('/img/gallery/${cardimgid}')` }}
      ></ImgCard>
    </Card>
  );
}
