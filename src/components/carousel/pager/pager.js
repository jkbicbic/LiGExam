import React, {Component} from 'react';

class Pager extends Component {

    moveToSlide =(e)=> {
        this.props.onClick.handleNavPagers(e.target.value);
    }


    render() {
        let data = this.props.defaultValue;
        let pager = data.slides.map(function(n, index){
            let num = index + 1;
            let style;
            if(data.loc === (1400*index)*-1){
                style = 'carousel__pager-button pager'+ num +' active';
            }
            else{
                style= 'carousel__pager-button pager'+num;
            }
            return(
                <button key={index} className={style} onClick={this.moveToSlide.bind(this)} value={num}></button>
            )
        }.bind(this));

        return(
            <div className="carousel__pagers" style={{width: (16*((data.slides.length)*2))+'px'}}>
                {pager}
            </div>
        ) 

    }

}

export default Pager