import Image from "next/image"
import styles from "./ImageWithStatus.module.css"
export default function ImageWithStatus({status="online",src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"}){
	return(
					<div 
					className={styles.popOverImg}
					style={{
						position:"relative",
						
						}}>
						<Image

					style={{
						objectFit:"cover",
						overflow:"hidden",
						borderRadius:100,}}
						fill
						alt="sender"
						quality={100}
						src={src}/>
					<div className={status ==="online" ? styles.status:null}></div>
				</div>
		)
}