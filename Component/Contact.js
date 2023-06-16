import React from 'react'
import Link from "next/link"
import Image from "next/image"
import confused from "./images/confused.jpg"  
function Contact() {
  return (
    <>
      <div name = "contact" className = "w-full py-5 bg-gradient-to-b from-gray-800 to-black text-white">
        <h1 className = "text-4xl pt-8 pb-4 px-24 font-semibold text-center text-white">Buy Me a <span className='text-blue-500'>Coffee</span></h1>
        <p className = "text-lg pb-4 px-24 font-semibold text-center text-gray-500">Submit the form below to support me.</p>
        <div className = "mx-auto flex flex-col items-center justify-center h-full px-4 md:px-8 my-3">
          <form className = "w-full flex flex-col items-center justify-center">
            <input type = "text" name = "name" placeholder = "Enter your Name" className = "w-1/2 max-md:w-4/5 p-2 mb-4 bg-transparent border-2 rounded-md text-white focus:outline-none" />
            <input type = "email" name = "email" placeholder = "Enter your Email" className = "w-1/2 max-md:w-4/5 p-2 mb-4 bg-transparent border-2 rounded-md text-white focus:outline-none" />
            <textarea name = "message" rows = "7" placeholder = "Enter your Feedback" className = "w-1/2 max-md:w-4/5 p-2 mb-4 bg-transparent border-2 rounded-md text-white focus:outline-none" />
            <button className = "bg-blue-500 w-1/8 max-md:w-4/5 rounded-full text-white font-semibold text-xl p-2 hover:bg-blue-800 mb-8">Support Me</button>
          </form>
        </div>
      </div>


        
    <div className="sm:px-4 py-16  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 m-auto">
      <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded-3xl shadow-sm lg:flex-row sm:mx-auto">
        <div className="relative lg:w-1/2">
        <Image src ={confused} width ={500} height = {400}  alt ="hero-image"/>
          <svg
            className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
            viewBox="0 0 20 104"
            fill="currentColor"
          >
            <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
          </svg>
        </div>




        <div className="flex flex-col justify-center p-8 bg-black lg:p-16 lg:pl-10 lg:w-1/2">

          <h5 className="mb-3 text-3xl text-white font-extrabold leading-none sm:text-4xl">
            Oh, you're stuck? Don't worry,
          </h5>
          <p className="mb-8 text-blue-400 font-black">
          </p>
          <div style={{color:'red'}} className="flex items-left">
          <Link href="https://github.com/Vikash-8090-Yadav/SaL--dApp#readme"> 
           <a
           className="flex hover:border-2 hover:shadow-xl items-center  border border-2 justify-center w-full sm:px-10 py-4 leading-6 bg-white rounded-lg font-black"
           >
            Take Help !
           </a>
           </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact
