import React from 'react'
import { FaTwitter } from 'react-icons/fa';

const Card = ({img}) => {
  return (

    <>
    <div className='bg-blue-500 p-4 rounded-lg'>
      <div className = "w-100 bg-white shadow-xl rounded-lg">
        <div>
          <img className = "h-30 w-full object-cover rounded-t-lg" src = {img} alt = "Profile"/>
          <div className = "flex flex-col gap-4 p-4">
            <div>
              <h2 className = "font-bold text-center">Name</h2>
            </div>

            <div>
              <p className = "text-center">
                The point of using Lorem Ipsum is that it has a normal distribution of English.
              </p>
            </div>

            <div className = "flex flex-row justify-center content-center">
              <div className="justify-center">
                <a className = "bg-blue-500 p-2 rounded-lg text-white hover:bg-blue-800 text-center" href = "#">Read More...</a>
              </div>
              
            </div>
            <div className="flex flex-row justify-center object-center">
              <div className = "text-blue-400 hover:text-blue-500 py-2 font-semibold text-center object-center items-center">
                <FaTwitter className = "text-xl cursor-pointer text-center object-center" size = {25} />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

    </>
  )
}

export default Card

