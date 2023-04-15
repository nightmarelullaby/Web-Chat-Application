export default function H1({children,fontWeight,color}){
    return(
        <h1 style={{color: color ? color:"#2E2E3D",fontSize:"95.9px",fontWeight:fontWeight ? fontWeight :500}}>{children}</h1>
    )
}