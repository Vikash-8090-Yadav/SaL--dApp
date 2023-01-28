import { dividerClasses } from "@mui/material";
import Image from "next/image"
import hero from "../images/2.png";
export default function  Cat() {
  return(
    <div  id ="Home" className="hero">
    <Image src ={hero} width ={4000} height = {1300}

    />
    </div>
  )
}
