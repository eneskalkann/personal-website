import React, { useEffect } from 'react'
import styled from 'styled-components'
import Footer from './Footer';
import ScrollToTop from '../hook/ScrollToTop'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { dataContact } from '../data'
import { FiExternalLink } from 'react-icons/fi';
import {HiOutlineClipboardCopy} from 'react-icons/hi'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Contact() {
  
  useEffect(() => {
    AOS.init({duration:2000})
  },[])

  return (
    <ContactContainer id='Contact' data-aos="fade-up">
      <span>•  Let's Talk.  •</span>
      {
        dataContact && dataContact.map(data => {
          return(
            <div key={data.id}>
              <p className='desc'>{data.desc}</p>
              <CopyToClipboard text="eneskalkan36e@gmail.com">
                <span title='Click and Copy' className='map-span'>eneskalkan36e@gmail.com
                <HiOutlineClipboardCopy/>
                </span>
              </CopyToClipboard>
              <div className="contact-me">
              <a href={data.url} target="_blank" rel="noreferrer">
              <p>{data.buttonTitle}</p><FiExternalLink /></a>
              </div>
            </div>
          )
        })
      }
      <span id='span-follow-me'>Don't forget to follow me.</span>
      <Footer/>
      <ScrollToTop/>
    </ContactContainer>
  )
}

const ContactContainer = styled.div`
display: flex;
flex-direction: column;
position: relative;
align-items: center;
span{
    color: #98ecc7;
    margin: 90px 0 55px 0;
    font-size: 22px;
}   
#span-follow-me{
  color:#fff;
  font-size:14px;
  margin-bottom:-17px;
}
.map-span{
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 6px;
    color: #fff;
    margin-bottom: 20px;
    justify-content: center;
}
.desc{
  margin: 10px 0 -40px 0;
  color: #939598;
  text-align: center;
  font-weight: 400;
  font-size: 20px;
  max-width: 500px;
}
.contact-me{
  display: flex;
  flex-direction: column;
  align-items: center;
  p{
    font-size: 17px;
    color: white;
    font-weight: 700;
  }
  a{
      display: flex;
      white-space: nowrap;
      text-decoration: none;
      color: white;
      align-items: center;
      gap: 9px;
      width: 300px;
      border: 2px solid #98ecc7;
      justify-content: center;
      border-radius: 13px;
      font-weight: 700;
      :hover{
        background-color: #98ecc7;
        transition: .5s;
      }
    }
}
@media screen and (max-width:520px) {
  .desc{
    max-width: 400px;
  }
}
@media screen and (max-width:418px) {
  .desc{
    max-width: 300px;
  }
}
`

export default Contact