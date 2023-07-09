import React from "react";
import Image from "next/image";
import heroIcon from "../../images/hero-icon.png";
import styled from "styled-components";

const MyDiv = styled.div`
  width: 724px;
  
  @media (max-width: 768px) {
    width: 100%;
    font-size: 3rem;
  }
`;

function Hero() {
  return (
    <div className="flex flex-col md:flex-row justify-between p-5 m-10">
      <div className="pt-20 pl-20">
        <div className="font-Poppins pt-8 pb-5 text-[#9010FF] text-3xl font-semibold">A decentralized application</div>
        <MyDiv className="font-Poppins text-[#000000] font-extrabold text-6xl whitespace-normal leading-[1.2]">
          To effectively<br />
          oversee and manage<br />
          their employees
        </MyDiv>
        <div className="pt-5">
          <button className="text-center font-Poppins font-semibold text-[#FFFFFF] bg-[#9010FF] px-10 py-4 rounded">Learn more!</button>
        </div>
      </div>
      <div className="flex justify-center md:justify-end">
        <Image src={heroIcon} height={556} width={542} alt="" />
      </div>
    </div>
  );
}

export default Hero;
