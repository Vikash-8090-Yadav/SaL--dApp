import Link from "next/link"
import Image from "next/image"
import polygon from './images/polygon.png'
import spheron from './images/spheron.png'
import arcana from './images/arcana.png'
import cool from './images/cool.png'
export default function About() {
    return (
      <>
      <div id="About">
<div class="w-full my-20 z-50 sticky  rounded-3xl px-6 bg-zinc-600 bg-gradient-to-r from-indigo-800">

<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  <h1 class="text-extrabold text-5xl text-white text-center font-bold font-serif">How we did it ?</h1>
      <div class="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
        <div class="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
          <div class="max-w-xl mb-6">

            <h2 class="font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none max-w-lg mb-6">
             Lorem Ipsum Is Cool.
            </h2>
            <p class="text-white text-base md:text-lg"> Lorem Ipsum is so cool and awesome to act and so cool to think. And very awesome to eat and talk.
            </p>
          </div>
          <div class="flex items-center space-x-3">
          <Link href="/comingsoon">
            <a
      class="flex object-cover sm:mr-64 mr-32 object-top items-center text-white border border-2 justify-center w-full sm:px-10 py-4 leading-6 bg-pink-700 bg-gradient-to-l from-indigo-800 hover:bg-pink-700 hover:bg-gradient-to-r hover:from-indigo-800 rounded-xl font-black"
    >
       Know More
    </a>
    </Link>
          </div>
        </div>
        <Image  src ={polygon} width ={400} height = {400} alt ="hero-image"/>      </div>
    </div>



    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">

      <Image  src ={spheron} width ={400} height = {400} alt ="hero-image"/>  

        <div class="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">

          <div class="max-w-xl mb-6">

            <h2 class="font-sans text-3xl sm:mt-0 mt-6 font-bold tracking-tight text-white sm:text-4xl sm:leading-none max-w-lg mb-6">
             Step 2 : Awesome Is Lorem Ipsum
            </h2>
            <p class="text-white text-base md:text-lg">Lorem Ipsum is so cool and awesome to act and so cool to think. And very awesome to eat and talk.

            </p>
          </div>
          <div class="flex items-center space-x-3">
          <Link href="/comingsoon">
            <a
      class="flex object-cover sm:mr-64 mr-32 object-top items-center text-white border border-2 justify-center w-full sm:px-10 py-4 leading-6 bg-pink-700 bg-gradient-to-l from-indigo-800   rounded-xl font-black"
    >
       Get Started</a>
    </Link>
          </div>
        </div>
      </div>
    </div>



    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
        <div class="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
          <div class="max-w-xl mb-6">

            <h2 class="font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none max-w-lg mb-6">
             Step 3 : Cool and awesome is lorem ipsum
            </h2>
            <p class="text-white text-base md:text-lg">Lorem Ipsum is so cool and awesome to act and so cool to think. And very awesome to eat and talk.

            </p>
          </div>
          <div class="flex items-center space-x-3">
          <Link href="/comingsoon">
            <a
      class="flex object-cover sm:mr-64 mr-32 object-top items-center text-white border border-2 justify-center w-full sm:px-10 py-4 leading-6 bg-black rounded-lg font-black"
    >
       &nbsp;&nbsp;<Image  src ={arcana} width ={400} height = {400} alt ="hero-image"/>&nbsp;&nbsp; Get Started
    </a>
    </Link>
          </div>
        </div>
        <Image  src ={arcana} width ={400} height = {400} alt ="hero-image"/>
      </div>
    </div>


    <div class="sm:px-4 py-16  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded-3xl shadow-sm lg:flex-row sm:mx-auto">
        <div class="relative lg:w-1/2">
        <Image src ={cool} width ={400} height = {400}  alt ="hero-image"/>
          <svg
            class="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
            viewBox="0 0 20 104"
            fill="currentColor"
          >
            <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
          </svg>
        </div>




        <div class="flex flex-col justify-center p-8 bg-black lg:p-16 lg:pl-10 lg:w-1/2">

          <h5 class="mb-3 text-3xl text-white font-extrabold leading-none sm:text-4xl">
            Need Some Help!
          </h5>
          <p class="mb-8 text-blue-400 font-black">
          </p>
          <div style={{color:'red'}} class="flex items-left">
          <Link href="/comingsoon"> 
           <a
           class="flex hover:border-2 hover:shadow-xl items-center  border border-2 justify-center w-full sm:px-10 py-4 leading-6 bg-white rounded-lg font-black"
           >
            Contact Us
           {/* &nbsp;&nbsp;<Image height='30' width="25" alt="gmail logo" src={gm} />&nbsp;&nbsp; Contact Us */}
           </a>
           </Link>
          </div>
        </div>
      </div>
    </div>

          </div>
      </div>
      </>
    )
  }
