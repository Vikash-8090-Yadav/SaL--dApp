import { createContext, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import AddEmpForm from "./component/Addemp";
import Script from "next/script";
import { toast } from "react-toastify";
const Formstate = createContext();
import allemp from "../../artifacts/contracts/Sal.sol/allemp.json"
import {ethers} from "ethers";


export default function  Form(){
    const [form , setForm] = useState({
    FirstName: "",
    LastName: "",
    WallletAddress:"",
    Position:"Intern",
    Country:"India",
  });

  const[loading,setLoading] = useState(false);
  const[address , setAddress] = useState("");

  const [uploaded , setuploaded] = useState(false);

  const[imageurl,setImageurl] = useState();

  const  FormHandler = (e)=>{
    setForm({
      ...form,
      [e.target.name]: e.target.value
   })
  }


  const [Image , setImage] = useState(null);
  const ImageHandler = (e)=>{
    setImage(e.target.files[0]);
  }



  const Addemp=async (e)=>{
    e.preventDefault();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();
  //   if(typeof window.ethereum =="undefined"){
  //     console.log("PLease install the metamask");
  // }
  // let web3 = await new Web3(window.ethereum);
  if(form.FirstName == ""){
    toast.warn("First Name filed is empty");
  }
  else if(form.LastName == ""){
    toast.warn("Last Name filed is empty");
  }
  else if(form.WallletAddress== ""){
    toast.warn("Wallet Address filed is empty");
  }
  else if(uploaded == false){
    toast.warn("Files upload required");
  }
  else if(uploaded == false){
    toast.warn("Files upload required");
  }
  else{
    setLoading(true);


    const contract = new ethers.Contract(
      "0x1681F1676cb3685bD28a3ea2D0BA56D42eEAe564",
      allemp.abi,
      signer
    );
    const adde = await contract.addemp(
       form.FirstName,
       form.LastName,
       form.WallletAddress,
       form.Country,
       imageurl,
       form.Position
     );
     await adde.wait();
     setAddress(adde.to);
  }
}




  return (
    <>
    <Formstate.Provider value = {{form,setForm,Image,setImage,ImageHandler,FormHandler,setImageurl ,Addemp,setuploaded}}>
        {loading == true ?
        address == "" ?
          <div className="Spinner">
            <TailSpin height={60}/>
            </div>:
            <div className="Address">
              <h1>welcome TO LOGO !</h1>
              <h1>{address}</h1>
              <button className="button">ADD EMPLOYEE</button>
          </div>:
      <AddEmpForm/>
        }
    </Formstate.Provider>
    </>
  )
}

export {Formstate};
