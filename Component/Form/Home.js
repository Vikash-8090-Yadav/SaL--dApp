import styled from "styled-components";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PaidIcon from "@mui/icons-material/Paid";
import EventIcon from "@mui/icons-material/Event";
import Image from "next/image";
import { ethers } from "ethers";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@mui/material";
import allemp from "../../artifacts/contracts/Sal.sol/allemp.json";

export default function Home({
	AllData,
	internData,
	HRData,
	SDEData,
	WebData,
}) {
	const [filter, setFilter] = useState(AllData);

	return (
		<div>
			<div className="HomeWrapper">
				<div className="FilterWrapper flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
					<div className="Filteraction " style={{ fontSize: 40 }} />
					<div
						className="Category block py-2 pr-4 pl-3 rounded text-gray-700 md:bg-transparent hover:text-blue-700 md:p-0 dark:text-white"
						onClick={() => setFilter(internData)}
					>
						Intern
					</div>
					<div
						className="Category block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
						onClick={() => setFilter(HRData)}
					>
						H.R
					</div>
					<div
						className="Category block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
						onClick={() => setFilter(WebData)}
					>
						Web Developer
					</div>
					<div
						className="Category block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
						onClick={() => setFilter(SDEData)}
					>
						S.D.E
					</div>
				</div>
				<div className="Cardsswapper">
					{filter?.map((e) => {
						console.log("image->", e.image);
						return (
							<div
								key={e.id}
								className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
							>
								<div className="Card">
									<div className="CardImg">
										<Image
											layout="fill"
											src={
												"https://ipfs.infura.io/ipfs/" +
												e.image
											}
											alt=""
										/>
									</div>
									<div className="Title mb-2 text-center text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
										{e.FirstName}
									</div>
									<div className="CardData mb-3 font-normal text-gray-500 dark:text-gray-400">
										<div className="Text">
											Owner
											<AccountBoxIcon />
										</div>
										<div className="Text">
											{e.owner.slice(0, 10)}...
											{e.owner.slice(39)}
											<AccountBoxIcon />
										</div>
									</div>
									<div className="CardData mb-3 font-normal text-gray-500 dark:text-gray-400 ">
										<div className="Text">
											Amount
											<AccountBoxIcon />
										</div>
										<div className="Text">
											100 MATIC
											<AccountBoxIcon />
										</div>
									</div>
									<div className="CardData mb-  3 font-normal text-gray-500 dark:text-gray-400 ">
										<div className="Text">
											<EventIcon />
										</div>
										<div className="Text">
											{new Date(
												e.timestamp * 1000
											).toLocaleString()}
										</div>
									</div>
									<Button className="rounded-xl bg-blue-500 bg-gradient-to-r from-indigo-500 button">
										ADD MORE EMPLOYEE
									</Button>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export async function getStaticProps() {
	const provider = new ethers.providers.JsonRpcProvider(
		"https://polygon-mumbai.infura.io/v3/95688893704a4d5bac083296c3547383"
	);

	const contract = new ethers.Contract(
		"0x5F61cAacCEe71d36D7a3d9c1dE73Db9237e04505",
		allemp.abi,
		provider
	);

	const getALlData = contract.filters.salcreated();
	const All = await contract.queryFilter(getALlData);

	const AllData = All.map((e) => {
		return {
			FirstName: e.args.FirstName,
			LastName: e.args.LastName,
			owner: e.args.owner,
			timestamp: parseInt(e.args.timestamp),
		};
	});
	const getInternData = contract.filters.salcreated(
		null,
		null,
		null,
		null,
		null,
		null,
		"Intern"
	);
	const Intern = await contract.queryFilter(getInternData);

	const internData = Intern.map((e) => {
		return {
			FirstName: e.args.FirstName,
			LastName: e.args.LastName,
			owner: e.args.owner,
			timestamp: parseInt(e.args.timestamp),
		};
	});

	const getHRData = contract.filters.salcreated(
		null,
		null,
		null,
		null,
		null,
		null,
		"H.R"
	);
	const HR = await contract.queryFilter(getHRData);

	const HRData = HR.map((e) => {
		return {
			FirstName: e.args.FirstName,
			LastName: e.args.LastName,
			owner: e.args.owner,
			timestamp: parseInt(e.args.timestamp),
		};
	});
	const getSDE2Data = contract.filters.salcreated(
		null,
		null,
		null,
		null,
		null,
		null,
		"S.D.E-2"
	);

	const SDE2 = await contract.queryFilter(getSDE2Data);

	const SDEData = SDE2.map((e) => {
		return {
			FirstName: e.args.FirstName,
			LastName: e.args.LastName,
			owner: e.args.owner,
			timestamp: parseInt(e.args.timestamp),
		};
	});
	const getwebData = contract.filters.salcreated(
		null,
		null,
		null,
		null,
		null,
		null,
		"Web Developer"
	);
	const Web = await contract.queryFilter(getwebData);

	const WebData = Web.map((e) => {
		return {
			FirstName: e.args.FirstName,
			LastName: e.args.LastName,
			owner: e.args.owner,
			timestamp: parseInt(e.args.timestamp),
		};
	});

	return {
		props: {
			AllData,
			internData,
			HRData,
			SDEData,
			WebData,
		},
	};
}
