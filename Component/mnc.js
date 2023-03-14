import styles from "../styles/nav.module.css"
import Link from "next/link"
import Router, { useRouter } from "next/router"
import AddEmp from "../pages/addemp"
export default function  Mainc({children}) {
  return (
    <>
    <div className=  " main-content">
    <div className="cnt">
    {children}
    </div>
    </div>
    </>
  )
}
