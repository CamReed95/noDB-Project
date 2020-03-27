import React from 'react';
import Post from './Post';
import EditPost from './editPost'

export default function List(props) {

const mappedPosts = props.posts.map( elem => {
        return <div key={elem.id}>
            <Post post={elem.post}/>
            <EditPost id={elem.id} editPost={props.editPost}/>
        </div>
    })

    return<div>
        <h1>Fit-Tracker</h1>
        {mappedPosts}
    </div>
}