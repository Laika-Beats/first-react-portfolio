import React from "react";
import styled from "styled-components";
import { FaRegEye, FaGithub } from "react-icons/fa";
import JoshuaPic from "../Assets/JoshuaMask.jpg";

const StyledContainer = styled.div`
  border: ${(props) => `1px solid #fff`};
  padding: 15px 12px 18px;
  background: ${(props) => `linear-gradient(45deg, #151D24, #ec533f35)`};
  max-width: 600px;
  max-height: 1050px;
  width: 100%;
  margin: auto;
`;

const Title = styled.h2`
  margin-left: 8px;
  color: #fff;
  font-weight: 300;
  font-size: 2rem;
  @media (max-width: 400px) {
  }
`;

const Code = styled.div`
  padding-left: 6px;
  color: #ccc;
  font-weight: 300;
  margin: 6px 0;
  font-size: 0.65rem;
  @media (max-width: 400px) {
  }
`;

const Description = styled.p`
  color: #fff;
  text-align: justify;
  font-weight: 300;
  margin-left: -45px;
  font-size: 0.9rem;
  @media (max-width: 400px) {
  }
`;

const Actions = styled.div`
  color: #333;
  display: flex;
  align-items: center;
  margin-left: 200px;
  margin-right: auto;
  svg {
    transform: translateY(2px);
    margin-right: 5px;
  }
  @media (max-width: 400px) {
    flex-direction: column;
    & button {
      width: 100%;
      margin-bottom: 4px;
      margin-right: 200px;
      font-size: 0.5rem;
    }
  }
`;

const ActionButton = styled.button`
  margin: -5px 5px;
  padding: 8px 14px;
  background: rgba(155, 155, 155, 0.2);
  color: #fff;
  cursor: pointer;
  border: 1px solid #fff;
  outline: 0;
  font-weight: 300;
  :hover {
    opacity: 0.8;
  }
  :active {
    background: ${(props) => `#151D24`};
  }
`;

const StyledRoot = styled.div`
  padding: 50px 12px;
`;

const StyledPhoto = styled.img`
  width: 100%;
  height: 60%;
  object-fit: cover;
  border: 1px solid #fff;
  margin-bottom: 20px;
`;

const CardAboutMe = (props) => (
  <StyledRoot>
    <StyledContainer>
      <StyledPhoto src={JoshuaPic} />
      <Title>About Me</Title>
      <Description>
        Before the pandemic I was touring North America as a Hip-Hop/Electronic
        musician under the name "Laika Beats". Unsure about my future career in
        live music I've focused my attention to another industry I've always
        been interested in: web and software development. I've been teaching
        myself JavaScript for a little over a year and have just completed a DU
        bootcamp on full-stack and MERN-stack development. The bootcamp was an
        amazing experience that really gave me direction on what I need to focus
        on in order to become a creative developer and also allowed me to
        experience building projects with a team. I have fallen in love with
        coding and I am striving and practicing to progress my skills every day.
        <br></br>
        <br></br>I have lived in Colorado all of my life-- I was born in the
        city of Aurora, raised in the suburb of Westminster, and currently
        living in the city of Lakewood. I play piano, guitar, and produce beats
        using synthesizers and drum machines. I also love to snowboard,
        skateboard, and lift weights. I live a very active lifestyle and am
        super passionate about organic and healthy foods.
      </Description>
      <Actions>
        <ActionButton
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "https://laika-beats.github.io/Homework6/";
          }}
        >
          {" "}
          <FaRegEye /> View Resume
        </ActionButton>
      </Actions>
    </StyledContainer>
  </StyledRoot>
);

export default CardAboutMe;
