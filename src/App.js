import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import Poster from './Poster';

class App extends Component {

  // **this happens after the component has already rendered(meaning
// the 'render()' below has loaded)

    constructor(props) {
    // 'super' required to make it an ES6 component
        super(props);
    // in order to define a state variable, we put it in the
    // constructor we it as an object on 'this.state.'
        this.state = {
            moviePosters:[]
        }
    }
// componentDidMount runs AFTER the first render
    componentDidMount(){
      console.log("I'm in the dom");
      var url = 'http://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5'
      $.getJSON(url, (movieData)=>{
          // AJAX returns movieData
          console.log(movieData);
          // changing state will trigger a re-render(render will run again)
          this.setState({
              // this works as a setter method bc we are telling react that this needs to re-render
              // this happens so the changes will be shown
              moviePosters:movieData.results
          })
          // NEVER EVER change states directly
          // this is very BAD!!! It creates a mutation and WE are not allowed to do that
          // this.state.moviePosters = movieData.results
      })
  }
// EVERY component must have a render member method
  render() {
    var postersArray = [];
    // '.map()' is simply a for loop
    //   'poster' is the entity inside the array
    //   the i is still the index
    //   first time through render, this will be an empty array
      // second time through (after componentDidMount), it wont be empty
    this.state.moviePosters.map((poster,index)=>{
        console.log(poster);
        postersArray.push(<Poster poster={poster} key={index} />)
        return
    });

    // after componentDidMount is finished changing state postersArray
    //   now looks like this:
//       postersArray = [
//           <Poster poster="{poster}" key="{index}" />
//           <Poster poster="{poster}" key="{index}" />
//               <Poster poster="{poster}" key="{index}" />
//               <Poster poster="{poster}" key="{index}" />
// ]
    return (
      <div className="App">

        <h1>This is the movie app (again...)</h1>
          {postersArray}

      </div>
    );
  }
}

export default App;
