import {io} from "socket.io-client"
export const socket = io('http://localhost:3004')
//socket io client

import ChatSidebar from "@/components/ChatSidebar/ChatSidebar"
import ChatNavMenu from "@/components/chatHeaderMenu/chatHeaderMenu"
import ChatBody from "@/components/ChatBody/ChatBody"
import NoChat from "@/components/NoChat/NoChat"
import SidebarLayout from "@/components/Layouts/SidebarLayout"
import {chatBodyState} from "@/atoms/chatBodyState"
import Head from "next/head"
import {RecoilRoot,useRecoilValue} from "recoil"
import {useRouter} from "next/router"
import SubmitInput from "@/components/SubmitInput/SubmitInput"
import useAttachIncomingMessages from "@/hooks/useAttachIncomingMessages.js"
import useListenMessages from "@/hooks/useListenMessages.js"

export default function Id(){

  const {listMessages,attachIncomingMessage} = useAttachIncomingMessages()
  const listenMessages = useListenMessages(attachIncomingMessage)

  const router = useRouter()
  const {chatTitle} = useRecoilValue(chatBodyState)

  return(<>
   
      <Head>
        <title>{router.query.user}</title>
        <meta name="Chat-room" content="chat-room page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />       
      </Head>
      <main style={{flexGrow:1,alignSelf:"center",height:"100vh"}}>
          <div style={{display:"flex",flexGrow:1,flexDirection:"column",gap:1,height:"100%"}}>
              <ChatNavMenu title={router.query.user} />
              <ChatBody listMessages={listMessages}/>
              <SubmitInput/>
          </div>
    </main>
    </>
)}
Id.getLayout = function getLayout(page) {
  return (
    <RecoilRoot>
      <SidebarLayout>
        {page}
      </SidebarLayout>
    </RecoilRoot>
  )
}


