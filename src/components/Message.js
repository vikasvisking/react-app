import React from 'react';

class Message extends React.Component{

    // constructor to init state
    constructor(){
        super()
        this.state = {
            message: "Hello Visitor"
        }
    }

    // Function to change the state
    ChangeMessage(){
        this.setState({
            message: 'Thanks For Subscribing'
        })
    }

    // render the JSX
    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick= { () => this.ChangeMessage() }>Subscribe Now</button>
            </div>
        )
    }
}

export default Message;