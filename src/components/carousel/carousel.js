import React, {Component} from 'react';
import './carousel.css'

class Carousel extends Component{

    constructor(props) {
        super(props);
        this.state = {slide: 'slide1', nav: 1, pager: 1}
    }

    updateState(s, n, p){
        this.setState({slide: s, nav: n, pager: p})
    }


    handleNavLeft = () => {
        let nav = this.state.nav;
        let slide, navi, pager;
        if(nav === 1){
            slide = 'slide1'; navi = 1; pager = 1;
        }
        else{
            nav = nav - 1;
            slide = 'slide'+nav.toString(); navi = nav; pager = nav;
        }
        this.updateState(slide, navi, pager);
    }

    handleNavRight = () => {
        let nav = this.state.nav;
        let slide, navi, pager;
        if(nav === 3){
            slide = 'slide3'; navi = 3; pager = 3;
        }
        else{
            nav = nav + 1;
            slide = 'slide'+nav.toString(); navi = nav; pager = nav;
        }
        this.updateState(slide, navi, pager);
    }

    handleNavPagers = (s, n, p) => {
        // this.updateState(s, n, p);
    }

    render() {
        return(
            <div className="carousel">
                <div className={"carousel__slider " + this.state.slide}>
                    <div className="carousel__slide">
                        <div className="carousel__slide-content">
                            <h1 className="carousel__slide-header">キャッチコピーが入ります。</h1>
                            <p className="carousel__slide-subheader">サンプルテキストサンプルテキストサンプルテキストサンプルテキスト<br />サンプルテキストサンプルテキストサンプルテキストサンプルテキスト</p>
                        </div>
                    </div>
                    <div className="carousel__slide">
                        <div className="carousel__slide-content">
                            <h1 className="carousel__slide-header">キャッチコピーが入ります。</h1>
                            <p className="carousel__slide-subheader">サンプルテキストサンプルテキストサンプルテキストサンプルテキスト<br />サンプルテキストサンプルテキストサンプルテキストサンプルテキスト</p>
                        </div>
                    </div>
                    <div className="carousel__slide">
                        <div className="carousel__slide-content">
                            <h1 className="carousel__slide-header">キャッチコピーが入ります。</h1>
                            <p className="carousel__slide-subheader">サンプルテキストサンプルテキストサンプルテキストサンプルテキスト<br />サンプルテキストサンプルテキストサンプルテキストサンプルテキスト</p>
                        </div>
                    </div>
                </div>
                <button className={(this.state.nav === 1) ? "carousel__button button--left disabled" : "carousel__button button--left"} onClick={this.handleNavLeft}></button>
                <button className={(this.state.nav === 3) ? "carousel__button button--right disabled" : "carousel__button button--right"} onClick={this.handleNavRight}></button>
                <div className="carousel__pagers">
                    <button className={(this.state.pager === 1 ) ? 'carousel__pager-button pager1 active':'carousel__pager-button pager1'} onClick={this.handleNavPagers('slide1', 1, 1)}></button>
                    <button className={(this.state.pager === 2 ) ? 'carousel__pager-button pager2 active':'carousel__pager-button pager2'} onClick={this.handleNavPagers('slide2', 2, 2)}></button>
                    <button className={(this.state.pager === 3 ) ? 'carousel__pager-button pager3 active':'carousel__pager-button pager3'} onClick={this.handleNavPagers('slide3', 3, 3)}></button>
                </div>
            </div>
        )
    }

}
export default Carousel