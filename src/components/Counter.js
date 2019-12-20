import React from 'react';


class Counter extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
    }


    // single increment
    // increment(){
    //     this.setState({
    //         count: this.state.count + 1
    //     },() => console.log(this.state.count))
    // }

    // multiple incrementor
    increment(){
        this.setState(preState => ({
            count: preState.count + 1
        }),
        // call back function , gives the incremented value async
        () => console.log(this.state.count))
    }

    
    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render(){
        return (
        <div> 
            <h2>Count: {this.state.count}</h2>
            <button onClick={ () => this.incrementFive()}>Increment</button>
            
        </div>
            )
    }
}

export default Counter;
