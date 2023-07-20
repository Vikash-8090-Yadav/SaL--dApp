import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import AboutIcon from "../../images/about.png";

const MyDiv = styled.div`
  width: 417px;
  height: 477px;

  @media (max-width: 1450px) {
    margin: 0 auto;
  }
`;

const ImgDiv = styled.div`
  width: 112px;
  height: 112px;
  margin: 0 auto;
`;

function HappyClient() {
  // Sample data for carousel items
  const carouselItems = [
    {
      id: 1,
      content:
        "Lorem ipsum dolor sit amet consectetur. Pellentesque risus semper sit sit. Sit fermentum nibh a sem. Erat feugiat erat nec morbi. Est dictum congue sapien congue nibh mattis egestas vulputate. Leo et odio interdum suspendisse ac purus tincidunt nullam. Lectus vel venenatis diam accumsan nec ornare urna.",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVF7J6qfpUO4wcQc9xbrVFFOxahgazw3SH-g&usqp=CAU",
      name: "Manasa",
    },
    {
      id: 2,
      content:
        "Lorem ipsum dolor sit amet consectetur. Pellentesque risus semper sit sit. Sit fermentum nibh a sem. Erat feugiat erat nec morbi. Est dictum congue sapien congue nibh mattis egestas vulputate. Leo et odio interdum suspendisse ac purus tincidunt nullam. Lectus vel venenatis diam accumsan nec ornare urna.",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdThT7xVoUkw2wevfcFOLqLKF79KLRrf7NdG1TWHyihlJNytX1U1Jt950cx9znAkHE9E0&usqp=CAU",
      name: "Benjamin",
    },
    {
      id: 3,
      content:
        "Lorem ipsum dolor sit amet consectetur. Pellentesque risus semper sit sit. Sit fermentum nibh a sem. Erat feugiat erat nec morbi. Est dictum congue sapien congue nibh mattis egestas vulputate. Leo et odio interdum suspendisse ac purus tincidunt nullam. Lectus vel venenatis diam accumsan nec ornare urna.",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE-7Y5DPFzMRjB79DjlzMX49Zrxe2VPaUeuuuavglpiiWs-DfIBxsXnNFfY-JIJJCJlME&usqp=CAU",
      name: "Katie Jones",
    },
    {
      id: 4,
      content:
        "Lorem ipsum dolor sit amet consectetur. Pellentesque risus semper sit sit. Sit fermentum nibh a sem. Erat feugiat erat nec morbi. Est dictum congue sapien congue nibh mattis egestas vulputate. Leo et odio interdum suspendisse ac purus tincidunt nullam. Lectus vel venenatis diam accumsan nec ornare urna.",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-XI9Zq7i-HFHEVXotbYRtSCWtLgHWpeDc_2SuRfV0aYvO2euDMadaPx8-YoQsrxFZqn8&usqp=CAU",
      name: "Suruchi",
    },
    {
      id: 5,
      content:
        "Lorem ipsum dolor sit amet consectetur. Pellentesque risus semper sit sit. Sit fermentum nibh a sem. Erat feugiat erat nec morbi. Est dictum congue sapien congue nibh mattis egestas vulputate. Leo et odio interdum suspendisse ac purus tincidunt nullam. Lectus vel venenatis diam accumsan nec ornare urna.",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk2zOGETgB9Z5r-21ECHj6gYrVhh3_Ydwru-S9wGlZ83HY4lLWl5VStnXd4Io5j7u3QkQ&usqp=CAU",
      name: "Vaishnav",
    },
  ];

  const isSmallScreen = useMediaQuery({ maxWidth: 1450 });

  const carouselSettings = {
    // Customize carousel settings as per your requirement
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: isSmallScreen ? 1 : 3, // Show one item at a time on small screens, three items on larger screens
  };

  return (
    <>
      <div className="font-lily-script-one text-center p-5 lg:pt-5 pt-20 text-[#000000] text-4xl">
        Happy Client Works
      </div>
      <div className="mt-10 pl-20 pr-20">
        <Slider {...carouselSettings}>
          {carouselItems.map((item) => (
            <div key={item.id} className="px-2">
              <MyDiv className="rounded-lg bg-gradient-to-b p-[6px] from-[#FB65FE] from-100% to-[#9010FF] to-100%">
                <div className="flex flex-col justify-between h-full bg-white rounded-md p-4">
                  <ImgDiv className="rounded-full bg-gradient-to-b p-[4px] from-[#FB65FE] from-100% to-[#9010FF] to-100%">
                    <div className="flex flex-col justify-between h-full bg-white rounded-full p-2">
                      <Image
                        className="flex flex-col justify-between h-full bg-white rounded-full"
                        src={item.imgSrc}
                        width={100}
                        height={100}
                        alt=""
                      ></Image>
                    </div>
                  </ImgDiv>
                  <div className="font-Inter text-[#000000] text-2xl text-center font-semibold">
                    {item.name}
                  </div>
                  <div className="font-Inter text-[#000000] text-center font-medium text-base">
                    {item.content}
                  </div>
                  <div className="flex justify-center items-center">
                    <button className="bg-[#9010FF] text-[#FFFFFF] text-center font-Inter font-semibold text-base py-4 px-6 rounded-full">
                      Read full on Twitter
                    </button>
                  </div>
                </div>
              </MyDiv>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default HappyClient;
