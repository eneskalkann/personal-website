import React from 'react'
import styled from 'styled-components'
import { Information } from '../data'

function About() {
  return (
    <ContainerAbout name="About">
      {
        Information && Information.map(About => {
          return(
            <div key={About.id}>
              <img src={About.imageURL} alt="eneskalkan" />
              <h1>{About.title}</h1>
              <h4>{About.position}</h4>
              <p>{About.about}</p>
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
    max-width: 650px;
    color: #878787;
  }
`

export default About