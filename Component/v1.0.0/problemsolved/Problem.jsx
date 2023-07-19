import React from "react";
import styled from "styled-components";

const MyDiv = styled.div`
  width: 981px;
  height: 240px;
  margin: 0 auto;
  margin-bottom: 100px;
`;

function Problem() {
  return (
    <>
      <div>
        <div className="text-center font-lily-script-one bg-gradient-to-b from-[#FB65FE] from-100% to-[#9010FF] to-100% text-transparent bg-clip-text p-5 lg:pt-0 pt-20 text-4xl">
          The Problem
        </div>
        <MyDiv className="font-Inter text-center text-xl text-[#000000] font-normal leading-10 pt-10">
          As startups and established companies continue to flourish, a common
          problem that exists in the industry is the mode of payment for
          employees. To address this issue, we have developed a decentralized
          application utilizing blockchain technology that streamlines the
          payment process for startups and companies. With this application, an
          organization's admin can easily send payments and manage employee
          salaries in one central location, eliminating the need for multiple
          individuals to handle the task.
        </MyDiv>
      </div>
    </>
  );
}

export default Problem;
