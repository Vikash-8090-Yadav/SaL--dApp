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
    <div>
    <div className = "HomeWrapper">
      <div className= "FilterWrapper" >
        <div className="Filteraction" style ={{fontSize:40}}/>
        <div className='Category'  onClick={()=>setFilter(AllData)} ></div>
      </div>
      <div className='Cardsswapper'>
      {filter.map((e)=>{
        console.log("image->",e.image);
        return (
          < div className='Card' key = {e.FirstName}>
            <div className='CardImg'>
              <Image layout ="fill" alt = "Sal-dApp"
              src = {"https://sal-dapp.infura-ipfs.io/ipfs/" + e.image}
              />
            </div>
            <div className="Title">
              {e.FirstName}  {e.LastName}
            </div>
            < div className='CardData'>
              <div className = "Text">Owner<AccountBoxIcon/></div>
              <div className = "Text">{e.owner.slice(0,6)}...{e.owner.slice(39)}<AccountBoxIcon/></div>
            </div>
            <div className ="CardData" >
              <div className = "Text">Amount<AccountBoxIcon/></div>
              <div className = "Text">100 MATIC<AccountBoxIcon/></div>
            </div>
            < div className= "CardData">
              <div className = "Text"><EventIcon /></div>
              <div className = "Text">{new Date(e.timestamp*1000).toLocaleString()}</div>
            </div>
          </div>
        )
      })
}

      </div>
    </div>
    </div>
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
