import { useEffect, useState } from "react";
import styled from "styled-components";
import responsive from "../functions/Responsive";
const Card = styled.div`
  box-shadow: 1px 1px 6px rgb(0, 0, 0, 0.2);
  align-items: center;
  margin: auto;
`;

const Content = styled.div`
  padding: 2rem;
  width: 20rem;
  height: 10rem;
`;
const Socials = styled.div`
  span {
    -webkit-transition: 0.3s;
    &:hover {
      opacity: 50%;
    }
    svg {
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
  const { socials, name, description, cardImgId } = props.data;
  return (
    <Card style={{ display: resp }}>
      <Content>
        <h3>{name}</h3>
        <p>{description}</p>

        <Socials>
          {socials.map((scl, i) => (
            <span
              key={scl.name + i}
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
        style={{ backgroundImage: `url('/img/gallery/${cardImgId}')` }}
      ></ImgCard>
    </Card>
  );
}
