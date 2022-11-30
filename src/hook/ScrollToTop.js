import React from 'react'
import styled from 'styled-components'
import {IoIosArrowDropup} from 'react-icons/io'

function ScrollToTop() {
    const scrollTop = () => {
        window.scrollTo({
            top:0,
            behavior:'smooth',
            duration :'2000'
        });
    };
  return (
    <ContainerScroll>
        <button onClick={scrollTop}>Back to top <IoIosArrowDropup className='icon' /></button>
    </ContainerScroll>
  )
}

const ContainerScroll = styled.div`
    display: none;
    @media screen and (max-width:700px){
        display: flex;
        a{
            color: #fff;
            display: flex;
            align-items: center;
            font-size: 21px;
            padding-bottom: 5px;
            border-bottom: 2px solid #98ecc7;
            margin-bottom: 80px;
            .icon{
                color: #98ecc7;
                margin-left: 8px;
            }
        }
    }
`

export default ScrollToTop