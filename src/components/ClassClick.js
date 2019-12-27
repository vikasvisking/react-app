import React from 'react'

class ClassClick extends React.Component{

    ClickedButton(){
        console.log('Button Click Karta hai MC.')

    }

    render(){
        return(
            <div>
                <button onClick={this.ClickedButton}>Click Me Baby</button>
            </div>
        )
    }

}

export default ClassClick;