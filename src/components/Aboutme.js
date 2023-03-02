import styled from "styled-components";
import Title from "./Title";

const OutCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
`;
const BiographyCard = styled.div`
  max-width: 50vw;
  min-width: 25rem;
  display: block;
`;
const ProfileCard = styled.div`
  display: block;

  img {
    margin-block: 1rem;
    width: 15rem;
    height: 20rem;
    object-fit: cover;
    border-radius: 1rem;
    box-shadow: 1px 1px 10px rgb(0, 0, 0, 0.5);
  }
  div {
    margin-block: 0.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    border: 1px solid black;
    border-radius: 1rem;
    padding-inline: 1rem;
    -webkit-transition: 0.3s;
    cursor: pointer;

    &:hover {
      background-color: black;
      color: white;
    }
  }
`;

export default function Aboutme(props = { data: Object }) {
  const { name, profileImgId, socials, biography } = props.data;
  return (
    <div>
      <Title>Sobre mim</Title>
      <OutCard>
        <ProfileCard>
          <img src={"img/gallery/" + profileImgId} alt="profile-card" />
          {socials.map((scl, i) => (
            <div
              onClick={(e) => {
                window.location.href = scl.link;
              }}
            >
              {scl.icon}
              <p>{scl.name}</p>
            </div>
          ))}
        </ProfileCard>

        <BiographyCard>
          <h3>{name}</h3>
          {biography.map((bio, i) => (
            <p key={i}>{bio}</p>
          ))}
        </BiographyCard>
      </OutCard>
    </div>
  );
}
