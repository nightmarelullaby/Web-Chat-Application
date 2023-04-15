export default function Little({textTransform,children,fontWeight,color,letterSpacing}){
    return(
        <small 
            style={{
                letterSpacing:letterSpacing ? letterSpacing : null,
                color: color ? color:"#707070",
                fontSize:"12px",
                fontWeight:fontWeight ? fontWeight :500,
                textTransform:textTransform ? textTransform : null}}>
                    {children}
        </small>
    )
}