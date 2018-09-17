import React, {Component} from 'react';
import './carousel.css';
import Slide from './slide/slide';
import Pager from './pager/pager';
import CoverPhoto1 from '../../img/cover-photo.jpg';
import CoverPhoto2 from '../../img/cover-photo-2.jpg';
import CoverPhoto3 from '../../img/cover-photo-3.jpg';

class Carousel extends Component{

    constructor(props) {
        super(props);
        this.state = {loc: 0}
        this.slides =  [
                {img: CoverPhoto1, header: 'キャッチコピーが入ります',subheader: 'サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト'},
                {img: CoverPhoto2, header: 'キャッチコピーが入ります',subheader: 'サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト'},
                {img: CoverPhoto3, header: 'キャッチコピーが入ります',subheader: 'サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト'}
        ]
        this.carouselWidth = (((1400*this.slides.length)-1400))*-1;
        this.handleNavPagers = this.handleNavPagers.bind(this);
    }

    handleNav = (e) => {
        let l = this.state.loc;
        let w = this.carouselWidth;
        if(e.target.value == 1){
            l === 0 ? l = 0 : l = l + 1400;
        }
        else{
            l === w ? l = w : l = l - 1400;
        }
        this.setState({loc: l});
        console.log(this.state.loc);
    }

    handleNavPagers = (e) => {
        let l = (1400 * (e-1))*-1;
        this.setState({loc: l});
    }

    render() {
        let width = this.carouselWidth;
        return(
            <div className="carousel">
                <Slide defaultValue={this.slides} left={this.state.loc}/>
                <button className={(this.state.loc === 0 ) ? "carousel__button button--left disabled" : "carousel__button button--left"} onClick={this.handleNav} value={1}></button>
                <button className={(this.state.loc === width)? "carousel__button button--right disabled" : "carousel__button button--right"} onClick={this.handleNav} value={2}></button>
                <Pager onClick={this.handleNavPagers} carouselSlides={this.slides.length} left={this.state.loc}/>
            </div>
        )
    }

}
export default Carousel