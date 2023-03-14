<<<<<<< HEAD
import React, {useState} from 'react'
import {Link} from 'react-scroll';
import {AiFillHome} from 'react-icons/ai'
import {FaDatabase} from 'react-icons/fa';
import {FcAbout} from 'react-icons/fc'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {Web3Button} from '@web3modal/react';
import LogoutButton from "../Component/LogoutButton"
import SalDappLogo from "../public/images/sal-Dapp.png"
import Image from "next/image"

const Navbar = ({ handleLogout }) => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "Home",
      child: (
        <>
          <AiFillHome size = {25} />
        </>
      ),
      name: "Home",
    },
    {
      id: 2,
      link: "cards",
      child: (
        <>
          <FaDatabase size = {25} />
        </>
      ),
      name: "Data",
    },
    {
      id: 3,
      link: "About",
      child: (
        <>
          <FcAbout size = {25} />
        </>
      ),
      name: "About",
    },
    {
      id: 4,
      link: "contact",
      child: (
        <>
          <BsFillTelephoneFill size = {25} />
        </>
      ),
      name: "Support Me"
    },
  ]

  return (
    <>
      <div className = 'navbar bg-white m-0 flex justify-between items-center min-w-full overflow-hidden h-12 py-0 px-4 text-blue-500 fixed z-50'>
        <div className = "flex">
          <div className = "w-10 h-10 pt-1">
            <Image className = "rounded-full" src = {SalDappLogo} height = "30" width = "30" alt = ""/>
          </div>
          <h1 className = "text-2xl font-extrabold text-blue-500 ml-2 max-md:text-base max-sm:ml-1 max-md:mr-3 font-title max-md:pt-2 pt-1">DAPP.eth</h1>
        </div>

        <ul className = "hidden md:flex text-blue-500">
          {links.map(({id, link, name}) => (
            <li key = {id} className = "px-4 cursor-pointer md:hover:scale-125 duration-300 capitalize text-xl font-bold">
              {link === 'Logout' ? 
                <a className = "hidden" onClick={handleLogout}>{link}</a> : 
                <Link to={link} smooth duration={50}>{name}</Link>
              }        
            </li>
          ))}
        </ul>

        <ul className = "md:hidden flex font-extrabold text-xl text-blue-500">
          {
            links.map(({id, link, child}) => (
              <li key = {id} className = "px-4 cursor-pointer py-6 text-2xl capitalize max-sm:px-1">
                <Link onClick = {() => setNav(!nav)} to={link} smooth duration={5000}>{child}</Link>
              </li>
            ))
          }
        </ul>

        <div className="flex ">    
          <button className = "pl-8 py-4 text-xl font-bold">  
            <Web3Button balance="show" icon="hide" label="Connect Wallet" />
          </button>
          {/* { 
            <div className = "py-2 px-3 m-2 rounded-lg text-white bg-blue-500 font-bold max-sm:p-1 max-sm:m-1">
              <LogoutButton handleLogout={handleLogout}/>
            </div> 
          }  */}
        </div>
      </div>
    </>
  );
};

export default Navbar

=======
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
        <div className = {navBar ? 'navbar active' : 'navbar'}>
          <div className = "flex">
            <Image className = "rounded-full ml-2" src = {SalDappLogo} height = "0" width = "39" alt = ""/>
            <h1 className = "text-3xl text-extrabold text-bold font-serif ml-2 text-white font-semibold max-sm:text-xl max-sm:ml-0 max-sm:mr-3 ">DAPP.eth</h1>
          </div>

          <ul className = "hidden md:flex text-yellow-300">
            {links.map(({id, link}) => (
              <li key = {id} className = "px-4 cursor-pointer md:hover:scale-125 duration-300 capitalize text-xl font-bold">
                {link === 'Logout' ? 
                  <a className = "hidden text-white" onClick={handleLogout}>{link}</a> : <Link to={link} smooth duration={50}>{link}</Link>
                }        
              </li>
            ))}
          </ul>
                
          <div className="flex ">      
            <Web3Button balance="show" icon="hide" label="Connect Wallet" />
              { 
                <div className = "py-1 pl-5 px-2 my-2">
                  <LogoutButton handleLogout={handleLogout}/>
                </div> 
              } 
          </div>

          <div onClick={() => setNav(!nav)} className = "cursor-pointer pr-4 z-10 text-yellow-300 md:hidden">
            {
              nav ? <FaTimes size = {30} /> : <FaBars size = {30} />
            }
          </div>

          {nav && (
            <ul className = " flex flex-col justify-center items-center text-yellow-300 absolute top-0 left-0 w-full h-screen bg-gradient-to-t from-indigo-800 via-indigo-500 to-indigo-300 max-sm:px-1 font-bold">
              {
                links.map(({id, link}) => (
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

>>>>>>> 8fd5f7d792b3c968a561617eed41a3d1a4ed4e21
