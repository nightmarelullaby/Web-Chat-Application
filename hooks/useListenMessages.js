import {useEffect} from "react"
import {socket} from "@/pages/chat-room"

export default function useListenMessages(action){
	useEffect(()=>{
			socket.on('msg:broadcast',action)
			return () => socket.off('msg:broadcast',action)
			//listening to incoming messages//	
	})
	
}