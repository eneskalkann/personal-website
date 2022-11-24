import React from "react";
import styled from "styled-components";
import background from "../assets/background.png";
import backgroundImageTablet from "../assets/background-tablet.png"
import { Link } from "react-router-dom";
import { dataNotFound } from "../data";

function NotFound() {
  return (
    <ContainerNotFound>
      {dataNotFound &&
        dataNotFound.map((data) => {
          return (
            <div key={data.id}>
              <h1>{data.title}</h1>
              <p>{data.message}</p>
              <Link to={"/"} className='button'>{data.buttonTitle}</Link>
            </div>
          );
        })}
    </ContainerNotFound>
  );
}

const ContainerNotFound = styled.div`
  background: url(${background});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: top;
  clip-path: polygon(0 0, 100% 0, 100% 74%, 50% 100%, 50% 100%, 0 74%);
  height: 90vh;
  width: 100%;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  h1{
    color: #98ecc7;
    font-size: 172px;
  }
  p{
    margin-top: -100px;
    color: #fff;
    font-weight: 700;
    font-size: 42px;
  }
  .button{
    font-weight: 700;
    text-decoration: none;
    color: #98ecc7;
    background-color: #292C36;
    padding: 15px 20px;
    border-radius: 13px;
  }
  @media screen and (max-width:1062px){
    background-size: 190%;
    clip-path: polygon(0 0, 100% 0, 100% 84%, 50% 100%, 50% 100%, 0 84%);
  }
  @media screen and (max-width:1001px){
    clip-path: polygon(0 0, 100% 0, 100% 94%, 50% 100%, 50% 100%, 0 94%);
    background-size: 210%;
  }
  @media screen and (max-width:870px){
    background-size: 250%;
  }
  @media screen and (max-width:511px){
    background-position: top;
    background: url(${backgroundImageTablet});
    background-size: 100%;
    .container-header{
      margin-top: 37.7%;
    }
  }
`;

export default NotFound;
