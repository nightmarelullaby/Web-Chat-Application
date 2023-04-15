import {useEffect} from "react"

export default function useAlwaysAtBottom(ref,dependencies){
	console.log(ref.current.scrollHeight)
	// let heightBox = ref.current.scrollHeight

	// useEffect(()=>{	
	// 	ref.current.scrollTop  = heightBox
	// 	//adjusting the scroll of message box to be always at bottom
	// },[dependencies])
}