import React from "react";
import Image from "next/image";
import { FaTwitter } from "react-icons/fa";

const Card = (data) => {
	console.log("Client card data ------ ");
	console.log(data.img);

	return (
		<>
			<div className="bg-blue-500 p-4 rounded-lg">
				<div className="w-100 bg-white shadow-xl rounded-lg">
					<div>
						<Image
							className="h-32 w-full object-cover rounded-t-lg"
							src={data.img.src}
							alt="Profile"
							height={400}
							width={500}
						/>
						<div className="flex flex-col gap-4 p-4">
							<div>
								<h2 className="font-bold text-center">
									{data.name}
								</h2>
							</div>

							<div>
								<p className="text-center line-clamp-5">
									{data.feedback}
								</p>
							</div>

							<div className="flex flex-row justify-center content-center">
								<div className="justify-center">
									<a
										className="bg-blue-500 p-2 rounded-lg text-white hover:bg-blue-800 text-center"
										href="#"
									>
										Read More...
									</a>
								</div>
							</div>
							<div className="flex flex-row justify-center object-center">
								<div className="text-blue-400 hover:text-blue-500 py-2 font-semibold text-center object-center items-center">
									<FaTwitter
										className="text-xl cursor-pointer text-center object-center"
										size={25}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Card;
