import styles from "./MessageElement.module.css"
import Image from "next/image"
import PopOver from "@/components/PopOver/PopOver"
import PopOverContent from "@/components/PopOver/PopOverContent";
import PopOverTrigger from "@/components/PopOver/PopOverTrigger";
import {usePopOverState} from "@/components/PopOver/PopOver"
import ImageWithStatus from "@/components/ImageWithStatus/ImageWithStatus"
import {memo} from "react";
import AddButton from "@/components/Buttons/AddButton"
import dynamic from "next/dynamic"

export const PopOverContentDynamic = dynamic(()=> import("../PopOver/PopOverContent"),{
	ssr:false
})

function MessageElement({
	content,
	sender,
	author}){

	const {popOverState,switchState,setFalse,setTrue} = usePopOverState()

	return(
		<>
			{sender ? 

			<div className={styles.list}>
				
			<div style={{
				display:"flex",
				gap:8,
				width:"100%",
				alignItems:"flex-end"}}>
			<div style={{width:"100%",display:"flex",flexDirection:"column",gap:8}}>
			<div 
						style={{
							display:"flex",
							justifyContent:"flex-end",
							alignItems:"center",gap:8,
							
						}}>
						<p style={{
							fontWeight:600,
							fontSize:13,
							color:"#51516e"}}>{author}</p>
						<small 
							style={{
								fontSize:10,
								textTransform:"uppercase",
								color:"gray",
								letterSpacing:1,
								fontWeight:400}}>22:22p.m</small>
					</div>
				<span className={styles.main}>
					<p 
						className={styles.messageContent} 
						style={{fontSize:14,color:"#4d6781",fontWeight:600,wordBreak:"break-all"}}>{content}</p>
				</span>
			</div>

			<PopOver>

				<PopOverTrigger>
						<div style={{
							position:"relative",
							width:"32px",
							height:"32px",
							borderRadius:100,
							overflow:"hidden"}}>
					
						<Image
							style={{objectFit:"cover"}}
							fill
							alt="sender"
							quality={100}
							src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"/>
						</div>
				</PopOverTrigger>

				
				<PopOverContent>
					<div style={{padding:16}}>
						<div 
						className={styles.fColumn}
						style={{display:"flex",gap:8,alignItems:"center"}}>
	
						<ImageWithStatus/>

						<div>
							<p style={{fontWeight:600,fontSize:14,whiteSpace:"nowrap"}}>Some random Name</p>
							<small style={{
								color:"gray",
								fontWeight:400,
								whiteSpace:"nowrap",
								fontSize:12}}>Front End Developer</small>
						</div>
					</div>
						<div style={{marginTop:16}}>
							<AddButton 
								svgInitial={
										<svg width="14" height="14" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
											<path d="M4.5 12.75L10.5 18.75L19.5 5.25"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
										</svg>}
								svgPressed={
										<svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M19 7.5V10.5M19 10.5V13.5M19 10.5H22M19 10.5H16M13.75 6.375C13.75 8.23896 12.239 9.75 10.375 9.75C8.51104 9.75 7 8.23896 7 6.375C7 4.51104 8.51104 3 10.375 3C12.239 3 13.75 4.51104 13.75 6.375ZM4.00092 19.2343C4.00031 19.198 4 19.1615 4 19.125C4 15.6042 6.85418 12.75 10.375 12.75C13.8958 12.75 16.75 15.6042 16.75 19.125V19.1276C16.75 19.1632 16.7497 19.1988 16.7491 19.2343C14.8874 20.3552 12.7065 21 10.375 21C8.04353 21 5.86264 20.3552 4.00092 19.2343Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
										</svg>}
								initial={"Add to friends"} 
								pressed={"Submited"}/>
						</div>

						
						<hr style={{width:"100%",margin:"16px 0",backgroundColor:"lightgray",height:"1px",border:"none"}}/>
						<p style={{fontSize:12,color:"gray"}}>Some random description blah blah blah</p>
					</div>
				</PopOverContent>
			</PopOver>
			</div>
						
				
				
			</div> : 
			<div>

						<div style={{
				display:"flex",
				gap:8,
				width:"100%",
				alignItems:"flex-end"}}>

				<PopOver position="right">
					<div style={{
						position:"relative",
						width:"32px",
						height:"32px",
						borderRadius:100,
						overflow:"hidden"}}>
						
							<Image
						style={{objectFit:"cover"}}
							fill
							alt="sender"
							quality={100}
							src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"/>
					</div>
				</PopOver>
			<div 
				style={{
					width:"100%",
					display:"flex",	
					flexDirection:"column",
					gap:8}}>
			<div 
						style={{
							display:"flex",
							justifyContent:"flex-start",
							alignItems:"center",gap:8,
							
						}}>
						<p style={{
							fontWeight:600,
							fontSize:13,
							color:"black"}}>NightmareLullaby</p>
						<small 
							style={{
								fontSize:10,
								textTransform:"uppercase",
								color:"gray",
								fontWeight:400}}>22:09 a.m</small>
					</div>
				<span className={styles.mainSender}>
					<p style={{color:"#4d6781",fontSize:14,fontFamily:"Ubuntu"}}>{content}</p>
				</span>
			</div>
				
			</div>			</div>}
		</>
		
	)
}

export default memo(MessageElement)