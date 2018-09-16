import React, {Component} from 'react';
import './aside-article.css';
import thumb from '../../../../resources/img/thumb.png';
import thumbClicked from '../../../../resources/img/thumb-clicked.png';

class AsideArticle extends Component{

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
            <article className="aside__recommended-article" onMouseOver={this.onHover} onMouseOut={this.onOut}>
                <img className="aside__article-image" src={this.state.image} alt="thumb"/>
                <div className="aside__article-preview">
                    <header className="aside__article-header">サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト</header>
                    <p className="aside__article-date">2016.01.01</p>
                </div>
            </article>
        )
    }
    
}

export default AsideArticle;
