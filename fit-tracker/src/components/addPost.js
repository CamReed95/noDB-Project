import React from 'react';

export default class AddPost extends React.Component {
    constructor() {
        super();
        this.state = {
            newPost: ""
        }
        this.changeHandler = this.changeHandler.bind(this)
    }
    changeHandler (event) {
        this.setState({
          newPost: event.target.value
        })
      }



    render(){
        return(
            <div>
                <input
                type="text"
                name="newPost"
                value={this.state.newPost}
                onChange={(e) => this.changeHandler(e) }
                placeholder="Mmkay, nice!"
                />
                <button onClick={() => this.props.addPost( this.state.newPost )}> Add a New Post </button>
                
            </div>
        )
    }
}