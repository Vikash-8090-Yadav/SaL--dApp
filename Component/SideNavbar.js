import React, {useState} from 'react'
import classNames from 'classnames'
import {MdOutlineDoubleArrow} from 'react-icons/md'
import Link from "next/link"
import Image from "next/image"
import teamwork from "../public/images/Icon/teamwork.png"
import list from "../public/images/Icon/to-do-list.png"
import wallet from "../public/images/Icon/wallet.png"
import salary from "../public/images/Icon/salary.png"
import settings from "../public/images/Icon/setting.png"

const SideNavbar = () => { 
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);
  const wrapperClasses = classNames("h-screen px-4 pt-8 pb-4 bg-white flex justify-between flex-col w-72",
  {
    ["w-72"]: !toggleCollapse, 
    ["w-20"]: toggleCollapse,
  });

  const collapseIconClasses = classNames("p-4 rounded absolute right-0", {
    "rotate-180": toggleCollapse,
  });

  const getNavItemClasses = classNames("flex flex-col items-center cursor-pointer rounded w-full overflow-hidden whitespace-nowrap");

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
          
            <Link href = "/addemp">
              <a className = "py-4 px-3 items-center w-full h-full">
                <Image src = {teamwork} height = "25" width = "30" alt = ""/> 
                <span className = "m-5 font-bold text-lg">Add Employee</span>
              </a>
            </Link>
              
            <Link href = "/emplist">
              <a className = "py-4 px-3 items-center w-full h-full">
                <Image src = {list} height = "25" width = "30" alt = ""/> 
                  <span className = "m-5 max-sm:hidden">Employee List</span>
              </a>
            </Link>

            <Link href = "/empsal">
              <a className = "py-4 px-3 items-center w-full h-full"> 
                <Image src = {wallet} height = "25" width = "30" alt = ""/> 
                <span className = "m-5 max-sm:hidden">Pay Salary</span>
              </a>
            </Link>

            <Link href = "/contractbal">
              <a className = "py-4 px-3 items-center w-full h-full">
                <Image src = {salary} height = "25" width = "30" alt = ""/> 
                <span className = "m-5 max-sm:hidden">Contract Balance</span>
              </a>
            </Link>

            <Link href = "/">
              <a className = "py-4 px-3 items-center w-full h-full">
                <Image src = {settings} height = "25" width = "30" alt = ""/> 
                <span className = "m-5 max-sm:hidden">Important Announcement</span>
              </a>
            </Link>

            <Link href = "/">
              <a className = "py-4 px-3 items-center w-full h-full">
                <Image src = {settings} height = "25" width = "30" alt = ""/> 
                <span className = "m-5 max-sm:hidden">Latest News</span>
              </a>
            </Link>

            <Link href = "/">
              <a className = "py-4 px-3 items-center w-full h-full">
                <Image src = {settings} height = "25" width = "30" alt = ""/> 
                <span className = "m-5 max-sm:hidden">Contact Form</span>
              </a>
            </Link>

            <Link href = "/">
              <a className = "py-4 px-3 items-center w-full h-full">
                <Image src = {settings} height = "25" width = "30" alt = ""/> 
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
