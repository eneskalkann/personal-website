import React, { useEffect } from 'react'
import styled from 'styled-components'
import { dataSkills } from '../data'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Skills() {
  
  useEffect(() => {
    AOS.init({duration:2000})
  },[])
  
  return (
    <ContainerSkills name="Skills" data-aos="fade-up">
      <span>•  Skills  •</span>
      <Data>
      {
        dataSkills && dataSkills.map(data => {
          return(
            <div className='div-border' key={data.id}>
              <h4>{data.language}</h4>
              <img key={data.id} src={data.image} alt="" />
            </div>
          )
        })
      }
      </Data>
    </ContainerSkills>
  )
}

const ContainerSkills = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span{
    color: #98ecc7;
    margin: 70px 0 35px 0;
    font-size: 22px;
  }
`

const Data = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  grid-gap: 1.3rem;
  justify-content: center;
  max-width: 400px;
  grid: 2;
  margin: 0;
  .div-border{
    border: 2px solid #98ecc7;
    width: 220px;
    height: 70px;
    border-radius: 13px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    :hover{
      background-color: #98ecc7;
      transition: .5s;
    }
  }
  h4{
    font-weight: 700;
    color: #fff;
  }
  img{
    margin-right: 20px;
    width:40px;
  }
  @media screen and (max-width:732px){
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width:481px) {
  .div-border{
    width: 200px;
    height: 60px;
  }
  }
  @media screen and (max-width:450px) {
  .div-border{
    width: 170px;
    height: 55px;
  }
  }
  @media screen and (max-width:380px) {
  .div-border{
    width: 160px;
    height: 55px;
  }
  }
  @media screen and (max-width:357px) {
    grid-template-columns: repeat(1, 1fr);
    .div-border{
    width: 220px;
    height: 75px;
    }
  }
`

export default Skills