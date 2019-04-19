import React, { Component } from 'react';
import CarouselCards from './CarouselCards'
import CarouselEx from './CarouselEx'

import '../assets/App.css';

class App extends Component {
  render() {
    return (

      <div className="App">
        <div>
          <CarouselEx />
        </div> 
        <div className="mt-5"> 
          <CarouselCards />
        </div>
      </div>
    );
  }
}

export default App;
