import Link from "next/link"
import Button from '@/components/Buttons/Button'
import { useRouter } from "next/router"
import styles from "./Navbar.module.css"
import {motion} from "framer-motion"
import { useState } from "react"
import Little from "../Text/Little"
import Small from "../Text/smallText"
import {Inter} from "@next/font/google"
const inter = Inter({ subsets: ['latin'], 
  variable: '--oxygen-font'})

export function ResponsiveNavbar(){
  const [responsive, setResponsive] = useState(false)
  const router = useRouter()
  return(
    <>
  <header className={styles.navbarResponsive}>
      <nav style={{padding:"16px 16px",boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"}}>
        <ul style={{display:"flex",justifyContent:"space-between",gap:16,listStyle:"none",alignItems:"center"}}>
          <li><Link href="/">UPTJAA</Link></li>
                 <li style={{marginLeft:"auto"}}>
            <Link style={{textDecoration:"none"}} href="/login">
            <Button 
              svg={
                <svg 
                width="12" 
                height="12" 
                fill="none" 
                stroke="white" 
                stroke-width="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path>
                </svg>}
              >
              <small>
                Log in
              </small>
                
            </Button>
            </Link>
            </li>

          <li className={styles.responsiveMenu}>
            <button onClick={() => setResponsive(!responsive)} style={{background:"none",border:"none",cursor:"pointer"}}>
              {responsive ? 
              <svg fill="none" width="32px" height="32px" stroke="rgb(102, 101, 56)" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
              </svg>: 

              <svg fill="none" width="32px" height="32px" stroke="rgb(102, 101, 56)" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
              </svg>}
             
              </button>
          </li>
        </ul>
      </nav>
    </header>
        <div style={{position:"relative"}}>
          <motion.ul 
          className={styles.responsiveMenu}
          transition={{type:"keyframes"}}
          animate={responsive ? {left:"50%"} : {left:"100%"}}
          style={{
            boxShadow:" rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
            left:"100%",
            backgroundColor:"white",
            padding:"16px",
            listStyleType:"none",
            position:"absolute",
            width:"50vw",
            zIndex:100,
            height:"100vh",
            gap:"24px",
            alignItems:"center",
            flexDirection:"column"}}>

          <li>
            <Link href="/about" 
            style={{fontSize:"14px",textDecoration:"none",color:router.asPath === "/about" ? "#5057EE":"#2E2E3D",fontWeight:500}}>
            Sobre la página
            </Link>
          </li>
          <li>
            <Link style={{fontSize:"14px",textDecoration:"none",color:router.asPath === "/dashboard" ? "#5057EE":"#2E2E3D",fontWeight:500}} href="/dashboard">
            Dashboard
            </Link>
          </li>
   
          </motion.ul>
          
        </div>
    </>)
}
export default function Navbar({children}){
  const router = useRouter()
  return(
    <div className={inter.className}>
    <ResponsiveNavbar/>
    <header className={styles.navbar}>
      <nav style={{
        padding:"16px 10rem",
        background:"white",
        boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"}}>
        <ul style={{display:"flex",justifyContent:"space-between",listStyle:"none",alignItems:"center"}}>
        <li><Link href="/">JustTalk</Link></li>
      <div style={{display:"flex",gap:"24px",alignItems:"center"}}>
        <li>
        <Link href="/about" 
          style={{textDecoration:"none",
            color:"black",
            fontWeight:400,
            fontSize:14}}>
            About this app
          </Link>
        </li>
        <li>
          <Link style={{textDecoration:"none"}} href="/login">
        <Button 
          
          svg={
          <svg 
            width="14" 
            height="14"
            fill="none" 
            stroke="white" 
            stroke-width="2.2" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg" 
            aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path>
        </svg>}>            
        <small>
          Log in
        </small>
        </Button>
        </Link></li>
      </div>
        </ul>
      </nav>
    </header>
    </div>
  )
}
