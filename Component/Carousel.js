import React from 'react'
import Image from "next/image"
import hero from "../images/2.png";

function  Carousel() {
  return (
    <>
      <div name = "Home" id = "Home" className='overflow-x-hidden'>
        <Image src ={hero} width ={4000} height = {1900} alt =""/>
      </div>
    </>
  )
}

export default Carousel
