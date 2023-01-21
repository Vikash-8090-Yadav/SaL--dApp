import styles from "../styles/nav.module.css"
import Link from "next/link"
import About from "./about"
export default function   NavM() {
  return (
    <>
    <wrapperM>
        <ul>
            <li><Link href = "/"><a>Home</a></Link></li>
            <li><Link href = "#About"><a>About</a></Link></li>
            <li><Link href = "#Contact"><a>Contact</a></Link></li>
        </ul>
    </wrapperM>
    </>
  )
}
