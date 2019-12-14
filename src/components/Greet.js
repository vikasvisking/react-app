import React from 'react'

export const Greet = props => {
	console.log(props);
	return (
			<div>
				<h1> Hello {props.name} i am {props.man} </h1>
				{props.children}
			</div>
		);
}

// export default Greet;