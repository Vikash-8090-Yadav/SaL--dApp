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
import allemp from "../artifacts/contracts/Sal.sol/allemp.json";

import { Modal, Input, Tooltip } from "antd";

import Web3Modal from "web3modal";
import { ConfigProvider } from "antd";
// import { Button } from "antd";

const providerOptions = {
  /* See Provider Options Section */
};
export default function Home({
  AllData,
  internData,
  HRData,
  SDEData,
  WebData,
}) {
  const [filter, setFilter] = useState(AllData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [polygonAmount, setPolygonAmount] = useState(0);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const updateAmount = (e) => {
    setPolygonAmount(e.target.value);
  };

  const connectToMetamask = async () => {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const address = await signer.getAddress();
    if (address && signer && provider) {
      requestPolygonTransaction(signer, address, provider);
    } else {
      console.log("ERROR couldn't connect to metamask");
    }
  };

  const requestPolygonTransaction = async (signer, address, provider) => {
    alert(address);
    // check validity of addresses
    if (
      !ethers.utils.isAddress(address) ||
      !ethers.utils.isAddress("0x7719E64418C13c3Ab97e6f8500E81ce1101e8C40")
    ) {
      console.log("ERROR invalid wallet addresses provided");
      return;
    }

    const transactionParameters = {
      from: "0x7719E64418C13c3Ab97e6f8500E81ce1101e8C40",

      to: "0xeE467Cae5d6461FB1783c15bD9Da43d63048ffb0",
      data: "0x",
      value: ethers.utils.parseEther(polygonAmount),
      gasLimit: ethers.utils.hexlify(210000),
      gasPrice: ethers.utils.hexlify(parseInt(await provider.getGasPrice())),
    };

    try {
      const transaction = await signer.sendTransaction(transactionParameters);
      setIsModalOpen(false);
      await Modal.success({
        title: "Tx Success!",
      });
    } catch (e) {
      console.log("failed!");
      await Modal.error({
        title: "Oops transaction failed!",
        content: "please double check the amount and try again",
      });
    }
  };
  return (
    <div>
      <div className="HomeWrapperemps">
        <div className="FilterWrapperemps">
          <button className="Filteraction" style={{ fontSize: 40 }} />
          <button
            className="filterCategoryemps"
            onClick={() => setFilter(internData)}
          >
            <span class="textemps">Intern</span>
          </button>
          <button className="filterCategoryemps" onClick={() => setFilter(HRData)}>
            <span class="textemps">H.R</span>
          </button>
          <button className="filterCategoryemps" onClick={() => setFilter(WebData)}>
            <span class="textemps">WebDev</span>
          </button>
          <button className="filterCategoryemps" onClick={() => setFilter(SDEData)}>
            <span class="textemps">S.D.E</span>
          </button>
        </div>
        <div className="Cardsswapperemps">
          {filter.map((e) => {
            console.log("image->", e.image);
            return (
              <div className="Cardemps" key={e.FirstName}>
                <div>
                  <Image
                    className="CardImgemps"
                    width={250}
                    height={180}
                    alt="sal-dApp "
                    src={"https://sal-dapp.infura-ipfs.io/ipfs/" + e.image}
                  />
                </div>
                <div className="Titleemps">
                  {e.FirstName} {e.LastName}
                </div>
                <div className="CardDataemps">
                  <div className="Textemps">
                    Owner
                    <AccountBoxIcon />
                  </div>
                  <div className="Textemps">
                    {e.owner.slice(0, 6)}...{e.owner.slice(39)}
                  </div>
                </div>
                <div className="CardDataemps">
                  <div className="Textemps">
                    Amount
                    <AccountBoxIcon />
                  </div>
                  <div className="Textemps">100 MATIC</div>
                </div>
                <div className="CardDataemps">
                  <div className="Textemps">
                    <EventIcon />
                  </div>
                  <div className="Textemps">
                    {new Date(e.timestamp * 1000).toLocaleString()}
                  </div>
                </div>
                <div className="btnemps">
                  <button
                    className="pay-buttonemps"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <span>
                      Pay
                      <PaidIcon />
                    </span>
                  </button>
                </div>
                <Modal
                  title="Salaray"
                  visible={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  footer={[
                    <Button
                      key="submit"
                      type="primary"
                      onClick={connectToMetamask}
                    >
                      Submit
                    </Button>,
                  ]}
                >
                  <select className="w-full px-3 py-2 placeholder-blue-300  rounded-md focus:outline-none focus:ring dark:placeholder-blue-500 dark:border-blue-600  dark:focus:border-blue-500 name text-name">
                    <option>Position</option>
                    <option>Intern</option>
                    <option>H.R</option>
                    <option>S.D.E-2</option>
                    <option>Web Developer</option>
                  </select>
                  <p>Enter amount in polygon MATIC youd like to send</p>
                  <Input
                    prefix=""
                    value={polygonAmount}
                    onChange={updateAmount}
                    placeholder="50"
                    suffix="matic"
                  />
                </Modal>
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
    "https://polygon-mumbai.g.alchemy.com/v2/MeKFrDq5O-mlM8I0CzXpKg0pRvdNRjxF"
  );

  const contract = new ethers.Contract(
    "0x7c73D7e12b5eA8809B1261cF7b8513F6E6E5d528",
    allemp.abi,
    provider
  );

  const getALlData = contract.filters.salcreated();
  const All = await contract.queryFilter(getALlData);

  console.log("a;llll->", All);

  const AllData = All.map((e) => {
    return {
      FirstName: e.args.FirstName,
      LastName: e.args.LastName,
      owner: e.args.owner,
      image: e.args.image,
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
      image: e.args.image,

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
      image: e.args.image,
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
  console.log("sdxe", getSDE2Data);
  const SDE2 = await contract.queryFilter(getSDE2Data);
  console.log("sde2", SDE2);
  const SDEData = SDE2.map((e) => {
    return {
      FirstName: e.args.FirstName,
      LastName: e.args.LastName,
      owner: e.args.owner,
      image: e.args.image,
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
      image: e.args.image,
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
