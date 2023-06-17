import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaDribbble,
} from "react-icons/fa";
import { BiChevronRight } from "react-icons/bi";
import Image from "next/image";
import footerIcon from "../../images/footer-icon.png";

function Footer() {
  return (
    <>
      <div className="p-8 mt-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-4 justify-between max-md:flex-col max-md:text-center">
            <div className="mb-5">
              <h4 className="mt-1 font-lily-script-one text-[#000000] text-3xl font-bold text-center pb-1 pt-3">
                <div className="flex items-center justify-center">
                  <div className="pr-2 mt-2">
                    <Image src={footerIcon} height={52} width={24.69} alt="" />
                  </div>
                  <div className="pl-2">Sall Dapp</div>
                </div>
              </h4>
              <p className="text-[#000000] pb-2 text-center font-regular text-20 font-Inter">
                A decentralised Finance App
              </p>
            </div>

            <div className="flex justify-between font-Inter">
              <div className="mb-5 md:mx-40">
                <h4 className="pb-4 text-xl text-[#9010FF] font-bold">
                  Resources
                </h4>
                <ul className="text-[#000000]">
                  <li className="pb-2 flex">
                    <span className="hover:text-blue-400 cursor-pointer font-semibold duration-200">
                      Meta.eth
                    </span>
                  </li>
                  <li className="pb-2 flex">
                    <a
                      href="https://tailwindcss.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-blue-400 cursor-pointer font-semibold duration-200"
                    >
                      Tailwind CSS
                    </a>
                  </li>
                  <li className="pb-2 flex">
                    <a
                      href="https://nextjs.org/"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-blue-400 cursor-pointer font-semibold duration-200"
                    >
                      Next Js
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mb-5">
                <h4 className="pb-4 text-xl text-[#9010FF] font-bold">Legal</h4>
                <ul className="text-[#000000]">
                  <li className="pb-2 flex">
                    <span className="hover:text-blue-400 cursor-pointer font-semibold duration-200">
                      Privacy Policy
                    </span>
                  </li>
                  <li className="pb-2 flex">
                    <span className="hover:text-blue-400 cursor-pointer font-semibold duration-200">
                      Terms & Conditions
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mb-5 font-Inter">
              <h4 className="text-3xl pb-2 mt-1 font-bold text-[#202020] text-center">
                Meta
                <span className="text-[#6F97FF]">.eth</span>
              </h4>
              <p className="text-[#707070] pb-2 text-xs">
                Join 25,000+ others and never miss out our Latest Updates.
              </p>
              <form
                action=""
                className="flex flex-row max-sm:flex-col max-sm:items-center"
              >
                <input
                  type="text"
                  className="text-[#707070] w-2/3 p-3 text-center font-Inter bg-[#D9D9D9] rounded-l-lg"
                  placeholder="Enter your Email"
                />
                <button className="w-1/3 p-3 font-semibold text-[#FFFFFF] text-center font-Inter bg-gradient-to-r from-[#FB65FE] from-100% to-[#9010FF] to-100% hover:from-[#9010FF] hover:to-[#FB65FE] rounded-r-lg">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="px-10 py-1 border-2 border-[#D9D9D9]">
        <div className="text-center pb-10 pt-2 font-Inter font-medium text-20 text-[#8E8E8E]">
          © 2022-2023 Meta.eth™. All Rights Reserved.
        </div>
      </div>
    </>
  );
}

export default Footer;
