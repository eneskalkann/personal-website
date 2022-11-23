import React from 'react'
import styled from 'styled-components'
import { dataSocialMedia } from '../data'

function Footer() {
  return (
    <ContainerFooter>
      {dataSocialMedia && dataSocialMedia.map(data=> {
        return(
          <div key={data.id}>
            <a href={data.url} target="_blank">
              <img src={data.icon}/>
            </a>
          </div>
        )
      })}
    </ContainerFooter>
  )
}

const ContainerFooter = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  gap: 10px;
  margin-bottom: 50px;
  span{
    color: #fff;
    font-size: 12px;
  }
  img{
    width: 35px;
  }
`

export default Footer