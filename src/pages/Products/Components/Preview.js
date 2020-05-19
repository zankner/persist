import React, { useState } from 'react';
import Swiper from 'react-id-swiper';


const Preview = props => {

  const imgs = ["/img/photo/photo-1426122402199-be02db90eb90.jpg", "/img/photo/photo-1488805990569-3c9e1d76d51c.jpg", "/img/photo/photo-1494526585095-c41746248156.jpg"];

  const [index, setIndex] = useState('0');

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
        <Swiper
          activeSlideKey={index}
          slidesPerView={1}
          spacebetween={2}
          loop={true}
          pagination={{
            el: '.swiper-pagination.d-md-none',
            clickable: true,
            dynamicBullets: true,
          }}
        >
          <div key='0' className="swiper-slide"><img className="img-fluid"
                                                     src="/img/photo/photo-1426122402199-be02db90eb90.jpg"
                                                     alt="Our street"/></div>
          <div key='1' className="swiper-slide"><img className="img-fluid"
                                                     src="/img/photo/photo-1512917774080-9991f1c4c750.jpg"
                                                     alt="Our street"/></div>
          <div key='2' className="swiper-slide"><img className="img-fluid"
                                                     src="/img/photo/photo-1494526585095-c41746248156.jpg"
                                                     alt="Our street"/></div>
        </Swiper>
      </div>
    </div>
  );
};

export default Preview;