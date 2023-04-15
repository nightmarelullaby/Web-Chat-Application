import styles from "./chatHeaderMenu.module.css"
import BackButton from "@/components/Buttons/BackButton"
import CloseButton from "@/components/Buttons/CloseButton"
import UserDropdown from "@/components/UserDropdown/UserDropdown"
import MiniPopOver from "@/components/MiniPopOver/MiniPopOver"
import {chatBodyState} from "@/atoms/chatBodyState"
import {useRecoilState} from "recoil"
import {useRouter} from "next/router"
import {motion} from "framer-motion"

export default function ChatNavMenu({title="default",description="default"}){
	console.log("from nav mneuuu",title)
	const router = useRouter()
	return(
		<header 
			style={{
				cursor:"pointer",
				backgroundColor:"white",
				padding:"16px",
				boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"}} 
			className={styles.header}>
			<nav>
				<ul style={{display:"flex",alignItems:"center",gap:16}}>

					<li 
						style={{
							margin:"0 auto 0 0",
							display:"flex",
							gap:8,
							alignItems:"center"}}>
					<div>
					<MiniPopOver>
						<h4
							className={styles.headerTitle}
						 	style={{
								fontWeight:700,
								letterSpacing:.9}}>
							{title}
						</h4>
						<div style={{
							display:"flex",
							gap:4,
							alignItems:"center",
							userSelect:"none"}}>
							<svg 
								width="16"
								height="16"	
								xmlns="http://www.w3.org/2000/svg" 
								fill="none" 
								viewBox="0 0 24 24" 
								stroke-width="1.8" 
								stroke="gray" 
								class="w-6 h-6">
  						<path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
					</svg>
					<small style={{color:"gray",fontWeight:400,fontSize:14}}>{description}</small>
					</div>
					</MiniPopOver>						
						</div>

					</li>
					<li>
						<CloseButton action={()=>router.push("/chat-room")}/>
					</li>
				</ul>
			</nav>
		</header>
		)
	
}