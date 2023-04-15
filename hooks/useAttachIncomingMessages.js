import {listOfMessages} from "@/atoms/ListOfMessages"
import {useRecoilState} from "recoil"
import { v4 as uuidv4 } from 'uuid';
//id of elements

export default function useAttachIncomingMessages(){
	const [listMessages, setListMessages] = useRecoilState(listOfMessages)

	const attachIncomingMessage = (msg) => {
		//this function attach incoming messages
		return setListMessages(listMessages.concat({content:msg,sender:false,id:uuidv4()}))
	}
	return{listMessages,attachIncomingMessage}
	
}