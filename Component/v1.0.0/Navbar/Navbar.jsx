import { useState } from "react";
import Image from "next/image"
import { Link } from 'react-scroll';
import { Web3Button } from '@web3modal/react';
import LogoutButton from '../../LogoutButton';
import ToggleAppearance from "../../ToggleAppearance";
import Logo from '../../../public/assets/logo.svg'

const Navbar = ({ handleLogout }) => {
  const [showNav, setShowNav] = useState(false)

  const toggleNavItems = () => {
    setShowNav(!showNav)
  }

  return (
    <nav className="w-screen h-[80px] px-[1.6rem] flex justify-between items-center">
      <div className="flex gap-[3rem] items-center max-w-fit">
        <Image src={Logo} alt='logo-sall-dapp' />
        <ToggleAppearance />
      </div>
      <button className="w-[40px] h-[40px] rounded-[10px] border-[1px] border-solid border-[#d8d8d8] hidden max1:block" onClick={toggleNavItems}>
        {showNav ? <span>&#10006;</span> : <span>&#9776;</span>}
      </button>
      <div className={showNav ? `flex max1:p-[1em] max1:block max1:absolute max1:right-[1rem] max1:top-[80px] max1:border-[1px] max1:border-solid max1:border-[#d8d8d8] max1:p[1em] max1:w-[250px] max1:bg-[#fff] max1:rounded-[20px] max1:z-[1] max1:shadow-[0_4px_10px_0_"#73737352"]` : `flex max1:hidden`}>
        <ul className="flex items-center pr-[4em] gap-[4em] font-['Inter'] max1:flex-col max1:gap-[1em] max1:p-[0]">
          <li className="cursor-pointer max1:w-full max1:rounded-[6px] max1:text-center max1:py-[.6em] max1:hover:bg-[#fcefff]"><Link>Home</Link></li>
          <li className="cursor-pointer max1:w-full max1:rounded-[6px] max1:text-center max1:py-[.6em] max1:hover:bg-[#fcefff]"><Link>Dashboard</Link></li>
          <li className="cursor-pointer max1:w-full max1:rounded-[6px] max1:text-center max1:py-[.6em] max1:hover:bg-[#fcefff]"><Link>About</Link></li>
          <li className="cursor-pointer max1:w-full max1:rounded-[6px] max1:text-center max1:py-[.6em] max1:hover:bg-[#fcefff]"><Link>Support Me</Link></li>
        </ul>
        {/* Add the below code for the Connect wallet wallet button and Logout Button */}
        <div className="flex gap-3 items-center max1:flex-col max1:pt-[.5em]">
          <Web3Button balance="show" icon="hide" label="Connect Wallet" />
          <LogoutButton handleLogout={handleLogout} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar

