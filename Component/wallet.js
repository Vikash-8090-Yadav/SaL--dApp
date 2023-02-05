import Link from "next/link"
import Script from "next/script";
import { useState } from "react";
import LogoutIcon from '@mui/icons-material/Logout';
import Logout from "./logout"
import {ethers} from "ethers"
import { Button } from '@mui/material';
import { toast } from "react-toastify";
const RPC = "https://polygon-mumbai.infura.io/v3/95688893704a4d5bac083296c3547383"
const networks = {
    polygon:{
     chainId: `0x${Number(80001).toString(16)}`,
     chainName:"polygon",
     nativeCurrency:{
        name:"Matic",
        symbol: "MATIC",
        decimals: 18

     },
     rpcUrls:["https://rpc-mumbai.maticvigil.com/"],
     blockExplorerUrls:["https://mumbai.polygonscan.com/"]

    },
};


import { Modal, Input, Tooltip } from 'antd'

import Web3Modal from 'web3modal'
import { ConfigProvider } from 'antd';
// import { Button } from "antd";

const providerOptions = {
  /* See Provider Options Section */
};

export default function   Wallet() {
     const [isModalOpen, setIsModalOpen] = useState(false);
  const [polygonAmount, setPolygonAmount] = useState();

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
    const web3Modal = new Web3Modal()
    if(web3.network !=="polygon"){
            await window.ethereum.request({
                method:"wallet_addEthereumChain",
                params:[{
                    ...networks["polygon"]
                }]
            })
        }
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()
    const address = await signer.getAddress()

    if (address && signer && provider) {
      requestPolygonTransaction(signer, address, provider)
    } else {
      alert("ERROR couldn't connect to metamask")
    }
  }

    const requestPolygonTransaction = async (signer, address, provider) => {
    
    // check validity of addresses
    if (
      !ethers.utils.isAddress(address)
    ) {
      alert('ERROR invalid wallet addresses provided')
      return
    }
  

    const transactionParameters = {
      from:address,
      
      
      to: "0x7719E64418C13c3Ab97e6f8500E81ce1101e8C40", 
      data: '0x',
      value: ethers.utils.parseEther(polygonAmount),
      gasLimit: ethers.utils.hexlify(210000),
      gasPrice: ethers.utils.hexlify(parseInt(await provider.getGasPrice())),
    }

    try {
  const transaction = await signer.sendTransaction(transactionParameters);
  setIsModalOpen(false);
  await Modal.success({
    title: 'Tx Success!'
  });
} catch (e) {
  console.log('failed!')
 await  Modal.error({
    title: 'Oops transaction failed!',
    content: 'please double check the amount and try again',
  });
}
  }





    const [show , setShow] = useState(false);
    const [balance , setBalance] = useState(0);
    async function connectWallet(){
        if(typeof window.ethereum =="undefined"){
            console.log("PLease install the metamask");
        }
        let web3 = await new Web3(window.ethereum);
        console.log(web3.version)
        if(web3.network !=="polygon"){
            await window.ethereum.request({
                method:"wallet_addEthereumChain",
                params:[{
                    ...networks["polygon"]
                }]
            })
        }
        const accounts = await web3.eth.requestAccounts();
        const Address =await  "0x7719E64418C13c3Ab97e6f8500E81ce1101e8C40";
        
        await web3.eth.getBalance(Address,async function(err,res){
            if(err){
                console.log("error->"+err);
            }
            else{
                const finalbalance = web3.utils.fromWei(res)+ " "+networks["polygon"]["nativeCurrency"]["name"];
                console.log("result->"+finalbalance);
                setBalance(finalbalance);
                setShow(true);

            }
        });
    }
  return (
    <>
     <Script src="https://cdnjs.cloudflare.com/ajax/libs/web3/1.2.7-rc.0/web3.min.js"></Script>
    <div  className="cnt" class="pt-2">
        <button className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 wallletwrapper" onClick={connectWallet}>
            
            {show == false ? <bl className="bl">Check Contract Balance</bl> : 
            (balance == 0 ? <bl className="bl">0</bl> : 
            <bl className="bl"><h2>{balance.slice(0,4)} {balance.slice(-5)}</h2></bl>) } 
              </button>
             </div>
             <button className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"   onClick={() => setIsModalOpen(true)}>Donate Us</button>
            <Modal
                  title="Donate To Sal-Dapp"
                  visible={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  footer={[
                  <Button key="submit" type="primary" onClick={connectToMetamask}>
                  Submit
                  </Button>,
                  ]}
                  >
                <p>Enter amount in polygon MATIC youd like to send</p>
                  <Input
                  prefix=""
                  value={polygonAmount}
                  onChange={updateAmount}
                  placeholder="50"
                  suffix="matic"
                />
            </Modal>
    </>
  )
}
