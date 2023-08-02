import React from "react";
import styled from "styled-components";
import Image from "next/image";
import stuck from "../../images/stuck.png";
import Link from "next/link";

const MainDiv = styled.div`
  width: 1440px;
  height: 362px;
  margin: 0 auto;
  @media (max-width: 1450px) {
    width: auto;
  }
`;

const TextDiv = styled.div`
  width: 725px;
  height: 72px;
  @media (max-width: 1100px) {
    width: auto;
    height: auto;
  }
`;

const Button = styled.button`
  width: 390px;
  height: 86px;
  @media (max-width: 1100px) {
    width: auto;
  }
`;

function Stuck() {
  return (
    <>
      <div className="p-5 xl:pt-5 pt-20">
        <MainDiv className="rounded-lg border-2 border-[#000000] flex">
          <div className="w-1/3 flex">
            <Image src={stuck} className="" />
          </div>
          <div className="w-2/3 bg-[#000000] flex flex-col items-center justify-center">
            <TextDiv className=" font-Poppins font-extrabold text-5xl bg-gradient-to-r from-[#FE65FE] from-100% to-[#9010FF] to-100% text-transparent bg-clip-text">
              Oh, you're stuck? Don't worry
            </TextDiv>
            <div className="pt-10">
              <Link href="https://github.com/Vikash-8090-Yadav/SaL--dApp/tree/v1.0.0">
                <Button className="p-3 font-Inter font-bold text-3xl text-center text-[#FFFFFF] rounded-lg bg-gradient-to-r from-[#FE65FE] from-100% to-[#9010FF] to-100% hover:from-[#9010FF] hover:to-[#FE65FE]">
                  Take Help !
                </Button>
              </Link>
            </div>
          </div>
        </MainDiv>
      </div>
    </>
  );
}

export default Stuck;
