import React, {Component} from 'react';
import './article.css';
import thumb from '../../../../img/thumb.png';
import thumbClicked from '../../../../img/thumb-clicked.png';

class Article extends Component{

    constructor(props){
        super(props);
        this.state = {image: thumb};
    }

    onHover = () => {
        this.setState({image: thumbClicked});
    }

    onOut = () =>{
        this.setState({image: thumb});
    }

    render(){
        return(
            <article className="article-list__article" onMouseOver={this.onHover} onMouseOut={this.onOut}>
                <img className="article-list__article-image" src={this.state.image} alt="article"/>
                <div className="article-list__article-preview">
                    <p className="article-list__article-date">2016.01.01</p>
                    <header className="article-list__article-header">サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト</header>
                    <p className="article-list__article-sneak-peek">サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト…</p>
                </div>
            </article>
        )
    }
    
}

export default Article;
