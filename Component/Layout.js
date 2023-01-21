
import NavL from "./navL"
import NavM from "./navM"
import NavR from "./navR"
import Lefts from "./lft"
import styles from "../styles/nav.module.css"
import Rights from "./rht"
import Mainc from "./mnc"
import Cat from "./Cool"
import About from "./about"
import Contact from "./contact"
import Footer from "./footer"
import Aboutus from "./testinomial"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
export default function Layout({children}) {

  console.log(children);
  return (
    <>
    <ToastContainer/>
    <headerall className="  h-14 bg-gradient-to-r from-indigo-800 nav ">
    <NavL/>
    <NavM/>
    <NavR/>
    </headerall>
    <Cat/>
    <lms className="container">
    <Lefts/>
    <div  className="mn-cnt">
    <Mainc>{children}</Mainc>
    </div>
    <Rights/>
    </lms>
    {/*
    THis lsm stand for the LEFT MAIN  and RIGHT-SIDE
  */}

    <main className = " mn">
      <About/>
      <Aboutus />
      <Contact/>
         </main>
         <Footer/>
    </>
  )
}
