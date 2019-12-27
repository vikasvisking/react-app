import React from 'react';

class EventBinding extends React.Component{

    constructor(){
        super()
        this.state = {
            message : "Thanks For Click"
        }
        this.clickEvent = this.clickEvent.bind(this)
    }

    // clickEvent(){
    //     this.setState({
    //         message : "Button is clicked"
    //     })
    //     console.log(this)
    // }

    clickEvent = () => {
        this.setState({
            message: "Button Click krta MAi mc"
        })
    }

    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>

                {/* Using Bind First approch */}
                {/* <button onClick={this.clickEvent.bind(this)}>Click Me</button> */}

                {/* using arrow function */}
                {/* <button onClick={() => this.clickEvent()}>Click Me</button> */}

                {/* using bind in constuctr */}
                {/* <button onClick={this.clickEvent}>Click Me</button> */}
                
                {/* Using arrow function for event */}
                 <button onClick={this.clickEvent}>Click Me</button>
            </div>
        )
    }

}

export default EventBinding;