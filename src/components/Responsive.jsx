import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import product1 from '../assets/images/1.jpg'
import product2 from '../assets/images/2.jpg'
import product3 from '../assets/images/3.jpg'
import product4 from '../assets/images/4.jpg'
import product5 from '../assets/images/5.jpg'
import product6 from '../assets/images/6.jpg'
import product7 from '../assets/images/screw-1.jpg'
import product8 from '../assets/images/screw-2.jpg'
import product9 from '../assets/images/screw-3.jpg'
import product10 from '../assets/images/screw-4.jpg'
import product11 from '../assets/images/screw-5.jpg'
import product12 from '../assets/images/screw-6.jpg'

export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
    return (
      <div className="mt-2">
        <Slider {...settings}>
          <div>
            <img src={product1} alt="1" className="rounded-xl" />
          </div>
          <div>
          <img src={product2} alt="2" className="rounded-xl" />
          </div>
          <div>
          <img src={product3} alt="3" className="rounded-xl" />
          </div>
          <div>
          <img src={product4} alt="4" className="rounded-xl" />
          </div>
          <div>
          <img src={product5} alt="5" className="rounded-xl" />
          </div>
          <div>
          <img src={product6} alt="6" className="rounded-xl" />
          </div>
          <div>
          <img src={product7} alt="7" className="rounded-xl" />
          </div>
          <div>
          <img src={product8} alt="8" className="rounded-xl" />
          </div>
          <div>
          <img src={product9} alt="9" className="rounded-xl" />
          </div>
          <div>
          <img src={product10} alt="10" className="rounded-xl" />
          </div>
          <div>
          <img src={product11} alt="11" className="rounded-xl" />
          </div>
          <div>
          <img src={product12} alt="12" className="rounded-xl" />
          </div>
        </Slider>
      </div>
    );
  }
}








