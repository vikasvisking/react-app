import React from 'react';

function ChildComponent(props) {

    return(
        <div>
             <button onClick = {() => props.greetHandler('Vikas')}>I am Child</button>
        </div>
       
    )
    
}

export default ChildComponent