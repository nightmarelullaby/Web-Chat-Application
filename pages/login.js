import Form from "@/components/Form/Form"
import {useRouter } from "next/router"
export default function Login(){
	const router = useRouter()
	
	const handleSubmit = () => {
		return router.push("/chat-room")
	}
	return(
		<div style={{
			height:"100vh",
			display:"flex",
			alignItems:"center",
			justifyContent:"center",
			padding:"8px 8px"}}>
			<Form 
				submit={handleSubmit}
				title="No registration needed."
				subtitle="Enter your nick and a roomname"
				fields={[{type:"text",placeholder:"nickname"},{type:"room",placeholder:"roomname"}]}
				footerLink={{text:"xd",href:"/login"}}
				submitText="enter"
				footerText="wanna have an account?"/>
	</div>)
}