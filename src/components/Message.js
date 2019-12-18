import React from 'react';

class Message extends React.Component{

    constructor(){
        super()
        this.state = {
            message: "Hello Visitor"
        }
    }

    ChangeMessage(){
        this.setState({
            message: 'Thanks For Subscribing'
        })
    }

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