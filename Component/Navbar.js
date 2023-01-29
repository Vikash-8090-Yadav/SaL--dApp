import React, {useState} from 'react'
import {Link} from 'react-scroll';
import {FaBars, FaTimes} from 'react-icons/fa'
import { useWeb3Modal, Web3Button, Web3NetworkSwitch } from '@web3modal/react'
import LogoutButton from "../Component/LogoutButton"
import SalDappLogo from "../public/images/sal-Dapp.png"
import Image from "next/image"
const Navbar = ({ handleLogout }) => {
    const [nav, setNav] = useState(false);
    const [navBar, setNavBar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 1) {
            setNavBar(true);
        } else {
            setNavBar(false);
        }
    };

    window.addEventListener('scroll', changeBackground);
    
    const links = [
        {
            id: 1,
            link: "Home",
        },
        {
            id: 2,
            link: "About",
        },
        {
            id: 3,
            link: "Contact",
        },
        {
            id: 4,
            link: "Logout",
        },
    ]

    const handleLogout1=()=>{
    return handleLogout={handleLogout}
}
const handleWeb3ButtonClick = () => {
  // code to handle web3 button click
  setLogoutVisible(true);
}
    return (
        <>
            <div  className = {navBar ? 'navbar active' : 'navbar'}>
            <div className="flex">
                <Image src = {SalDappLogo} height = "0" width = "49" alt = ""/>{  <h1 className = "text-3xl text-extrabold text-bold font-serif ml-2 text-white font-semibold max-sm:text-xl max-sm:ml-0 max-sm:mr-3 ">DAPP.eth</h1> }
                </div>

                <ul className = "hidden md:flex text-yellow-300">
                    {links.map(({id, link}) => (
                        <li key = {id} className = "px-4 cursor-pointer md:hover:scale-125 duration-300 capitalize text-xl font-bold">

                            {link === 'Logout' ? 
                          <a className = "hidden flex text-white " onClick={handleLogout}>{link}</a> : 
                          <Link to={link} smooth duration={50}>{link}</Link>
                        }
                        
                        </li>
                    ))}
                </ul>
                
                <div className="flex ">
                
      <Web3Button balance="show" icon="hide" label="Connect Wallet" />

                 { <div className = " my-2 px-0 logoutbtn"><LogoutButton   handleLogout={handleLogout}/></div> } 
   
  </div>

                <div onClick={() => setNav(!nav)} className = "cursor-pointer pr-4 z-10 text-yellow-300 md:hidden">
                    {
                        nav ? <FaTimes size = {30} /> : <FaBars size = {30} />
                    }
                </div>

                {nav && (
                    <ul className = " flex flex-col justify-center items-center text-yellow-300 absolute top-0 left-0 w-full h-screen bg-gradient-to-t from-indigo-800 via-indigo-500 to-indigo-300 max-sm:px-1 font-bold">
                    {links.map(({id, link}) => (
                        <li key = {id} className = "px-4 cursor-pointer py-6 text-2xl capitalize">
                            <Link onClick = {() => setNav(!nav)} to={link} smooth duration={5000}>{link}</Link>
                        </li>
                    ))}
                    </ul>
                )}
            </div>
        </>
    );
};

export default Navbar

