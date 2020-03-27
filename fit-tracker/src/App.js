import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import List from './components/List'
import AddPost from './components/Post'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      posts: [],
      newPost: ''
    }
    this.deletePost = this.deletePost.bind(this)
    this.addPost = this.addPost.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
  }

  componentDidMount() {
    axios.get('/api/posts').then( res => {
      this.setState({
        posts: res.data
      }) 
    })
  }

  deletePost(id) {
    axios.delete(`/api/delete_post${id}`)
  } 

  addPost () {
    axios.post('/api/add_post', {todo: this.state.newPost}).then(res => { 
      this.setState({
        posts: res.data
      })
    })
  }

  changeHandler (event) {
    this.setState({
      newPost: event.target.value
    })
  }

  render(){
    console.log(this.state)
    return (
      <div className="App">
        <AddPost newTodo={this.state.newPost} changeHandler={this.changeHandler} addPost={this.addPost}/>
        <List posts={this.state.posts}/>
        <button> Add a New Post {this.props.addPost}</button>
      </div>
    );
  }
}

export default App;