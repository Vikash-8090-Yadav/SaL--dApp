import Carousel from "./Carousel";
import SideNavbar from "./SideNavbar";
import AboutApp from "./AboutApp";
import Test from "./Test";
import Contact from "./Contact";
import Footer from "./Footer";
import Mainc from "./mnc";

import GoToTop from "./GoToTop";

export default function Layout({ children }) {
  console.log(children);
  return (
    <>

      <div>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />

      <GoToTop />
      <div >
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />

      </div>

      <div className="pt-14">
        <div className="">
          <Carousel />
        </div>

        <AboutApp />
        <Test />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
