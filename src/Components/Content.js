import React from "react";
import "./content.scss";
import styled from "styled-components";
import { FaRegEye } from "react-icons/fa";
import JoshuaPic from "../Assets/JoshuaMask.jpg";

const ActionButton = styled.button`
  margin: auto;
  margin-top: 15px;
  padding: 8px 14px;

  background: rgba(155, 155, 155, 0.2);
  color: #fff;
  cursor: pointer;
  border: 1px solid #fff;
  outline: 0;
  font-weight: 300;
  align-content: center;
  :hover {
    opacity: 0.8;
  }
  :active {
    background: ${(props) => `#151D24`};
  }
`;

const Actions = styled.div`
  color: #333;
  display: flex;
  align-items: center;
  margin-left: auto;
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
      font-size: 0.5rem;
    }
  }
`;

const Content = () => {
  const data = (
    <div class="box-3 flexbox-container-3">
      <img className="bio" src={JoshuaPic} />

      <div className="bio-text">
        I have lived in Colorado all of my life-- I was born in the city of
        Aurora, raised in the suburb of Westminster, and currently living in the
        city of Lakewood. I've been performing and writing music since I was 12
        years old. I play piano, guitar, and produce hip-hop beats using
        synthesizers and drum machines. I also love to skateboard, snowboard,
        and lift weights. I live a very active lifestyle and am super passionate
        about organic and healthy foods.
      </div>
      <br></br>
      <div className="bio-text-2">
        Before the pandemic I was touring North America under the name "Laika
        Beats". Unsure about my future career in live music I've focused my
        attention to a field I've always been interested in: software and
        coding. I've been teaching myself Python and have joined the DU bootcamp
        to learn as much as I can. In the future I hope to use my skills to
        design software instruments and effects for music producers. I also am
        really interested in front-end development.
        <Actions>
          <ActionButton
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://laika-beats.github.io/Homework6/";
            }}
          >
            {" "}
            <FaRegEye /> Resume
          </ActionButton>
        </Actions>
      </div>
    </div>
  );
  return <main className="content">{data}</main>;
};

export default Content;
