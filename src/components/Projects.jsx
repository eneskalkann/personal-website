import React from 'react'
import { dataProjects } from '../data'
import styled from 'styled-components'

function Projects() {
  return (
    <ContainerProjects name="Projects">
        <span>•  Projects  •</span>
        <Data>
        {
          dataProjects && dataProjects.map(data => {
            return(
              <div className='datas' key={data.id}>
                <img src={data.image} alt="" />
                <h3>{data.title}</h3>
                <div className='buttons'>
                  <button><a href={data.urlDemo} target="_blank">View Demo</a></button>
                  <button><a href={data.urlRepo}>View on GitHub</a></button>
                </div>
              </div>
            )
          })
        }
        </Data>
    </ContainerProjects>
  )
}

const ContainerProjects = styled.div`
display: flex;
flex-direction: column;
position: relative;
align-items: center;
span{
    color: #98ecc7;
    margin: 90px 0 55px 0;
    font-size: 22px;
}
`

const Data = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  grid-gap: 1rem;
  text-align: center;
  .datas{
    width: 350px;
    height: 320px;
    border: 2px solid #98ecc7;
    border-radius:10px;
    color: white;
    .buttons{
      justify-content: center;
      display: flex;
      gap: 10px;
    }
    button{
      padding: 7px 13px;
      width: 120px;
      background-color: #98ecc7;
      border: none;
      border-radius:4px;
      a{
        text-decoration: none;
        color: #fff;
        font-weight: 700;
      }
    }
    img{
    width: 350px;
    height: 210px;
    border-top-left-radius:7px;
    border-top-right-radius:7px;
   }
   h3{
    margin-top: 13px;
   }
  }
`

export default Projects