import ChatDM from "@/components/ChatDM/ChatDM"
import { v4 as uuidv4 } from 'uuid';
import Searchbar from "@/components/Searchbar/Searchbar"
import Link from "next/link"

import {useState,useEffect} from "react"

export default function ListOfChats({chatsI}){
	const [chats,setChats] = useState(chatsI)
		
	const filterChats = (e) => {
		e.preventDefault()
		const value = e.target[0].value
		console.log(value)
		const results = chatsI.filter(e => e.name.toLowerCase().includes(value.toLowerCase()))
		setChats(results)
	}

	return(
		<div>

		<Searchbar action={filterChats}/>

		<div style={{
			display:"flex",

			gap:4,
			alignItems:"center",
			marginTop:24}}>
				<svg 
					width="20"
					height="20"
					xmlns="http://www.w3.org/2000/svg" 
					fill="none" viewBox="0 0 24 24" strokeWidth="1.7" stroke="currentColor" class="w-6 h-6">
  				<path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
			</svg>
			<h4 style={{fontWeight:400}}>
				Chats
			</h4>
			</div>
		
		<ul style={{height:320,marginTop:8,display:"flex",overflowY:"scroll",flexDirection:"column",gap:6}}>
				{chats.map(e =>  <Link style={{textDecoration:"none"}} href={`/chat-room/dm/${e.name}?user=${e.name}`}> <li> <ChatDM username={e.name} type={e.type}/> </li> </Link>)}	
		</ul>
		</div>
			)
}