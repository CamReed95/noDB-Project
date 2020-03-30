import React from 'react';
import Post from './Post';
import EditPost from './editPost'
import DeletePost from './deletePost'

export default function List(props) {

const mappedPosts = props.posts.map( elem => {
        return <div key={elem.id}>
            <Post post={elem.post}/>
            <EditPost id={elem.id} editPost={props.editPost}/>
            <DeletePost id={elem.id} deletePost={props.deletePost}/>
        </div>
    })

    return<div>
        
        {mappedPosts}
    </div>
}