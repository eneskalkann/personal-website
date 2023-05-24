import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "./Footer";
import ScrollToTop from "../hook/ScrollToTop";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { dataContact } from "../data";
import { FiExternalLink } from "react-icons/fi";
import { HiOutlineClipboardCopy } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  const [copy, setCopy] = useState(false);

  const handleCopy = () => {
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 1500);
  };
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <ContactContainer id="Contact" data-aos="fade-up">
      <span className="texts">• Let's Talk. •</span>
      {dataContact &&
        dataContact.map((data) => {
          return (
            <div key={data.id}>
              <p className="desc">{data.desc}</p>
              <CopyToClipboard
                text="eneskalkan36e@gmail.com"
                onCopy={handleCopy}
              >
                <div title="Click and Copy" className="copy-clipboard texts">
                  <div className="copy-clipboard-text">
                    <span>eneskalkan36e@gmail.com</span>
                    <HiOutlineClipboardCopy />
                  </div>
                  <span className="copy-clipboard-copied">
                    {copy && <p>Copied</p>}
                  </span>
                </div>
              </CopyToClipboard>
              <div className="contact-me">
                <a href={data.url} target="_blank" rel="noreferrer">
                  <p>{data.buttonTitle}</p>
                  <FiExternalLink />
                </a>
              </div>
            </div>
          );
        })}
      <span className="texts" id="span-follow-me">
        Don't forget to follow me.
      </span>
      <Footer />
      <ScrollToTop />
    </ContactContainer>
  );
}

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  .texts {
    color: #98ecc7;
    margin: 90px 0 55px 0;
    font-size: 22px;
  }
  #span-follow-me {
    color: #fff;
    font-size: 14px;
    margin-bottom: -17px;
  }
  .copy-clipboard {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    margin-bottom: 20px;
    justify-content: center;
    &-text {
      display: flex;
      align-items: center;
      gap: 6px;
    }
    &-copied {
      font-size: 12px;
    }
  }
  .desc {
    margin: 10px 0 -40px 0;
    color: #939598;
    text-align: center;
    font-weight: 400;
    font-size: 20px;
    max-width: 500px;
  }
  .contact-me {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      font-size: 17px;
      font-weight: 700;
    }
    a {
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
      transition: 0.5s;
      :hover {
        background-color: #98ecc7;
        color: #343845 !important;
      }
    }
  }
  @media screen and (max-width: 520px) {
    .desc {
      max-width: 400px;
    }
    iframe {
      width: 300px;
    }
  }
  @media screen and (max-width: 418px) {
    .desc {
      max-width: 300px;
    }
  }
`;

export default Contact;
