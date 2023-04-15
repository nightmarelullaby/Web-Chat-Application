import Image from "next/image"
import styles from "./ChatDM.module.css"
import {chatBodyState} from "@/atoms/chatBodyState"
import {useRecoilState} from "recoil" 

export default function ChatDM({username="default",type="default"}){
	const [name,setName] = useRecoilState(chatBodyState)
	const chatSubtitle = type === "dm" ? `direct messages with ${username}` : type === "group" ? "group":null

	const setChatHeader = ()=>{
		setName({
				chatTitle:username,
				type:type,
				chatSubtitle:chatSubtitle
		})
	}

	return(
			<div 
			onClick={setChatHeader}
			className={styles.main}
			style={{
				display:"flex",
				cursor:"pointer",
				overflowX:"hidden",
				alignItems:"center",
				gap:8,
				padding:"8px",
				borderRadius:6}}>
			     <div style={{
                    position:"relative",
                    width:"32px",
                    height:"32px",
                    borderRadius:100,
                    overflow:"hidden"}}>
                    <Image
                    style={{objectFit:"cover"}}
                        fill
                        alt="dm"
                        quality={100}
                        src="https://engineering.unl.edu/images/staff/Kayla-Person.jpg"/>
            
                </div>
                <p 
                	className={styles.username}
                	style={{fontSize:14,fontWeight:600}}>{username}</p>
                	<svg 
                	style={{marginLeft:"auto"}}
                	width="16"
                	height="16"
                	xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
</svg>




		</div>
		)
}