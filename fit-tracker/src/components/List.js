import React from 'react';
import ToDo from './ToDo';
import Button from './Button'

export default function List(props) {



    const mappedTodos = props.todos.map( elem => {
        return <div key={elem.id}>
            <ToDo todo={elem.todo}/>
            <Button value={"Delete"} id={elem.id} function={props.deleteTodo}/>
        </div>
    })

    return<div>
        <h1>My To-do List</h1>
        {mappedTodos}
    </div>
}