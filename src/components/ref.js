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
            padding: "10px",
            width: "100%"
          }}
        >
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
      ),
      customPaging: function (i) {
        return (
          <div>
            <img src={images.image_1} className="img-fluid" style={{width: "100px", height:'40px', color: "grey",}} />
            <img src={images.image_2} className="img-fluid" style={{width: "100px", height:'40px', color: "grey",}} />
            <img src={images.image_3} className="img-fluid" style={{width: "100px", height:'40px', color: "grey",}} />
            <img src={images.image_4} className="img-fluid" style={{width: "100px", height:'40px', color: "grey",}} />
            </div>
        );
      },
      /* customPaging: i => (
        <div>
          <div style={{width: "40px", height:'40px', color: "grey",}}>
            <a><img src={images.image_1} className="img-fluid" alt={images.image_1} /></a>
          </div>
          <div style={{width: "40px", height:'40px', color: "grey",}}>
            <a><img src={images.image_2} className="img-fluid" alt={images.image_2} /></a>
          </div>
          <div style={{width: "40px", height:'40px', color: "grey",}}>
            <a><img src={images.image_3} className="img-fluid" alt={images.image_3} /></a>
          </div>
          <div style={{width: "40px", height:'40px', color: "grey",}}>
            <a><img src={images.image_4} className="img-fluid" alt={images.image_4} /></a>
          </div>
       </div>
      ) */
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



{/* <div
          style={{
            width: "40px",
            height:'40px',
            color: "grey",
          }}
        >
          <a><img src={images.image_1} className="img-fluid" alt={images.image_1} /></a>
          <a><img src={images.image_2} className="img-fluid" alt={images.image_2} /></a>
          <a><img src={images.image_3} className="img-fluid" alt={images.image_3} /></a>
          <a><img src={images.image_4} className="img-fluid" alt={images.image_4} /></a>

          
         <a>
            <img src={`${baseUrl}/abstract0${i + 1}.jpg`} />
          </a>
         {LandscapeData.map((item) => 
            <img id={`${item.id}`} src={item.img} className="img-fluid" alt={item.title} />
          )} 
        </div> */}