import React from "react";
import styled from "styled-components";
import { FaRegEye, FaGithub } from "react-icons/fa";
import WeatherPic from "../Assets/WeatherDashboardScreenshot.png";

const StyledContainer = styled.div`
    border: ${(props) => `1px solid #fff`};
    padding: 15px 12px 18px;
    background: ${(props) => `linear-gradient(45deg, #151D24, #ec533f23)`};
    max-width: 400px;
    max-height: 570px;
    width: 100%;
    margin: auto;
    @media (max-width: 600px) {
        flex-direction: column;
        max-height: 630px;
        
`;

const Title = styled.h2`
  margin-top: 10px;
  margin-left: 8px;
  color: #fff;
  font-weight: 300;
  font-size: 1rem;
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
  svg {
    transform: translateY(0px);
    margin-right: 5px;
  }
  @media (max-width: 400px) {
    flex-direction: column;
    svg {
      transform: translateY(-1px);
      margin-right: 5px;
    }
    & button {
      width: 100%;
      margin-bottom: 4px;
      font-size: 0.5rem;
    }
  }
`;

const ActionButton = styled.button`
  min-width: 150px;
  margin: 1px 5px;
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
`;

const Card = (props) => (
  <StyledRoot>
    <StyledContainer>
      <StyledPhoto src={WeatherPic} />
      <Title>Weather Dashboard</Title>
      <Code>Javascript | HTML | CSS | OpenWeather API</Code>
      <Description>
        Uses the OpenWeather API allowing the user to type in any city in the
        world and view the weather of today and the the five following days.
        Utilizes local storage to save cities the user searched for so they can
        pull the forecast back up with the click of a button.
      </Description>
      <Actions>
        <ActionButton
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "https://laika-beats.github.io/Homework6/";
          }}
        >
          {" "}
          <FaRegEye /> View Project
        </ActionButton>
        <ActionButton
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "https://github.com/Laika-Beats/Homework6";
          }}
        >
          {" "}
          <FaGithub /> GitHub
        </ActionButton>
      </Actions>
    </StyledContainer>
  </StyledRoot>
);

export default Card;
