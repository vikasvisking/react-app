import React from 'react';
import ChildComponent from './ChildComponent'

class ParentComponent extends React.Component{

    constructor(){
        super()
        this.state = {
            message : 'Parent'
        }
        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(child) {
        alert(`Hello ${this.state.message} from ${child}`)
    }

    render(){
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent} />
            </div>
            
        )
    }
}

export default ParentComponent


