import React from 'react';

function DeletePost(props) {
    return(
        <div>
            <button onClick={() => props.deletePost(props.id)} className="deletePost-input">Delete Post</button>
    
        </div>
    )
}

export default DeletePost;



