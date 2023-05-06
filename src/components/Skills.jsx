import React, { useEffect } from "react";
import styled from "styled-components";
import { dataSkills } from "../data";
import AOS from "aos";
import "aos/dist/aos.css";

function Skills() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <ContainerSkills name="Skills" data-aos="fade-up">
      <span>• Skills •</span>
      <Data>
        {dataSkills &&
          dataSkills.map((data) => {
            return (
              <div className="div-border" key={data.id}>
                <h4>{data.language}</h4>
                <img key={data.id} src={data.image} alt="" />
              </div>
            );
          })}
      </Data>
    </ContainerSkills>
  );
}

const ContainerSkills = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    color: #98ecc7;
    margin: 70px 0 35px 0;
    font-size: 22px;
  }
`;

const Data = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.3rem;
  justify-content: center;
  max-width: 400px;
  margin: 0;
  .div-border {
    border: 2px solid #98ecc7;
    width: 220px;
    height: 70px;
    border-radius: 13px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: start;
    cursor: pointer;
    white-space: nowrap;
    font-weight: 700;
    color: #fff;
    transition: 0.5s;
    :hover {
      background-color: #98ecc7;
      color: #343845;
    }
  }
  img {
    margin: 0 20px 0 20px;
    max-width: 40px;
  }
  @media screen and (max-width: 732px) {
    grid-gap: 0.8rem;
    .div-border {
      width: 180px;
    }
  }
  @media screen and (max-width: 607px) {
    grid-gap: 0.6rem;
    .div-border {
      width: 160px;
    }
    img {
      margin: 0 10px 0 10px;
      width: 40px;
    }
  }
  @media screen and (max-width: 540px) {
    .div-border {
      width: 140px;
      height: 60px;
    }
    img {
      margin: 0 10px 0 10px;
      width: 30px;
    }
    h4 {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 472px) {
    grid-template-columns: repeat(1, 1fr);
    .div-border {
      width: 220px;
      height: 75px;
    }
    img {
      margin: 0 20px 0 20px;
      width: 40px;
    }
    h4 {
      font-size: 15px;
    }
  }
`;

export default Skills;
