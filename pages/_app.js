
import '@/styles/globals.css'
import {Inter} from "@next/font/google"
import {RecoilRoot} from "recoil"

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--oxygen-font',
weight:['100','200','300','400','500','600','700','800','900']}
  )

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
    <RecoilRoot>
      <Component {...pageProps} />  
  </RecoilRoot>) }
