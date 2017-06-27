// Required Dependencies
import React, { Component } from 'react';
class Poster extends Component{
    render(){
        console.log(this.props.poster)
        var imagePath = `http://image.tmdb.org/t/p/w300${this.props.poster.poster_path}`;
        return(
            <div className="col-sm-3">
                <img src={imagePath}/>
            </div>
        )
    }
}

export default Poster