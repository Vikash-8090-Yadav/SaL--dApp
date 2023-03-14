import Link from "next/link";
import { Formstate } from "../form";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { TailSpin } from "react-loader-spinner";
import {create as IPFSHTTPClient} from "ipfs-http-client";


const projectId = "2EFZSrxXvWgXDpOsDrr4cQosKcl";
const ProjectSecret = "b84c6cb2eec9c4536a0b6424ca709f9d";


const auth = 'Basic ' + Buffer.from(projectId +  ":" + ProjectSecret).toString('base64')

const client = IPFSHTTPClient({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
        authorization: auth,
    }
});
client.add("Hello World").then((res) => {
  console.log(res);
});

export default function AddEmpForm() {

  const Handler = useContext(Formstate);

  const [Uploading,setuploading] = useState(false);
  const [uploaded , setuploaded] = useState(false);
  const  uploadfiles  =async (e)=>{
    e.preventDefault();
    setuploading(true);
    if(Handler.Image!==null){
      try{


        const added = await client.add(Handler.Image);

        await Handler.setImageurl(added.path);
      }
      catch(error){
        toast.warn("Error uploading image");
      }
    }
    setuploading(false);
    setuploaded(true);
    Handler.setuploaded(true);
    toast.success("Files uploaded sucessfully");
  }

    return (
      <>
      <div className="add-conatiner">
        <h2 className="bg-cyan-600 bg-gradient-to-r from-indigo-500 rounded-3xl font-extrabold  text-white">Add employee form</h2>
        <div className="form-container ">
          <form>
            <div className="inpiut-name ">
              <input onChange={Handler?.FormHandler} value = {Handler?.form?.FirstName} type ="text" placeholder ="First Name" className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-white-700 dark:text-black dark:placeholder-gray-500 dark:border-gray-800  name" name = "FirstName" />
              <span>
              <input  onChange={Handler?.FormHandler} value = {Handler?.form?.LastName} type ="text" placeholder ="Last Name" className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-white-700 dark:text-black dark:placeholder-gray-500 dark:border-gray-800 name name" name ="LastName"/>
              </span>
            </div>
            <div className="inpiut-name">
              <input onChange={Handler?.FormHandler} value = {Handler?.form?.WallletAddress}  type ="text" placeholder ="Wallet Address" className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-white-700 dark:text-black dark:placeholder-gray-500 dark:border-gray-800 name text-name"name ="WallletAddress" />
            </div>
            <div className="inpiut-name">
              <i class = "fa fa-useer lock"></i>
                            <select onChange={Handler?.FormHandler} value = {Handler?.form?.Position} className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 name text-name" name ="Position">
                <option>Position</option>
                <option>Intern</option>
                <option>H.R</option>
                <option>S.D.E-2</option>
                <option>Web Developer</option>
              </select>
              <div className="arrow"></div>
            </div>

            <div className="w-full px-12 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-white-700 dark:text-black dark:placeholder-gray-500 dark:border-gray-800  inpiut-name">
              <select onChange={Handler?.FormHandler} value = {Handler?.form?.Country}  className="text-name" name = "Country">
                <option>select a country</option>
                <option>India</option>
                <option>USA</option>
                <option>England</option>
                <option>Brazil</option>
              </select>
              <div className="arrow"></div>
            </div>

            <div class="ml-8">
            <label className = "block text-sm font-medium text-gray-700 name1">Select Image</label>
              <div class="mt-1 flex items-center">
                <span class="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                  <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>
                <input  onChange={Handler?.ImageHandler}  type ="file" accept="image/*" className=" ml-3 form-control blockw-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-non "/>              </div>
            </div>
            <div className=" inpiut-name ">
              {Uploading == true ?<button className="button"><TailSpin color="#fff" height={20}/></button> :uploaded == false?
              <button onClick={uploadfiles} className=" rounded-xl bg-gradient-to-l from-indigo-500 button">Upload to IPFS</button> :<button style = {{cursor:"no-drop"}} className="button">Files uploaded sucessfully</button> }
            </div>
            <div className="inpiut-name">
              <button  className="rounded-xl bg-gradient-to-r from-indigo-500 button" onClick={Handler?.Addemp}>ADD EMPLOYEE</button>
            </div>
          </form>
        </div>
      </div>
      </>
    )
  }
