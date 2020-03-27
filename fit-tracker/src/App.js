import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import List from './components/List'
import AddToDo from './components/AddToDo'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      todos: [],
      newTodo: ''
    }
    this.deleteTodo = this.deleteTodo.bind(this)
    this.addToDo = this.addToDo.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
  }

  componentDidMount() {
    axios.get('/api/todos').then( res => {
      this.setState({
        todos: res.data
      }) 
    })
  }

  deleteTodo(id) {
    axios.delete(`/api/delete_todo${id}`)
  } 

  addToDo () {
    axios.post('/api/add_todo', {todo: this.state.newTodo}).then(res => { //this is how to set stuff on the body
      this.setState({
        todoas: res.data
      })
    })
  }

  changeHandler (event) {
    this.setState({
      newTodo: event.target.value
    })
  }

  render(){
    console.log(this.state)
    return (
      <div className="App">
        <AddToDo newTodo={this.state.newTodo} changeHandler={this.changeHandler} addToDo={this.addToDo}/>
        <List todos={this.state.todos}/>
        <button> onClick={this.props.addToDo}</button>
      </div>
    );
  }
}

export default App;