import React, { Component } from 'react';
import { LandscapeData } from './Data';
import Slider from "react-slick";
import images from '../assets/images/Images';
import '../assets/App.css';

class CarouselCards extends Component {

  
  renderLandscape = () => {
    return LandscapeData.map((item, index) => 
            <div key={index} className="row">
                <div className="card mt-5 mb-3" >
                    <div className="row no-gutters">
                        <div className="col-md-4 text-center my-auto">
                            <img id={`${item.id}`} src={item.img} className="img-fluid mx-auto photo-speaker animated" alt={item.title} />
                            <div className={`mx-auto my-4`}>
                                <h5>{item.title}</h5>
                            </div>
                        </div>
                        <div className="col-md-8 my-auto">
                            <div className="card-body "> 
                                <p className='speaker-text text-center '>
                                    {item.text}
                                </p>                        
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )   
  }

  render() {
    /* const im = [
      { src: images.image_1  },
      { src: images.image_2  },
      { src: images.image_3  },
      { src: images.image_4  },
    ]; */
    
    const settings = {
      customPaging: function(i) {
        return (     
          <a>
            <img src={LandscapeData[i].img} className="img-item img-fluid rounded-circle" />
          </a>
        )
      },
      /* slick-dots */
      dots: true,
      dotsClass: " dots-img slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div className="carousel2 ">
        <h1 className="pt-5">Parte 2</h1>
        <div>
          <div>
            <h2>Carousel Cards</h2>
            <div className="row justify-content-center">
              <div className="col-8">
                <Slider {...settings}>
                    {this.renderLandscape()}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CarouselCards;