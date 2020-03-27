import React from 'react';

export default function deletePost(props) {
    const {id} = props
    return <div>
        <button onClick={() => props.deletePost(id)}>Delete Post</button>
    </div>


    render() {
        return(
            <div>
                <input
                className="deletePost-input"
                type="text"
                name="deletePost"
                value={this.state.deletePost}
                onChange={(e) => this.changeHandler(e) }
                />
                
                <button onClick={() => this.props.addPost( this.state.newPost )}> Add a New Post </button>
                
            </div>
        )
    }
}    




