import React, {useState} from 'react'
import {Link} from 'react-scroll';
import {FaBars, FaTimes} from 'react-icons/fa'
import { useWeb3Modal, Web3Button, Web3NetworkSwitch } from '@web3modal/react'

const Navbar = () => {
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
            link: "contact",
        },
    ]
    return (
        <>
            <div  className = {navBar ? 'navbar active' : 'navbar'}>
                <h1 className = "text-3xl text-extrabold text-bold text-3xl font-serif ml-2 text-white font-semibold max-sm:text-xl max-sm:ml-0 max-sm:mr-3">Sal-dAPP.eth</h1>

                <ul className = "hidden md:flex text-white">
                    {links.map(({id, link}) => (
                        <li key = {id} className = "px-4 cursor-pointer font-medium md:hover:scale-125 duration-300 capitalize">

                            <Link to={link} smooth duration={50}>{link}</Link>
                        </li>
                    ))}
                </ul>
                
                <Web3Button balance="show" icon="hide" label="Connect Wallet" /> 

                <div onClick={() => setNav(!nav)} className = "cursor-pointer pr-4 z-10 text-white md:hidden">
                    {
                        nav ? <FaTimes size = {30} /> : <FaBars size = {30} />
                    }
                </div>

                {nav && (
                    <ul className = " flex flex-col justify-center items-center text-white absolute top-0 left-0 w-full h-screen bg-gradient-to-br from-[#690a4a] via-[#100e2d] to-[#08624b] max-sm:px-1">
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

