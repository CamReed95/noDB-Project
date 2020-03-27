import React from 'react';

export default class AddPost extends React.Component {
    constructor() {
        super();
        this.state = {
            newPost: ""
        }
    }

    render(){
        return(
            <div>
                <input
                type="text"
                name="newPost"
                value={this.props.newPost}
                onChange={(e) => this.props.changeHandler(e) }
                placeholder="Add new post"
                />
                
            </div>
        )
    }
}