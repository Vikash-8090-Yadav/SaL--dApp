import Link from "next/link"
import Image from "next/image"
import teamwork from "../public/images/Icon/teamwork.png"
import list from "../public/images/Icon/to-do-list.png"
import wallet from "../public/images/Icon/wallet.png"
import salary from "../public/images/Icon/salary.png"
import setting from "../public/images/Icon/setting.png"

export default function  Lefts() {
  return (
    <>
      <div className = "overflow-y-auto py-4 px-3 bg-gray-50 rounded left-sidebar">
        <div className = "imp-link">
          <ul>
            <li className = "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:text-black-500 hover:bg-gray-200">
              <Link href = "/addemp">
                <a>
                  <Image src = {teamwork} height = "25" width = "30" alt = "" className = "m-5" /> Add Employee
                </a>
              </Link>
            </li>

            <li className = "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:text-black hover:bg-gray-200">
              <Link href = "/emplist">
                <a>
                  <Image src = {list} height = "25" width = "30" alt = "" className = "m-5" /> Employee List
                </a>
              </Link>
            </li>
        
            <li className = "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:text-black hover:bg-gray-200">
              <Link href = "/empsal">
                <a> 
                  <Image src = {wallet} height = "25" width = "30" alt = "" className = "m-5" /> Pay Salary
                </a>
              </Link>
            </li>
        
            <li className = "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:text-black hover:bg-gray-200">
              <Link href = "/contractbal">
                <a>
                  <Image src = {salary} height = "25" width = "30" alt = "" className = "m-5" /> Contract Balance
                </a>
              </Link>
            </li>
        
            <li className = "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:text-black hover:bg-gray-200">
              <Link href = "/">
                <a>
                  <Image src = {setting} height = "25" width = "30" alt = "" className = "m-5" /> Settings
                </a>
              </Link>
            </li>
          
            <li className = "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:text-black hover:bg-gray-200">
              <h4>Important Announcement</h4>
            </li>

            <li className = "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:text-black hover:bg-gray-200">
              <h4>Latest News</h4>
            </li>

            <li className = "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:text-black hover:bg-gray-200">
              <h4>Contact Form</h4>
            </li>

          </ul>
        </div>
        
        <div className="feed">
          <p>Having Queries ?</p>
        </div>
      </div>
    </>
  )
}
