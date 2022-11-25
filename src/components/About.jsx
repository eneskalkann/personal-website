import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Information } from '../data'

function About() {
  return (
    <ContainerAbout name="About">
      {
        Information && Information.map(About => {
          return(
            <div key={About.id}>
              <img src={About.imageURL} alt="enezkalkan" />
              <div>
              <h1>{About.title}</h1>
              <h4>{About.position}</h4>
              <p>{About.about}</p>
              <p>{About.about2}</p>
              </div>
            </div>
          )
        })
      }
    </ContainerAbout>
  )
}

const ContainerAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: -90px;
  img{
    position: relative;
    width: 160px;
    border-radius: 50%;
    border: 2px solid #98ecc7;
    :hover{
      filter: grayscale(60%);
      transition: .5s;
    }
  }
  h1{
    font-weight: 700;
    color: #fff;
  }
  h4{
    font-weight: 600;
    letter-spacing: 1.2px;
    color: #fff;
  }
  p{
    max-width: 700px;
    letter-spacing: .3px;
    color: #878787;
    font-weight: 400;
    font-size: 18px;
  }
  @media screen and (max-width:763px) {
  p{
    max-width: 600px;
  }
  }
  @media screen and (max-width:619px) {
  p{
    max-width: 500px;
  }
  }
  @media screen and (max-width:516px) {
  p{
    max-width: 400px;
  }
  }
  @media screen and (max-width:446px) {
  p{
    text-align: center;
    max-width: 350px;
  }
  }
  @media screen and (max-width:414px) {
  margin-top: -83px;
  }
  @media screen and (max-width:391px) {
  margin-top: -80px;
  }
`

export default About