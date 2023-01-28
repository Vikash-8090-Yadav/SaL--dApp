import React, {useState} from 'react'
import classNames from 'classnames'
import {FaBars, FaTimes} from 'react-icons/fa'
import Link from "next/link"
import Image from "next/image"
import teamwork from "../public/images/Icon/teamwork.png"
import list from "../public/images/Icon/to-do-list.png"
import wallet from "../public/images/Icon/wallet.png"
import salary from "../public/images/Icon/salary.png"
import setting from "../public/images/Icon/setting.png"

const SideNavbar = () => {
  const[toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);
  const wrapperClasses = classNames("h-screen px-4 pt-8 pb-4 bg-white flex justify-between flex-col border border-dashed w-64 border-black",
  {
    ["w-64"]: !toggleCollapse, 
    ["w-20"]: toggleCollapse,
  });

  const collapseIconClasses = classNames("p-4 rounded right-0");

  const getNavItemClasses = classNames("flex items-center cursor-pointer rounded w-full overflow-hidden whitespace-nowrap");

  const onmouseover = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <>
      <div className = {wrapperClasses} onMouseEnter = {onmouseover} onMouseLeave = {onmouseover}>
        <div className = "flex flex-col">
          <div className = "flex items-center pl-1 gap-4">
            <button className = {collapseIconClasses} onClick = {handleSidebarToggle}>
              back
            </button>
          </div>

          <div className = {getNavItemClasses}>
              <Link href = "/emplist">
                <a className = "py-4 px-3 items-center w-full h-full">
                  <Image src = {list} height = "25" width = "30" alt = "" /> 
                  <span>Employee List</span>
                </a>
              </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideNavbar
