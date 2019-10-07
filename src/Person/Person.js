import React from 'react'

export const Person = props => {
    return (
        <div>
            <p onClick={props.click}>
                I'm a Person named {props.name} and aged {props.age}!
            </p>
            <p>
                {props.children}
            </p>
            <input type="text" onChange={props.nameChangeHandler} value={props.name}/>
        </div>

    )
}


