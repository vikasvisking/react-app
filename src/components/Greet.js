import React from 'react'

// Destructing of Props 

// Methord 1
// export const Greet = ({name ,man}) => {
// 	return (
// 			<div>
// 				<h1> Hello {name} i am {man} </h1>
// 				{/* {props.children} */}
// 			</div>
// 		);
// }



// Mehtord 2
export const Greet = (props) => {

	const { name,man} = props
	return (
			<div>
				<h1> Hello {name} i am {man} </h1>
				{/* {props.children} */}
			</div>
		);
}

// export default Greet;