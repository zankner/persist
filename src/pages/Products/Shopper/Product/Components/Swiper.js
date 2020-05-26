import React from 'react';
import IdSwiper from 'react-id-swiper';

const Swiper = props => {
  return (
    <IdSwiper {...props.swiperParams}>
      {props.imgs.map((image, i) => (
        <div key={i.toString()} className="swiper-slide"><img className="img-fluid" src={image}/></div>
      ))}
    </IdSwiper>
  );
};

export default Swiper;