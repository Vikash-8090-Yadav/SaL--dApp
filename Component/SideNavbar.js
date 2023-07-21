import React, {useState} from 'react'
import classNames from 'classnames'
import {MdOutlineDoubleArrow, MdPersonAddAlt1, MdSettings} from 'react-icons/md'
import {GiWallet} from 'react-icons/gi'
import {FaClipboardList,FaFileInvoiceDollar} from 'react-icons/fa'
import {ImBullhorn} from 'react-icons/im'
import {IoNewspaper} from 'react-icons/io5'
import {RiContactsFill} from 'react-icons/ri'
import { useRouter } from 'next/router'
import Link from "next/link"

const SideNavbar = () => { 
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);
  const { pathname } = useRouter();
  const wrapperClasses = classNames("h-screen px-4 pt-8 pb-4 bg-white flex justify-between flex-col w-72",
  {
    ["w-72"]: !toggleCollapse, 
    ["w-20"]: toggleCollapse,
  });

  const collapseIconClasses = classNames("p-4 rounded absolute right-0 rotate-180", {
    "rotate-0": toggleCollapse,
  });

  const getNavItemClasses = classNames("flex flex-col items-center cursor-pointer rounded w-full overflow-hidden whitespace-nowrap");

  const activeNavItemClasses = classNames("bg-[#eee] rounded-[10px] font-bold")

  const onmouseover = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <>
      <div className = {wrapperClasses} onMouseEnter = {onmouseover} onMouseLeave = {onmouseover} style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}>
        <div className = "flex flex-col">
          <div className = "flex items-center justify-between relative">
            <button className = {collapseIconClasses} onClick = {handleSidebarToggle}>
              <MdOutlineDoubleArrow className = "display" />
            </button>
          </div>

          <div className="flex flex-col items-start mt-6">
          <div className = {getNavItemClasses}>
          
            <Link href = "/addemp#lms">
              <a className = {`${pathname === "/addemp" ? activeNavItemClasses : null} py-4 px-3 items-center w-full h-full`}>
                <MdPersonAddAlt1 size={25} style={{display: "inline-block"}}/>
                <span className = "m-5 max-sm:hidden">Add Employee</span>
              </a>
            </Link>
              
            <Link href = "/emplist#lms">
              <a className = {`${pathname === "/emplist" ? activeNavItemClasses : null} py-4 px-3 items-center w-full h-full`}>
                <FaClipboardList size={25} style={{display: "inline-block"}}/>
                <span className = "m-5 max-sm:hidden">Employee List</span>
              </a>
            </Link>

            <Link href = "/empsal#lms">
              <a className = {`${pathname === "/empsal" ? activeNavItemClasses : null} py-4 px-3 items-center w-full h-full`}> 
                <GiWallet size={25} style={{display: "inline-block"}}/>
                <span className = "m-5 max-sm:hidden">Pay Salary</span>
              </a>
            </Link>

            <Link href = "/contractbal#lms">
              <a className = {`${pathname === "/contractbal" ? activeNavItemClasses : null} py-4 px-3 items-center w-full h-full`}>
                <FaFileInvoiceDollar size={25} style={{display: "inline-block"}}/>
                <span className = "m-5 max-sm:hidden">Contract Balance</span>
              </a>
            </Link>

            <Link href = "/#lms">
              <a className = {`${pathname === "/announcements" ? activeNavItemClasses : null} py-4 px-3 items-center w-full h-full`}>
                <ImBullhorn size={25} style={{display: "inline-block"}}/>
                <span className = "m-5 max-sm:hidden">Important Announcement</span>
              </a>
            </Link>

            <Link href = "/#lms">
              <a className = {`${pathname === "/latestnews" ? activeNavItemClasses : null} py-4 px-3 items-center w-full h-full`}>
                <IoNewspaper size={25} style={{display: "inline-block"}}/>
                <span className = "m-5 max-sm:hidden">Latest News</span>
              </a>
            </Link>

            <Link href = "/#lms">
              <a className = {`${pathname === "/contactform" ? activeNavItemClasses : null} py-4 px-3 items-center w-full h-full`}>
                <RiContactsFill size={25} style={{display: "inline-block"}}/>
                <span className = "m-5 max-sm:hidden">Contact Form</span>
              </a>
            </Link>

            <Link href = "/#lms">
              <a className = {`${pathname === "/settings" ? activeNavItemClasses : null} py-4 px-3 items-center w-full h-full`}>
                <MdSettings size={25} style={{display: "inline-block"}}/>
                <span className = "m-5 max-sm:hidden">Settings</span>
              </a>
            </Link>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideNavbar
