import React from "react";
import Image from "next/image";
import AboutIcon from "../../images/about.png";
import styled from "styled-components";

const MyDiv = styled.div`
  width: 686px;
  height: 234px;
`;

const About = () => {
  return (
    <>
      <div className="">
        <div className="text-center font-lily-script-one bg-gradient-to-b from-[#FB65FE] from-100% to-[#9010FF] to-100% text-transparent bg-clip-text p-5 text-4xl">
          About Us
        </div>
        <div className="flex flex-col lg:flex-row justify-center pl-20 pr-20">
          <div className="lg:mt-[-45px] flex justify-center">
            <Image src={AboutIcon} alt="about-icon"></Image>
          </div>
          <MyDiv className="font-Inter text-xl text-[#000000] font-normal leading-10 lg:pt-20 pt-5">
            The Sal-dApp provides an efficient platform for organizational
            administrators to effectively oversee and manage their employees'
            salaries by adding them as users and securely storing their
            information on IPFS/Filecoin network. The platform enables the
            administrator to process payments conveniently and seamlessly on
            both Matic and Ethereum blockchain networks.
          </MyDiv>
        </div>
      </div>
    </>
  );
};

export default About;
