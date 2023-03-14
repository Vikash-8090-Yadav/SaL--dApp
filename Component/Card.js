import React from 'react'
import { FaTwitter } from 'react-icons/fa';

const Card = ({img}) => {
  return (
    <>
      <div className = "w-100 bg-blue-500 shadow-xl">
        <div>
          <img className = "h-30 w-full object-cover" src = {img} alt = "Profile"/>
          <div className = "flex flex-col gap-4 p-4">
            <div>
              <h2 className = "font-bold">Name</h2>
            </div>

            <div>
              <p className = "text-justify">
                The point of using Lorem Ipsum is that it has a normal distribution of English.
              </p>
            </div>

            <div className = "flex flex-row justify-between">
              <a className = "bg-white p-2 rounded-md text-blue-500" href = "#">Read More...</a>
              <div className = "text-white/50 hover:text-white/80 py-2 font-semibold text-center">
                <FaTwitter className = "text-xl cursor-pointer" size = {25} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
