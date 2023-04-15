export default function Hoc(Component,data){
	return function(){
		return(
			<>
				<p>
					Below is your component, and here is your data: {data}
				</p>
				{Component}
			</>)
	}
}