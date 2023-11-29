// To quickly generate a reactClassComponent you will need to type rcc
// To quickly generate a reactFunctionalComponent you will need to type rfc
// To quickly generate a reactArrowFunctionExportComponent you will need to type rafce




import React, { Component } from 'react'
import Navbar from './Navbar';
import {Routes, Route} from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import News from './News';
import Feed from './Feed';
import SinglePost from './SinglePost';
import Signup from './Signup';

export default class App extends Component {
 
 
 // This constructs your components. Another way of saying this is that it sets up are initial state that we are tracking.
  constructor(){
    super();
    this.state = {
      user: null,
      count: 0,
      
    }
    console.log('I am constructing')
  }
 

   // This function allows the user to add +1 to the count
 addToCount = () => {
  this.setState({
    count: this.state.count + 1
  })
 
}
  

 // This function allows the user to remove -1 from the count
 removeFromCount = () => {
  this.setState({
    count: this.state.count - 1
  })
}

  // This function logs the user in
  logMeIn = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    this.setState({user: username})
  }



  // this checks if everything is loading onto the page(aka: if everything mounted on your site)
  componentDidMount(){
    console.log('I have just mounted')
  }

 
 //----------------------------------------Everything below is rendering ----------------------------------------------------------------------------------------------------------------------------
 
 
 
  // This actually renders everything onto your page
  render() {
    console.log('I am rendering')
    return (
      <div> 
      
       <Navbar user={this.state.user} />
      
       <Routes>
        <Route path='/' element={<Home count={this.state.count} addToCount={this.addToCount} removeFromCount={this.removeFromCount} />} /> 
        <Route path='/login' element={<Login />} />
        <Route path='/news' element={<News />}/>
        <Route path='/posts' element={<Feed />}/>
        <Route path='/posts:postId' element={<SinglePost />}/>
        <Route path='/signup' element={<Signup />}/>
        {/* <Route path='/posts:postId' element={<SinglePost />}/> */}

      </Routes>
      

      
      </div>
    )
  }
}




// Line 73 is basically saying that home is going to have access to the count component even though its in the App.jsx
// The purpose of this is so that my count wont reset when goin