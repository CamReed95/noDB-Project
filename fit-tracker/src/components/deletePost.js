import React from 'react';

export default class deletePost extends React.Component {
   


    render() {
        return(
            <div>
                 {/* { name="deletePost"
                value={this.state.deletePost}
                onChange={(e) => this.changeHandler(e) } } }
                 <button onClick={() => this.props.addPost( this.state.newPost )}> Add a New Post </button> 
                 const {id} = props  */}
    
                <button onClick={() => props.deletePost(id)} className="deletePost-input">Delete Post</button>
                
            </div>
        )
    }
}    




