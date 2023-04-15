import Image from "next/image"
import styles from "./Form.module.css"
import { useState,useRef,useEffect } from "react"
import BackButton from "@/components/Buttons/BackButton"
import Button from "@/components/Buttons/Button"
import Link from "next/link"
import H2 from "../Text/h2"
import H4 from "../Text/h4"
import {useRouter} from "next/router"
import H3 from "../Text/h3"
import Paragraph from "../Text/paragraph"
import Little from "../Text/Little"
import Small from "../Text/smallText"


export default function Form ({
  submit=null,
  title = "default",
  subtitle= "default",
  fields = [],
  submitText = "default",
  footerText = "default",
  lenght = null,
  footerLink = "default",
  image="default"}){
  const router = useRouter()

  const handleBack = ()=>{
    router.back()
  }
  return(
 <>
  
    <div className={styles.mainContainer}>
    <div style={{marginBottom:24}}>
    <BackButton action={handleBack}/>    
    </div>
    
        <div className={styles.formContainer}>
     


      <form action="#" onSubmit={(e)=> {
        e.preventDefault()
        submit(e)}} 
        className={styles.form}>
        <div style={{margin:"auto 0"}}>
          <div className={styles.formHeader}>
        
        <div style={{margin:"0 auto 0 auto"}}>
          <H3 fontWeight={800}>{title}</H3>
          <Paragraph fontWeight={300}>{subtitle}</Paragraph>
        </div>
      </div>

        <div style={{display:"flex",flexDirection:"column",gap:8,flexGrow:1}}>
        {fields.map(e => 
        <div key={e.placeholder}>
          <label 
           key={e.placeholder}
          style={{
            display:"flex",
            flexDirection:"column",
            gap:4}}>
          <Little 
            textTransform={"uppercase"}
            fontWeight={500}>
            {e.label}
          </Little>
          <input 
          minLength={e.length !== null ? e.length : null}
          required={e.required}
          name={e.id}
          placeholder={e.placeholder} 
          className={styles.inputText} 
          type={e.type}/>
          </label>
        </div>
          )}

       
        </div>
        </div>
         
        <div className={styles.buttonSubmit}>
         <div className={styles.registrationSection} >
          <Little>{footerText} <Link href={footerLink.href ? footerLink.href : "/"}> {footerLink.text}</Link>
          </Little>
        </div>
          <Button
            customStyle={{
              width:"100%",
              padding:"10px 16px",}}>
              <small>
                {submitText}
              </small>
          </Button>

        </div>
          </form>
        </div>
        {image === "default" ? null : 
           <div className={styles.imgContainer} >
              <Image alt="login" style={{order:1, height:"100%"}} src={image} fill/>
            </div>}

  </div>
 
 </>)
}
