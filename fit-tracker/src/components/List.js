import React from 'react';
import Post from './Post';
import Button from './button-1'

export default function List(props) {

const mappedPosts = props.posts.map( elem => {
        return <div key={elem.id}>
            <Post post={elem.post}/>
            <Button value={"Delete"} id={elem.id} function={props.deleteTodo}/>
        </div>
    })

    return<div>
        <h1>My To-do List</h1>
        {mappedPosts}
    </div>
}