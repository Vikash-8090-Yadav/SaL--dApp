import Navbar from "./Navbar"
// import NavL from "./navL"
// import NavM from "./navM"
// import NavR from "./navR"
import Lefts from "./lft"
import SideNavbar from "./SideNavbar"
// import styles from "../styles/nav.module.css"
// import Rights from "./rht"
import Mainc from "./mnc"
import Cat from "./Cool"
import About from "./about"
import Contact from "./contact"
import Footer from "./footer"
import Aboutus from "./testinomial"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
// import ChatwootWidget from './ChatwootWidget'
import GoToTop from "./GoToTop";
import Random from "./Random"
export default function Layout({children}) {

  console.log(children);
  return (
    <>
      <GoToTop/>
      <Random/>
      {/* <headerall className = ""> */}
        {/* <NavL/> */}
        {/* <NavM/> */}
        {/* <NavR/> */}
      {/* </headerall> */}

      <Cat/>

      <lms className = "h-screen flex flex-row justify-start"> {/* This lsm stand for the LEFT MAIN  and RIGHT-SIDE*/}
        {/* <Lefts/> */}
        <SideNavbar />
        <div className = "flex-1 p-4 text-white bg-black border-1 border-dashed">
          <Mainc>{children}</Mainc>
        </div>
        {/* <Rights/> */}
      </lms>
    
      <main className = "mn">
        <About/>
        <Aboutus />
        <Contact/>
      </main>
      <Footer/>
    </>
  )
}
