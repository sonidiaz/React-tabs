import React from 'react'

const Accordion = () => {
    const List = ['Elemento 1','Elemento 1','Elemento 1']
    return (
        <ul>
            {
                List.map( (el, idx) => (
                    <li key={idx}>{el}</li>
                ))
            }
        </ul>
    )
}

export {Accordion}