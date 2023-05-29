import React from "react";
import Image from "next/image";
import { FaTwitter } from "react-icons/fa";

const Card = (data) => {
	console.log("Client card data ------ ");
	console.log(data.img);

	return (
		<>
			<div className="rounded-xl">
				<div className="w-100 bg-white shadow-xl rounded-xl">
					<div>
						<Image
							className="h-32 w-full object-cover rounded-lg"
							src={data.img.src}
							alt="Profile"
							height={400}
							width={500}
						/>
						<div className="flex flex-col gap-3 p-3">
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
									<button
										className="bg-blue-400 p-2 rounded-md text-white hover:bg-blue-600 text-center"
										href="#"
									>
										Read More
									</button>
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
