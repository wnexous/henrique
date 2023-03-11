import styled from "styled-components";
import Title from "./Title";

const OutCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
  margin-inline: 1rem;
`;
const BiographyCard = styled.div`
  max-width: 50vw;
  min-width: 20rem;
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
    border-radius: 1rem;
    padding-inline: 1rem;
    -webkit-transition: 0.3s;
    cursor: pointer;
    color: white;
    p {
      font-weight: 600;
    }

    &:hover {
      background-color: black;
      color: white;
    }
  }
`;

export default function Aboutme(props = { data: Object }) {
  const { name, profileimgid, socials, biography } = props.data;
  return (
    <div>
      <Title>Sobre mim</Title>
      <OutCard>
        <ProfileCard>
          <img src={"img/gallery/" + profileimgid} alt="profile-card" />
          {socials.map((scl, i) => (
            <div
              key={"scl_map_" + i}
              onClick={(e) => {
                window.location.href = scl.link;
              }}
              style={{ backgroundImage: scl.bgimg }}
            >
              {scl.icon}
              <p>{scl.name}</p>
            </div>
          ))}
        </ProfileCard>

        <BiographyCard>
          <h3>{name}</h3>
          {biography.map((bio, i) => (
            <p key={"bio_" + i}>{bio}</p>
          ))}
        </BiographyCard>
      </OutCard>
    </div>
  );
}
