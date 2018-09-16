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
        this.state = {
                loc: 0, 
                slides: [
                    {img: CoverPhoto1, header: 'キャッチコピーが入ります',subheader: 'サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト'},
                    {img: CoverPhoto2, header: 'キャッチコピーが入ります',subheader: 'サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト'},
                    {img: CoverPhoto3, header: 'キャッチコピーが入ります',subheader: 'サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト'}
            ]
        }
    }

    handleNav = (e) => {
        let l = this.state.loc;
        if(e.target.value == 1){
            l === 0 ? l = 0 : l = l + 1400;
        }
        else{
            l === -2800 ? l = -2800 : l = l - 1400;
        }
        this.setState({loc: l});
    }

    render() {
        let carousel = this.state;
        return(
            <div className="carousel">
                <Slide defaultValue={carousel.slides} left={carousel.loc} />
                <button className={(carousel.loc === 0) ? "carousel__button button--left disabled" : "carousel__button button--left"} onClick={this.handleNav} value={1}></button>
                <button className={(carousel.loc === -2800) ? "carousel__button button--right disabled" : "carousel__button button--right"} onClick={this.handleNav} value={2}></button>
                <Pager defaultValue={carousel}/>
            </div>
        )
    }

}
export default Carousel