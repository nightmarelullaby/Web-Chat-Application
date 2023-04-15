import styles from "./ChatBody.module.css"
//styles of component

import {useEffect,useRef} from "react"


import MessageElement from "@/components/MessageElement/MessageElement"
import {memo} from "react"

function ChatBody({listMessages,children}){
	const msgListRef = useRef()
	const msgRef = useRef()
	//ref for ul of messages. Basically to adjust scroll to be always at bottom

	useEffect(()=>{
		let heightBox = msgListRef.current.scrollHeight
		msgListRef.current.scrollTop  = heightBox
		//adjusting the scroll of message box to be always at bottom

	},[listMessages])

	return(
		<div
		ref={msgListRef}
		style={{
			flexDirection:"column",
			flexGrow:1,
			overflowY:"scroll",
			background:"rgb(253 253 253)",}}>
			<ul

				style={{
					display:"flex",
					flexDirection:"column",
					gap:8,
					flexGrow:1,
					padding:"24px 24px 24px 24px"}}>
					{listMessages.map((e,i) => 
					<li ref={msgRef} key={e.id}>
						<MessageElement 
							sender={e.sender} 
							author="Klara" 
							content={e.content}/>
					</li>)}
			</ul>
			{children}
		</div>
		)}

export default memo(ChatBody)