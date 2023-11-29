import React, { Component } from 'react'
import Post from './Post';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export default class Feed extends Component {

  // This is constructing the state of posts as an empty list
  constructor(){
    super()
    this.state = {
      posts: []
    }
  }
  
  // This is an arrow function to get the posts from the flask api.
  getPosts = async () => {
    const url = BACKEND_URL + '/api/posts';
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    if (data.status === 'ok') {
      this.setState({ posts: data.posts });
    }
  }
  
  
// This arrow function checks if the length of posts is equal to 0 or none. If it is then the page will stay loading. 
// If there is any post at all then we loop through the post to find the key of post.id and then we use the post info to post it.
showPosts = () => {
  if (this.state.posts.length === 0){
    return <h2>Loading...</h2>
  }
  else {
    return this.state.posts.map(p => <Post key={p.id} postInfo={p} />)
  }
}

// This says that if the component mounts on the page to use the state function of get posts to display the posts.
componentDidMount(){
  this.getPosts()
}

// This renders the feed page
  render() {
    return (
      <div className='container'>
        <h1>My Feed</h1>
        {this.showPosts()}
      </div>
    )
  }
}
