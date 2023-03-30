import React from "react";
import Card from "./Card";
import Slider from "react-slick";
import { feedback } from "./assets/feedbackdata";

// const data = [
// 	{ img: "/images/vr.jpg" },
// 	{ img: "/images/vr.jpg" },
// 	{ img: "/images/vr.jpg" },
// 	{ img: "/images/vr.jpg" },
// 	{ img: "/images/vr.jpg" },
// ];

const Test = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 400,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		autoplay: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 804,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<>
			<div
				name="Data"
				className="w-full py-5 bg-gradient-to-b from-black to-gray-800"
			>
				<h1 className="text-4xl pt-8 pb-4 px-24 font-semibold text-center text-white">
					Happy Client <span className="text-blue-500">Works</span>
				</h1>

				<div className="relative px-24 py-10">
					<Slider {...settings}>
						{feedback.map((data, index) => (
							<Card key={index} {...data} />
						))}
					</Slider>
				</div>
			</div>
		</>
	);
};

export default Test;
