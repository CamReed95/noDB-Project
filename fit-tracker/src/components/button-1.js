import React from 'react'

export default function Button(props) {
    return <div>
        <button onClick={() => props.function(props.id)}>{props.value}</button>
    </div>
}