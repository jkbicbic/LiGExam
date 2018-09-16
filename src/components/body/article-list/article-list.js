import React, {Component} from 'react';
import './article-list.css';
import Article from './article/article'

class ArticleList extends Component {
  
  constructor(props){
    super(props);
    this.state ={articles: ['art', 'art', 'art', 'art', 'art', 'art', 'art', 'art', 'art', 'art']}
  }

  render() {
    var article = this.state.articles;
    return(
      <div className="article-list">
        {article.map(function(art, index){
          return <Article defaultValue={art} key={index} />
        })}
        <button className="article-list__button-more">More<span className="article-list__button-icon"></span></button>
      </div>
    )
      
  }
}

export default ArticleList;
