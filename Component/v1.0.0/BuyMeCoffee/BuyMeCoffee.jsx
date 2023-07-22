import React from "react";
import styled from "styled-components";

const MyDiv = styled.div`
  width: 509px;
  height: 621px;
  margin: 0 auto;
`;

const InputDiv = styled.input`
  width: 447px;
  height: 65px;
`;

const TextDiv = styled.textarea`
  width: 447px;
  height: 193px;
`;

const MyButton = styled.button`
  width: 447px;
  height: 66px;
  :hover {
    background-color: #6000cc;
  }
`;

const MyForm = styled.form`
  margin: 0 auto;
`;

function BuyMeCoffee() {
  return (
    <>
      <div className="p-5 lg:pt-5 pt-20 text-center text-[#000000] font-lily-script-one text-4xl font-normal">
        Buy Me a Coffee
      </div>
      <div className="text-[#565656] text-center font-Inter text-xl font-semibold">
        Submit the form below to support me.
      </div>
      <div className="p-5 pt-10">
        <MyDiv className="rounded-2xl bg-gradient-to-b p-[6px] from-[#FB65FE] from-100% to-[#9010FF] to-100%">
          <div className="pt-8 flex flex-col justify-between h-full bg-white rounded-xl p-4">
            <MyForm>
              <InputDiv
                className="font-Inter font-semibold text-lg text-[#BABABA] border-[#D9D9D9] bg-[#F5F5F5] px-3 rounded-md border-2"
                type="text"
                name="name"
                placeholder="Enter your name"
              />
              <div className="pt-12">
                <InputDiv
                  className="font-Inter font-semibold text-lg text-[#BABABA] border-[#D9D9D9] bg-[#F5F5F5] px-3 rounded-md border-2"
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="pt-12">
                <TextDiv
                  className="font-Inter font-semibold text-lg text-[#BABABA] border-[#D9D9D9] bg-[#F5F5F5] px-3 py-2 rounded-md border-2"
                  type="text"
                  name="message"
                  placeholder="Enter your Message"
                />
              </div>
              <div className="pt-12">
                <MyButton className="rounded-md text-center px-2 py-4 text-[#FFFFFF] font-lily-script-one font-normal text-2xl bg-[#9010FF]">
                  Support Me
                </MyButton>
              </div>
            </MyForm>
          </div>
        </MyDiv>
      </div>
    </>
  );
}

export default BuyMeCoffee;
