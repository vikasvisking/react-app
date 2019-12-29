import React from 'react'
import Persons from './Persons'

function NameList() {

    // Lists
    // const Names = ['Bruce', 'Vikas', '121raj']
    // const NamesList =  Names.map(name => <h2>{name}</h2>)

    // objects
    const Person = [
        {
            name: 'Vikas',
            age: 23,
            skills : "i am Hero"
        },
        {
            name: 'Passi',
            age: 23,
            skills : "i am man"
        },
        {
            name: 'Heer',
            age: 23,
            skills : "i am Women"
        }
    ]
    const PersonList = Person.map(person => <Persons person={person} />)
    return(
        <div> {PersonList} </div>
        
    )  
}

export default NameList