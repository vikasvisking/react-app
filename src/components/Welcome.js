import React from 'react'

export class Welcome extends React.Component{
	render() {
		return (

			<div>
			<h2> Hello i am in class {this.props.name} i am {this.props.man} </h2>
			{this.props.children}
			</div>

			)
	}
}

