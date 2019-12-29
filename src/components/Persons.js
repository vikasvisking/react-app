import React from 'react'

function Persons({person}) {
    return(
        <div>
            <h2>i am {person.name}. My age is {person.age}. I am {person.skills}</h2>
        </div>
    )   
}
export default Persons