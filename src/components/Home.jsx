import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'
import img from "../assets/emojihand.webp"
import backgroundImage from "../assets/background.png"
import backgroundImageTablet from "../assets/background-tablet.png"

function Home() {
  return (
    <ContainerHome> 
      <Nav/>
      <div className="container-div">
      <h1 className="container-header">Hi there <img src={img} alt="" /> </h1>
      <h1>My name is Muhammet Enez</h1>
      <p className='paragraph'>I am a Frontend Developer</p>
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
  width: 100%;
  .container-div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 16.6%;
    align-items: center;
    .container-header{
    color: #98ecc7;
    font-weight: 800;
    letter-spacing: 1.2px;
    img{
      width: 30px;
      padding: 4px;
    }
  }
  h1{
    color: #fff;
    white-space: nowrap;
  }
  p{
    font-weight: 400;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #98ecc7;
  }
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
  @media screen and (max-width:570px){
    margin-top: -90px;
    p{
        color: #fff;
      }
    .container-header{
      margin-top: 32.7%;
    }
  }
  @media screen and (max-width:511px){
    background-position: top;
    background: url(${backgroundImageTablet});
    background-size: 100%;
    .container-header{
      margin-top: 37.7%;
    }
  }
  @media screen and (max-width:434px){
  .container-div{
    .container-header{
      margin-top: 45.7%;
    }
    h1{
    font-size: 28px;
  }
  }
  }
  @media screen and (max-width:412px){
    .container-div{
      .container-header{
      margin-top: 58%;
      }
    }
  }
  @media screen and (max-width:390px){
    .container-div{
      .container-header{
      margin-top: 53%;
      }   
      h1{
      font-size: 26px;
      }
    }
  }
  @media screen and (max-width:390px){
    .container-div{
      .container-header{
      margin-top: 53%;
      }   
      h1{
      font-size: 23px;
      }
    }
  }
`

export default Home