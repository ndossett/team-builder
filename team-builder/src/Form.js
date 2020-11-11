import React from 'react'

export default function Form(props){
    const { details } = props

    if (!details){
        return <h3>Working on fetching your member's details</h3>
    }

    return (
        <div className='member container'>
            <h2>{details.name}</h2>
            <p>{details.email}</p>
            <p>{details.role}</p>
        </div>
    )
}

