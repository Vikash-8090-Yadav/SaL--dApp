import Link from "next/link"
import Script from "next/script";
import { useState } from "react";
import LogoutIcon from '@mui/icons-material/Logout';
import Logout from "./logout"
// <div className="lg">
// <Logout/>
// </div>
const networks = {
    // for ganache
    // development: {
    //  host: "127.0.0.1",     // Localhost (default: none)
    //  port: 7545,            // Standard Ethereum port (default: none)
    //  network_id: "*",       // Any network (default: none)
    // },
    // for polygon
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
    // for ropsten
    // ropsten: {
    //   provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/YOUR-PROJECT-ID`),
    //   network_id: 3,       // Ropsten's id
    //   gas: 5500000,        // Ropsten has a lower block limit than mainnet
    //   confirmations: 2,    // # of confirmations to wait between deployments. (default: 0)
    //   timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
    //   skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
};

export default function   Wallet() {
    const [address , setAddress] = useState('');
    const [balance , setBalance] = useState(' ');
    async function connectWallet(){
        if(typeof window.ethereum =="undefined"){
            console.log("PLease install the metamask");
        }
        let web3 = await new Web3(window.ethereum);
        console.log(web3.version)
        if(web3.network !=="matic"){
            await window.ethereum.request({
                method:"wallet_addEthereumChain",
                params:[{
                    ...networks["polygon"]
                }]
            })
        }
        const accounts = await web3.eth.requestAccounts();
        const Address =await  accounts[0];
        setAddress(Address);
        await web3.eth.getBalance(Address,async function(err,res){
            if(err){
                console.log("error->"+err);
            }
            else{
                const finalbalance = web3.utils.fromWei(res)+ " "+networks["polygon"]["nativeCurrency"]["name"];
                console.log("result->"+finalbalance);
                setBalance(finalbalance);

            }
        });
    }
  return (
    <>
     <Script src="https://cdnjs.cloudflare.com/ajax/libs/web3/1.2.7-rc.0/web3.min.js"></Script>
    <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></Script>
    <div  className="cnt" class="pt-2">
        <div className=" text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 wallletwrapper" onClick={connectWallet}>
            {balance == ''?<bl className="bl">0</bl>:<bl className="bl"><h2>{balance.slice(0,4)} {balance.slice(-5)}</h2></bl>}
            {address == ''?<wl className="wl">Connect Wallet</wl>:<wl1 className="wl1"><h2>{address.slice(0,6)}...{address.slice(39)}</h2></wl1>}
              </div>
             </div>
    </>
  )
}
