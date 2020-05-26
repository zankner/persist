import React, { useState, useEffect, useCallback } from 'react';
import Swiper from './Swiper';


const Preview = props => {

  const imgs = ["/img/photo/photo-1426122402199-be02db90eb90.jpg", "/img/photo/photo-1488805990569-3c9e1d76d51c.jpg", "/img/photo/photo-1494526585095-c41746248156.jpg"];

  const [index, setIndex] = useState('0');
  const [swiper, setSwiper] = useState(null);


  const swiperParams = {
    activeSlideKey: index,
    slidesPerView: 1,
    loop: true,
    containerClass: "swiper-container pb-5",
    pagination: {
      el: '.swiper-pagination.d-md-none',
      clickable: true,
      dynamicBullets: true
    },
    getSwiper: props => {
      setSwiper(props)
    }
  };

  const updateIndex = useCallback(() => {
    setIndex(swiper.realIndex.toString());
  }, [swiper])

  useEffect(() => {
    if (swiper !== null) {
      swiper.on("slideChange", updateIndex)
    }

    return () => {
      if (swiper !== null) {
        swiper.off("slideChange", updateIndex);
      }
    }
  }, [swiper, updateIndex])


  const handleDotClick = dotIndex => {
    setIndex(dotIndex.toString());
  };

  return (
    <div className="row mb-5">
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