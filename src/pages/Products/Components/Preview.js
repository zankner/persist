import React, { useState, useEffect, useCallback } from 'react';
import Swiper from './Swiper';


const Preview = props => {

  const imgs = ["/img/photo/photo-1426122402199-be02db90eb90.jpg", "/img/photo/photo-1488805990569-3c9e1d76d51c.jpg", "/img/photo/photo-1494526585095-c41746248156.jpg"];

  const [index, setIndex] = useState('0');
  const [swiper, setSwiper] = useState(0);

  const swiperParams = {
    activeSlideKey: index,
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: '.swiper-pagination.d-md-none',
      clickable: true,
      dynamicBullets: true
    },
    getSwiper: props => {
      console.log(props);
      setSwiper(props)
    },
    on: {
      slideChangeTransitionEnd: () => {
        // console.log(swiper)
        if(swiper !== null) {
          console.log('called')
          console.log(swiper.realIndex)
        }
      }
    }
  };

  useEffect(() => {
    console.log("*");
    console.log(swiper);
  }, [swiper]);

  const handleDotClick = dotIndex => {
    setIndex(dotIndex.toString());
  };

  return (
    <div className="row">
      <div className="col-md-2 pr-0 d-none d-md-block">
        {imgs.map((im, i) => (
          <button onClick={() => handleDotClick(i)} className={`product-dot ${(i.toString() === index) ? "product-dot-active" : ""}`}>
            <img className="mb-3 img-fluid" src={im} />
          </button>
        ))}
      </div>
      <div className="col-12 col-md-10">
        <Swiper imgs={imgs} swiperParams={swiperParams} />
      </div>
    </div>
  );
};

export default Preview;