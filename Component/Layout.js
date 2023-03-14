import Carousel from "./Carousel";
import SideNavbar from "./SideNavbar";
import AboutApp from "./AboutApp";
import Test from "./Test";
import Contact from "./Contact";
import Footer from "./Footer";
import Mainc from "./mnc"

export default function Layout({children}) {

  console.log(children);
  return (
    <>
      <div>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </div>
      
      <div className = "">
        <Carousel/> 
         <lms className = "h-screen flex flex-row justify-start"> {/* This lsm stand for the LEFT MAIN  and RIGHT-SIDE*/}
        <SideNavbar />
        <div className = "flex-1 p-4 text-white bg-gray-300">
          <Mainc>{children}</Mainc>
        </div>
      </lms>
    
        <AboutApp />
        <Test />
        <Contact />
        <Footer />
      </div>
    </>
  )
}
