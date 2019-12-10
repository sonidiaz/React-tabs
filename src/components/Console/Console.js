import React from 'react';
import { useParams } from 'react-router'

const Console = props => {
    const { id } = useParams()
    return (
    <h1>{id}</h1>
    )
}

export default Console