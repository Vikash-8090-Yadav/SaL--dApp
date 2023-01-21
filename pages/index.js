import styled from 'styled-components';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PaidIcon from '@mui/icons-material/Paid';
import EventIcon from '@mui/icons-material/Event';
import Image from 'next/image';
import { ethers } from 'ethers';
import { useState } from 'react';
import Link from 'next/link'
import { Button } from '@mui/material';
import allemp from "../artifacts/contracts/Sal.sol/allemp.json"

export default function Home({
      AllData,
      internData,
      HRData,
      SDEData,
      WebData
    }){
      const[filter , setFilter] = useState(AllData);
  return (
    <>
    <div className="bind-home-card">
  <div className = "HomeWrapper ">
    <div className= "FilterWrapper sticky flex flex-col p-4 mt-4 bg-gray-100 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 ">
      <div className="Filteraction " style ={{fontSize:40}}/>
      <div className='Category  py-2 pr-4 pl-3 font-sans text-lg rounded text-gray-700 md:bg-transparent hover:bg-gray-100'  onClick={()=>setFilter(internData)} >Intern</div>
      <div className='Category  py-2 pr-4 pl-3 font-sans text-lg hover:bg-gray-100 text-gray-700 rounded  md:hover:bg-transparent  md:p-0 ' onClick={()=>setFilter(HRData)}>H.R</div>
      <div className='Category  py-2 pr-4 pl-3 font-sans text-lg hover:bg-gray-100 text-gray-700 rounded  md:hover:bg-transparent  md:p-0 ' onClick={()=>setFilter(WebData)}>Web Developer</div>
      <div className='Category  py-2 pr-4 pl-3 font-sans text-lg  text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 ' onClick={()=>setFilter(SDEData)}>S.D.E</div>
    </div>


      <div className='Cardsswapper '>
      {filter?.map((e)=>{
        return (

          < div className='Card' key = {e.FirstName}>


            <div className='p-3 border-spacing-1 border-2 bg-blue-100 bg-gradient-to-r    max-w-sm rounded overflow-hidden shadow-lg '>

            <div className='CardImg'>
              <Image layout ="fill" alt = "sal-dApp"
              src = {"https://sal-dapp.infura-ipfs.io/ipfs/" + e.image}
              />
            </div>
            <div className=" text-center text-3xl font-sans Title ">
              {e.FirstName}

            < div className='CardData font-bold text-xl mb-2 text-gray-700 text-base '>
              <div className = "Text font-bold text-xl mb-2">Owner<AccountBoxIcon/></div>
              <div className = "Text font-bold text-xl mb-2"> {e.owner.slice(0,6)}...{e.owner.slice(39)}<AccountBoxIcon/> </div>
            </div>
            <div className ="CardData text-gray-700 text-base" >
              <div className = "Text">Amount<AccountBoxIcon/></div>
              <div className = "Text">100 MATIC<AccountBoxIcon/></div>
            </div>
            < div className= "CardData text-gray-700 text-base">
              <div className = "Text"><EventIcon /></div>
              <div className = "Text">{new Date(e.timestamp*1000).toLocaleString()}</div>
            </div> </div> </div>
            <Button>

            </Button>
          </div>


        )
      })
}

      </div>
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
    "0x1681F1676cb3685bD28a3ea2D0BA56D42eEAe564",
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
