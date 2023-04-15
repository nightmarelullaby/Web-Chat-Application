import ChatSidebar from "@/components/ChatSidebar/ChatSidebar"

export default function SidebarLayout({children}){
	return(
		<div style={{display:"flex",gap:1,height:"100vh"}}>
			<ChatSidebar/>
			<div style={{width:250}}></div>
			{children}
		</div>
		)
}