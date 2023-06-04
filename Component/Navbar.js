import React, { useState } from 'react'
import { Link } from 'react-scroll';

import { BsFillTelephoneFill } from 'react-icons/bs'
import { Web3Button } from '@web3modal/react';
import LogoutButton from "../Component/LogoutButton"
import Image from "next/image"

const Navbar = ({ handleLogout }) => {

  return (
    <>
      <div className='navbar w-screen  bg-gradient-to-b from-gray-900 to-black flex justify-between items-center  overflow-hidden h-14 py-2 px-1 text-slate-300 fixed z-50'>
        {/* Add  the below code for the Connect wallet wallet button and Logout Button */}

        {/* <div className="flex">
          <button className="pl-2 py-4 text-l font-xs">
            <Web3Button balance="show" icon="hide" label="Connect Wallet" />
          </button>
          <button className="pl-4 py-4 px-4 text-l font-small">
            <LogoutButton handleLogout={handleLogout} />
          </button>

        </div> */}

      </div>
    </>
  );
};

export default Navbar

