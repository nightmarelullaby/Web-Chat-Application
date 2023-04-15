export default function H4({children,fontWeight,color}){
    return(
        <h4 style={{color: color ? color:"#2E2E3D",fontSize:"22.65px",fontWeight:fontWeight ? fontWeight :500}}>{children}</h4>
    )
}