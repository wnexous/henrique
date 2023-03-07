import styled from "styled-components";

const UniqueTitle = styled.div`
  align-items: center;
  text-align: center;
  font-size: x-large;
  font-weight: 700;
  display: block;
  justify-content: center;
  position: relative;

  &::after {
    margin: auto;
    display: block;
    height: 8px;
    margin-block: 0.5rem;
    width: 10rem;
    background-color: white;
    content: "";
  }
`;

export default function TitleLine(props = { color: String }) {
  return (
    <UniqueTitle
      style={{
        color: props.color || "rgb(0,0,0,0.7)",
      }}
    >
      {props.children}
    </UniqueTitle>
  );
}
