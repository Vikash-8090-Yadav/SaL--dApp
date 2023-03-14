import styled from 'styled-components';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PaidIcon from '@mui/icons-material/Paid';
import EventIcon from '@mui/icons-material/Event';
import Image from 'next/image';
import { ethers } from 'ethers';
import { useState } from 'react';
import {AiFillCaretDown, AiFillCaretUp} from 'react-icons/ai'
import Link from 'next/link'
import { Button } from '@mui/material';
import allemp from "../artifacts/contracts/Sal.sol/allemp.json"

export default function Cards({
  AllData,
  internData,
  HRData,
  SDEData,
  WebData
})

{      
  const[filter , setFilter] = useState(AllData);
  const [expand, setExpand] = useState(false);
  return (
    <>
      <div className="h-screen overflow-scroll flex flex-col">
        <div className = "w-44 font-medium h-80 absolute right-12 max-sm:w-36 text-center z-50">
          <button onClick = {() => setExpand((prev) => !prev)} className = "bg-white w-full p-2 flex items-center justify-around border-b-2 border-black text-black">
            Select Profile
            {!expand ? (
              <AiFillCaretDown size = {20} />
            ) : (
              <AiFillCaretUp size = {20} />
            )}
          </button>

          {expand && (
            <div className = "bg-white">
              {
                <ul className = "bg-white">
                  <li className = "p-2 text-sm hover:bg-gray-400 cursor-pointer text-black" onClick={()=>setFilter(internData)}>Intern</li>
                  <li className = "p-2 text-sm hover:bg-gray-400 cursor-pointer text-black" onClick={()=>setFilter(HRData)}>HR</li>
                  <li className = "p-2 text-sm hover:bg-gray-400 cursor-pointer text-black" onClick={()=>setFilter(WebData)}>Web Developer</li>
                  <li className = "p-2 text-sm hover:bg-gray-400 cursor-pointer text-black" onClick={()=>setFilter(SDEData)}>SDE</li>
                </ul>
              }
            </div>
          )}
        </div>

        <div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mt-12">
          {filter?.map((e)=>{
            return (
              <div className='Card' key = {e.FirstName}>
                <div className='p-3 border-spacing-1 border-2 bg-blue-100 bg-gradient-to-r max-w-sm rounded overflow-hidden shadow-lg'>
                  <div className='CardImg'>
                    <Image layout ="fill" alt = "sal-dApp" src = {"https://sal-dapp.infura-ipfs.io/ipfs/" + e.image}/>
                  </div>
            
                  <div className=" text-center text-3xl font-sans Title">
                    {e.FirstName}
                    <div className ='CardData font-bold mb-2 text-gray-700 text-base '>
                      <div className = "Text font-bold text-xl mb-2">Owner<AccountBoxIcon/></div>
                      <div className = "Text font-bold text-xl mb-2"> {e.owner.slice(0,6)}...{e.owner.slice(39)}<AccountBoxIcon/></div>
                    </div>
            
                    <div className ="CardData text-gray-700 text-base" >
                      <div className = "Text">Amount<AccountBoxIcon/></div>
                      <div className = "Text">100 MATIC<AccountBoxIcon/></div>
                    </div>
                          
                    <div className= "CardData text-gray-700 text-base">
                      <div className = "Text"><EventIcon /></div>
                      <div className = "Text">{new Date(e.timestamp*1000).toLocaleString()}</div>
                    </div> 
                  </div> 
                </div>
              </div>
            )})
          }
        </div>
      </div>
    </>
  )
}

export async function getStaticProps(){
  const provider= new ethers.providers.JsonRpcProvider(
    "https://polygon-mumbai.g.alchemy.com/v2/MeKFrDq5O-mlM8I0CzXpKg0pRvdNRjxF"
  );

  const contract = new ethers.Contract(
    "0x7c73D7e12b5eA8809B1261cF7b8513F6E6E5d528",
    allemp.abi,
    provider
  );

  const getALlData = contract.filters.salcreated();
  const All = await contract.queryFilter(getALlData);

  console.log("a;llll->",All);

  const AllData = All.map((e)=>{
    return{
      FirstName : e.args.FirstName,
      LastName : e.args.LastName,
      owner : e.args.owner,
      image : e.args.image,
      timestamp : parseInt(e.args.timestamp)
    }
  });
  const getInternData = contract.filters.salcreated(null,null,null,null,null,null,'Intern');
  const Intern = await contract.queryFilter(getInternData);

  const internData = Intern.map((e)=>{
    return{
      FirstName : e.args.FirstName,
      LastName : e.args.LastName,
      owner : e.args.owner,
      image : e.args.image,
      timestamp : parseInt(e.args.timestamp)
    }
  });

  const getHRData = contract.filters.salcreated(null,null,null,null,null,null,'H.R');
  const HR = await contract.queryFilter(getHRData);

  const HRData = HR.map((e)=>{
    return{
      FirstName : e.args.FirstName,
      LastName : e.args.LastName,
      owner : e.args.owner,
      image : e.args.image,
      timestamp : parseInt(e.args.timestamp)
    }
  });
  const getSDE2Data = contract.filters.salcreated(null,null,null,null,null,null,'S.D.E-2');
  console.log("sdxe",getSDE2Data);
  const SDE2 = await contract.queryFilter(getSDE2Data);
  console.log("sde2",SDE2);
  const SDEData = SDE2.map((e)=>{
    return{
      FirstName : e.args.FirstName,
      LastName : e.args.LastName,
      owner : e.args.owner,
      image : e.args.image,
      timestamp : parseInt(e.args.timestamp)
    }
  });
  const getwebData = contract.filters.salcreated(null,null,null,null,null,null,'Web Developer');
  const Web = await contract.queryFilter(getwebData);

  const WebData = Web.map((e)=>{
    return{
      FirstName : e.args.FirstName,
      LastName : e.args.LastName,
      owner : e.args.owner,
      image : e.args.image,
      timestamp : parseInt(e.args.timestamp)
    }
  });
  return {
    props:{
      AllData,
      internData,
      HRData,
      SDEData,
      WebData
    }
  }
}