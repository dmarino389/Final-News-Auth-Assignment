import React, { Component } from 'react'
import Article from './Article';

export default class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: []
    }
  }
  
  // This is the function to fetch the news.
  getNews = async () => {
    console.log('getting the news')
    const res = await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=cfdeb4dc411e4ef585c304f42f945b37&pageSize=20')
    const data = await res.json();
    console.log(data)
    this.setState({
      articles: data.articles
    })
  }

  componentDidMount() {
    this.getNews()
  }


loadArticles = () => {
  return this.state.articles.map((a, index)=> <Article key = {index} articleInfo ={a}/>)
}


loadingChecker = ()=>(this.state.articles.length === 0) ? <p>Loading...</p>: this.loadArticles()

render() {
    return (
     <>
    

    
     <h1>news</h1>
     <div className="container">
     <div className="row"> 
        {this.loadingChecker()}
     </div>
    </div>
    </>
    )
  }
}
