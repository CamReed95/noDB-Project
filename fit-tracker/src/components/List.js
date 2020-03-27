import React from 'react';
import ToDo from './ToDo';
import Button from './Button'

export default function List(props) {
    const mappedPosts = props.posts.map( elem => {
        return <div key={elem.id}>
            <Post post={elem.post}/>
            <Button value={"Delete"} id={elem.id} function={props.deletePost}/>
        </div>
    })

    return<div>
        <h1>My Posts</h1>
        {mappedPosts}
    </div>
}