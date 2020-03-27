import React from 'react';

export default class AddToDo extends React.Component {
    constructor() {
        super();
        this.state = {
            newTodo: ""
        }
    }

    render(){
        return(
            <div>
                <input
                type="text"
                name="newTodo"
                value={this.props.newTodo}
                onChange={(e) => this.props.changeHandler(e) }
                placeholder="add new task"
                />
                
            </div>
        )
    }
}