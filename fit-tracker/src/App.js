import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import List from './components/List'
import AddPost from './components/addPost'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      posts: [],
      
    }
    this.deletePost = this.deletePost.bind(this)
    this.addPost = this.addPost.bind(this)
    this.editPost = this.editPost.bind(this)
    
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

  addPost (newPost) {
    axios.post('/api/add_post', {
      post: newPost 
    }).then(res => { 
      this.setState({
        posts: res.data
      })
    })
  }

  editPost (editPost, id) {
   axios.put(`/api/edit_post/${id}`, {
     post: editPost
   }).then(res => {
     this.setState({
       posts: res.data
     })
   })

  }

  render(){
    console.log(this.state)
    return (
      <div className="App">
        <AddPost addPost={this.addPost}/>
        <List posts={this.state.posts} editPost={this.editPost}/>
        
      </div>
    );
  }
}

export default App;