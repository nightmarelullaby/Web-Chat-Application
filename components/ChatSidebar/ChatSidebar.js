import UserDropdown from "@/components/UserDropdown/UserDropdown"
import UserDropdownElement from "@/components/UserDropdown/UserDropdownElement"
import Button from "@/components/Buttons/Button"
import BackButton from "@/components/Buttons/BackButton"
import ChatDM from "@/components/ChatDM/ChatDM"
import styles from "./ChatSidebar.module.css"
import dynamic from "next/dynamic"
import ListOfChats from "@/components/ListOfChats/ListOfChats"
import {RecoilRoot,useRecoilValue} from "recoil"
import Link from "next/link"

import PopOver from "@/components/PopOver/PopOver"
import PopOverContent from "@/components/PopOver/PopOverContent";
import PopOverTrigger from "@/components/PopOver/PopOverTrigger";
import {usePopOverState} from "@/components/PopOver/PopOver"

import {chatBodyState} from "@/atoms/chatBodyState"
import {useRouter} from "next/router"

const chats = [
	{name:"Clara Gutierrez",type:"dm"},
	{name:"Verónica De la Torre",type:"dm"},
	{name:"Clara Gutierrez",type:"dm"},
	{name:"María Guadalupe",type:"dm"},
	{name:"Teresa Martinez",type:"dm"},
	{name:"Juan Joputa",type:"dm"},
	{name:"Elian Camastron",type:"dm"},
	{name:"Elian Camastron",type:"dm"},
	
	]
export const UserDropdownDynamic = dynamic(()=> import("@/components/UserDropdown/UserDropdown"),{
	loading:()=><p>loading</p>,
	ssr:false
})
export default function ChatSidebar(){

	const {popOverState,switchState,setFalse,setTrue} = usePopOverState()
	const router = useRouter()
	const state = useRecoilValue(chatBodyState)
	return(
		<div 
			className={styles.main}>
			<div>
				<Button customStyle={{width:"100%",display:"inline-flex",alignItems:"center",justifyContent:"center"}}>
					<span style={{fontSize:14,fontWeight:600}}>
						add friend
					</span>	
					<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 7.5V10.5M19 10.5V13.5M19 10.5H22M19 10.5H16M13.75 6.375C13.75 8.23896 12.239 9.75 10.375 9.75C8.51104 9.75 7 8.23896 7 6.375C7 4.51104 8.51104 3 10.375 3C12.239 3 13.75 4.51104 13.75 6.375ZM4.00092 19.2343C4.00031 19.198 4 19.1615 4 19.125C4 15.6042 6.85418 12.75 10.375 12.75C13.8958 12.75 16.75 15.6042 16.75 19.125V19.1276C16.75 19.1632 16.7497 19.1988 16.7491 19.2343C14.8874 20.3552 12.7065 21 10.375 21C8.04353 21 5.86264 20.3552 4.00092 19.2343Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


				</Button>	
			</div>
			
		
			<div style={{
				display:"flex",
				gap:4,
				alignItems:"center",
				marginTop:24,width:"100%"}}>
				<ListOfChats chatsI={chats}/>
			
			</div>
				
			

	<div style={{marginTop:"auto"}}>
				<PopOver position="right">

				<PopOverTrigger>
					<UserDropdown 
						title="Configuration" 
						subTitle=""
						svg={<svg width="20"height="20"xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
	  							<path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
	  							<path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
							</svg>}>
					</UserDropdown>	
				</PopOverTrigger>

				<PopOverContent position={"right"}>
									<UserDropdownElement>
				
										 <svg width="16" height="16"
					                                xmlns="http://www.w3.org/2000/svg" 
					                                fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" class="w-6 h-6">
					                                <path stroke-linecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
					                                <path stroke-linecap="round" strokeLinejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008z" />
					                            </svg>
				
					                            <small style={{whiteSpace:"nowrap"}} className={styles.textOption}>
					                                Adjust font size
					                            </small>
									</UserDropdownElement>
									<UserDropdownElement>
										 <svg 		width="16" height="16"
					                                xmlns="http://www.w3.org/2000/svg" 
					                                fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" class="w-6 h-6">
					                                <path stroke-linecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
					                                <path stroke-linecap="round" strokeLinejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008z" />
					                            </svg>
				
					                            <small style={{whiteSpace:"nowrap"}} className={styles.textOption}>
					                                Change background
					                            </small>
									</UserDropdownElement>		
								</PopOverContent>
				</PopOver>
				
			</div>
			

			<div style={{marginTop:8}}>
			<PopOver>

				<PopOverTrigger>
					<UserDropdown/>	
				</PopOverTrigger>

				<PopOverContent position="right">
					<UserDropdownElement>
							 <svg 
								 	width="16"
								 	height="16"
		                            xmlns="http://www.w3.org/2000/svg" 
		                            fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" class="w-6 h-6">
		                        <path stroke-linecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
		                        <path stroke-linecap="round" strokeLinejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008z" />
		                    </svg>

		                            <small 
		                            	style={{whiteSpace:"nowrap"}}	
		                            	className={styles.textOption}>
		                                	Change name
		                            </small>
						</UserDropdownElement>

						<UserDropdownElement>
							 <svg 
							 							 	width="16"
								 	height="16"
		                            xmlns="http://www.w3.org/2000/svg" 
		                            fill="none" viewBox="0 0 24 24" 
		                            stroke-width="1.5" 
		                            stroke="currentColor" class="w-6 h-6">
		                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
		                            </svg>

		                            <small 
		                            	style={{whiteSpace:"nowrap"}}
		                                className={styles.textOption}>
		                                Theme
		                            </small>
						</UserDropdownElement>

							<UserDropdownElement>
								<svg 
									width="16"
								 	height="16"
								 	xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
			                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
			                    </svg>
			                            
			                           
			                    <small 
									style={{whiteSpace:"nowrap"}}
			                    	className={styles.textOption}> 
			                        	Log out
			                    </small>
			                            
			                            
							</UserDropdownElement>
				</PopOverContent>
			</PopOver>			
			</div>
			
			
		</div>
		)
}