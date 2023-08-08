
import { useState } from 'react';
import { useEffect } from 'react';

function Contributor() {
  const [contributor,setContributor]=useState([])
const apiUrl="https://api.github.com/repos/Vikash-8090-Yadav/SaL--dApp/contributors?40per_page=100";

    useEffect(()=>{
fetchApi();
    },[])
    async function fetchApi(){
      try{
      const response=await fetch(apiUrl);
      const data=await response.json();
      // console.log(data);
      setContributor(data);
      }
      catch(e){
        console.log("server is donw"+e);
      }
    }
  return (
    <div className='contributor'>
      <h3 className='text-center text-2xl font-bold bg-[#5454548d] rounded-2xl m-5 inline-block p-2 text-center'>Our Contributor</h3>
     
      <div className='grid grid-cols-6 items-center justify-center '>
      {contributor.map(data=>{
        return(
          <div className='rounded-xl w-32 p-1 m-1 rounded-bl-full hover:scale-110 transition-all'>
          <img className='' src={data.avatar_url} alt={data.login} onClick={(e)=>window.open(data.html_url)}/>
         </div>
        )
      })}
      </div>
    </div>
  )
}

export default Contributor;