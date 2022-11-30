import React, { useEffect } from 'react'
import { dataProjects } from '../data'
import styled from 'styled-components'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FiExternalLink } from 'react-icons/fi';


function Projects() {

  useEffect(() => {
    AOS.init({duration:2000})
  },[])

  return (
    <ContainerProjects name="Projects" data-aos="fade-up">
        <span>•  Projects  •</span>
        <Data>
        {
          dataProjects && dataProjects.map(data => {
            return(
              <div className='datas' key={data.id} data-aos="fade-up">
                <img src={data.image} alt="" />
                <h3>{data.title}</h3>
                <div className='buttons'>
                  <button><a href={data.urlDemo} target="_blank" rel="noreferrer">View Demo</a></button>
                  <button><a href={data.urlRepo} target="_blank" rel="noreferrer">View on GitHub</a></button>
                </div>
              </div>
            )
          })
        }
        </Data>
        <div id='view-more' data-aos="fade-up">
          <a href="https://github.com/eneskalkann" target="_blank" rel="noreferrer">View More<FiExternalLink/></a>
        </div>
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
#view-more{
  margin-top: 30px;
  a{
    display: flex;
    align-items: center;
    justify-content: right;
    text-decoration: none;
    color: #fff;
    border: 2px solid #98ecc7;
    padding: 12px 20px;
    border-radius:13px;
    gap: 7px;
    font-weight: 700;
    :hover{
        background-color: #98ecc7;
        transition: .5s;
    }
  }
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
    height: 330px;
    background: #343845;
    border-radius:10px;
    color: white;
    .buttons{
      justify-content: center;
      display: flex;
      gap: 10px;
    }
    button{
      padding: 12px 19px;
      width: 150px;
      background-color: #292C36;
      border: none;
      border-radius:13px;
      margin-bottom: 20px;
      white-space: nowrap;
      :hover{
        background: #98ecc7;
        transition: .4s;
      }
      a{
        text-decoration: none;
        color: #fff;
        font-weight: 700;
        letter-spacing: .4px;
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
  
  @media screen and (max-width:732px){
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 2rem;
  }
  @media screen and (max-width:362px){
    .datas{
    width: 320px;
    height: 330px;
    img{
    width: 320px;
    height: 210px;
   }
    }
  }
`


export default Projects