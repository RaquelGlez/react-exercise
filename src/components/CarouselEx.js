import React, { Component } from 'react';
import Slider from "react-slick";
import '../assets/App.css';

class CarouselEx extends Component {
  render() {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: dots => (
        <div
          style={{
            backgroundColor: "pink",
            borderRadius: "10px",
            padding: "10px"
          }}
        >
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
      ),
      customPaging: i => (
        <div
          style={{
            width: "30px",
            color: "blue",
            border: "1px blue solid"
          }}
        >
          {i + 1}
        </div>
      )
    };

    return (
      <div className="carousel1">
        <h1>Parte 1</h1>
        <div>
          <div>
            <h2>Carousel example</h2>
            <Slider {...settings}>
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div className='mb-5'>
                <h3>6</h3>
              </div>
            </Slider>
        </div>
        </div>
      </div>
    );
  }
}

export default CarouselEx;
