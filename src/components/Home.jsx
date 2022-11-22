import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'
import img from "../assets/emojihand.webp"
import backgroundImage from "../assets/backgroundHome1.jpg"

function Home() {
  return (
    <ContainerHome> 
      <Nav/>
      <div className="container-div">
      <h1 className="container-header">Hi there <img src={img} alt="" /> </h1>
      <h1>My name is Muhammet Enez</h1>
      <p>I am a Frontend Developer</p>
      </div>
    </ContainerHome>
  )
}

const ContainerHome = styled.div`
  background: url(${backgroundImage});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: top;
  clip-path: polygon(0 0, 100% 0, 100% 74%, 50% 100%, 50% 100%, 0 74%);
  height: 90vh;
  filter: grayscale(70%);
  width: 100%;
  .container-div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 16.6%;
    align-items: center;
    .container-header{
    color: #0ee2b4;
    font-weight: 800;
    letter-spacing: 1.2px;
    img{
      width: 30px;
    }
  }
  h1{
    color: #fff;
  }
  p{
    font-weight: 300;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #fff;
  }
  }
  @media screen and (max-width:976px){
  background-size: 107%;
  clip-path: polygon(0 0, 100% 0, 100% 74%, 50% 100%, 50% 100%, 0 74%);
  }
  @media screen and (max-width:874px){
  background-size: 120%;
  clip-path: polygon(0 0, 100% 0, 100% 80%, 50% 100%, 50% 100%, 0 80%);
  }
  @media screen and (max-width:779px){
  background-size: 140%;
  clip-path: polygon(0 0, 100% 0, 100% 84%, 50% 100%, 50% 100%, 0 84%);
  }
`

export default Home