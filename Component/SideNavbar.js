import React, { useState, useEffect } from "react";
import classNames from "classnames";
import {
  MdOutlineDoubleArrow,
  MdPersonAddAlt1,
  MdSettings,
} from "react-icons/md";
import { GiWallet } from "react-icons/gi";
import { FaClipboardList, FaFileInvoiceDollar } from "react-icons/fa";
import { ImBullhorn } from "react-icons/im";
import { IoNewspaper } from "react-icons/io5";
import { RiContactsFill } from "react-icons/ri";
import { useRouter } from "next/router";
import Link from "next/link";
import { NavLink } from "react-router-dom";

const SideNavbar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);

  const [width, setWidth] = useState(0);

  useEffect(() => {
    function watchWidth() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", watchWidth);

    width < 768 ? setToggleCollapse(true) : setToggleCollapse(false);

    return function () {
      window.removeEventListener("resize", watchWidth);
    };
  }, [width]);

  const { pathname } = useRouter();
  const wrapperClasses = classNames(
    "h-screen px-4 pt-8 pb-4 bg-white flex justify-between flex-col w-72",
    {
      ["w-72"]: !toggleCollapse,
      ["w-20"]: toggleCollapse,
    }
  );

  const collapseIconClasses = classNames(
    "p-4 rounded absolute right-0 rotate-180",
    {
      "rotate-0": toggleCollapse,
    }
  );

  const getNavItemClasses = classNames(
    "flex flex-col items-center cursor-pointer rounded w-full overflow-hidden whitespace-nowrap"
  );

  const activeNavItemClasses = classNames("bg-[#eee] rounded-[10px] font-bold");

  const onmouseover = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <>
      <div
        className={wrapperClasses}
        onMouseEnter={onmouseover}
        onMouseLeave={onmouseover}
        style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
      >
        <div className="flex flex-col">
          <div className="flex items-center justify-between relative">
            <button
              className={collapseIconClasses}
              onClick={handleSidebarToggle}
            >
              <MdOutlineDoubleArrow className="display" />
            </button>
          </div>

          <div className="flex flex-col items-start mt-6">
            <div className={getNavItemClasses}>
              {sideBarList.map((list) => (
                <Link href={list.link} key={list.tittle}>
                  <a
                    className={`${
                      pathname === `${list.link}` ? activeNavItemClasses : null
                    } py-4 px-3 items-center w-full h-full`}
                  >
                    {list.icon}
                    <span className="m-5">{list.tittle}</span>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNavbar;

const sideBarList = [
  {
    tittle: "Add Employee",
    link: "/addemp",
    icon: <MdPersonAddAlt1 size={25} style={{ display: "inline-block" }} />,
  },
  {
    tittle: "Employee List",
    link: "/emplist",
    icon: <FaClipboardList size={25} style={{ display: "inline-block" }} />,
  },
  {
    tittle: "Pay Salary",
    link: "/empsal",
    icon: <GiWallet size={25} style={{ display: "inline-block" }} />,
  },
  {
    tittle: "Contract Balance",
    link: "/contractbal",
    icon: <FaFileInvoiceDollar size={25} style={{ display: "inline-block" }} />,
  },
  {
    tittle: "Important Announcement",
    link: "/announcements",
    icon: <ImBullhorn size={25} style={{ display: "inline-block" }} />,
  },
  {
    tittle: "Latest News",
    link: "/latestnews",
    icon: <IoNewspaper size={25} style={{ display: "inline-block" }} />,
  },
  {
    tittle: "Contact Form",
    link: "/",
    icon: <RiContactsFill size={25} style={{ display: "inline-block" }} />,
  },
  {
    tittle: "Settings",
    link: "/",
    icon: <MdSettings size={25} style={{ display: "inline-block" }} />,
  },
];
