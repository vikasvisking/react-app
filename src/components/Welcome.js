import React from 'react'

export class Welcome extends React.Component{
	render() {
		const { name, man } = this.props
		// const { state1, state2} = this.state
		return (

			<div>
			<h2> Hello i am in class {name} i am {man} </h2>
			{this.props.children}
			</div>

			)
	}
}

