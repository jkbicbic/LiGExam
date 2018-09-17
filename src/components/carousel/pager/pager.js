import React, {Component} from 'react';

class Pager extends Component {

    constructor(props){
        super(props);
        this.data = this.props.carouselSlides;
    }

    moveToSlide =(e)=> {
        this.props.onClick(e.target.value);
    }

    renderPagers = () => {
        let left = this.props.left;
        let pagers = [];
        for(var i = 0; i < this.data; i++){
            pagers.push(
                <button className={(left === (1400*(i))*-1) ? 'carousel__pager-button active' :  'carousel__pager-button'} onClick={this.moveToSlide.bind(this)} value={i+1} key={i}></button>
            )
        }
        return pagers;
    }
s
    render() {
        return(
            <div className="carousel__pagers" style={{width: (16*((this.data)*2))+'px'}}>
                {this.renderPagers()}
            </div>
        ) 

    }

}

export default Pager