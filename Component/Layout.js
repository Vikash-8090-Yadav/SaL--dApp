import Carousel from "./Carousel";

import Hero from "./v1.0.0/hero/Hero";
import About from "./v1.0.0/about/About";
import Problem from "./v1.0.0/problemsolved/Problem";
import Footer from "./v1.0.0/footer/footer";
import BuyMeCoffee from "./v1.0.0/BuyMeCoffee/BuyMeCoffee";
import Stuck from "./v1.0.0/stuck/Stuck";

export default function Layout({ children }) {

  console.log(children);
  return (
    <>
    <div>
      <div >
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </div>

        <Hero/>   
        <About/> 
        <Problem/>
        <BuyMeCoffee/>
        <Stuck/>
        <Footer/>
      </div>
    </>
  )
}
