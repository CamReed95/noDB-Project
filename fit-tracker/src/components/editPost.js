import React from 'react'

export default class AddPost extends React.Component {
    constructor() {
        super();
        this.state = {
            editPost: ""
        }
        this.changeHandler = this.changeHandler.bind(this)
    }
    

    changeHandler (event) {
        this.setState({
          editPost: event.target.value
        })

      }

    render(){
        return(
            <div>
                <input
                className="editPost-input"
                type="text"
                name="editPost"
                value={this.state.editPost}
                onChange={(e) => this.changeHandler(e) }
                
                />
                <button onClick={() => this.props.editPost(this.state.editPost, this.props.id)}>Edit Post</button>
                
            </div>
        )
    }
}