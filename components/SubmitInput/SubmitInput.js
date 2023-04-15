import {socket} from "../../pages/chat-room"
import {motion} from "framer-motion"
import styles from "./SubmitInput.module.css"
import {useState,useEffect} from "react"
import {listOfMessages} from "@/atoms/ListOfMessages"
import {useRecoilState} from "recoil"

export default function SubmitInput(){
	const [listMessages, setListMessages] = useRecoilState(listOfMessages)
	const [inputMessage,setInputMessage] = useState("")
	const [isTyping, setIsTyping] = useState(false)

	useEffect(()=>{
		socket.on('msg:typing', e => handleSetTyping(e))
		return () => socket.off('msg:typing', e => handleSetTyping(e))
	},[])

	const handleSubmit = (e) => {
		e.preventDefault()
		if(inputMessage === "") return;
		setListMessages(prev => [...prev,{content:inputMessage,sender:true}])
		try{
			socket.emit("msg:send",inputMessage)	
		} catch(e){
			console.log(e)
		}
		
		return setInputMessage("")
	}
	//this sends the messages

	const handleSetTyping = (e) => {
		console.log(e)
		setIsTyping(e.status)
		setTimeout(() => setIsTyping(false),5000)
	}

	const handleOnTyping = (e) => {
		setInputMessage(e.target.value)
		return socket.emit("msg:typing",{status:true})
	}
	//this here handles when user types
	return(
		<div style={{position:"relative"}}>
		<motion.div 
			style={{position:"absolute",bottom:"100%",width:"100%"}}
			initial={{opacity:0}}
			animate={isTyping ? {opacity:1,backgroundColor:"white"}:{opacity:0}}
			>
			<small>typing...</small></motion.div>
		<form 
				className={styles.mainForm}
				onSubmit={handleSubmit}>

					<input 
						className={styles.inputMessage}
						type="text" 
						placeholder="Escribe algo..."
						onChange={handleOnTyping}						
						value={inputMessage}/>

					
					<label style={{padding:8,cursor:"pointer"}} htmlFor="photo">
						<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M2.25 15.75L7.40901 10.591C8.28769 9.71231 9.71231 9.71231 10.591 10.591L15.75 15.75M14.25 14.25L15.659 12.841C16.5377 11.9623 17.9623 11.9623 18.841 12.841L21.75 15.75M3.75 19.5H20.25C21.0784 19.5 21.75 18.8284 21.75 18V6C21.75 5.17157 21.0784 4.5 20.25 4.5H3.75C2.92157 4.5 2.25 5.17157 2.25 6V18C2.25 18.8284 2.92157 19.5 3.75 19.5ZM14.25 8.25H14.2575V8.2575H14.25V8.25ZM14.625 8.25C14.625 8.45711 14.4571 8.625 14.25 8.625C14.0429 8.625 13.875 8.45711 13.875 8.25C13.875 8.04289 14.0429 7.875 14.25 7.875C14.4571 7.875 14.625 8.04289 14.625 8.25Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</label>
						<input
						id="photo"
						type="file"
						style={{visibility:"hidden",position:"absolute"}}
						/>

					
					<button className={styles.emojiPicker}>
						<svg 
							width="22"
							height="22"
							xmlns="http://www.w3.org/2000/svg" 
							fill="none" 
							viewBox="0 0 24 24" 
							stroke-width="2" 
							stroke="black" 
							class="w-6 h-6">
	  						<path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
						</svg>

					</button>	
					
					<button 
					className={styles.buttonSend}>
						<svg 
						width="14"
						height="14"
						xmlns="http://www.w3.org/2000/svg" 
						viewBox="0 0 24 24" 
						class="w-6 h-6">
						  <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
						</svg>

					</button>	
			</form>
			</div>
		)
}