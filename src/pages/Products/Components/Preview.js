import React from 'react';
import Swiper from 'react-id-swiper';


const Preview = props => (
  <div className="col-12 col-md-10">
    <Swiper
      containerClass="swiper-container"
      slidesPerView={1}
      spacebetween={2}
      loop={true}
      pagination={{
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      }}
      >
      <div className="swiper-slide"><img className="img-fluid" src="/img/photo/photo-1426122402199-be02db90eb90.jpg" alt="Our street"/></div>
      <div className="swiper-slide"><img className="img-fluid" src="/img/photo/photo-1512917774080-9991f1c4c750.jpg" alt="Our street"/></div>
      <div className="swiper-slide"><img className="img-fluid" src="/img/photo/photo-1494526585095-c41746248156.jpg" alt="Our street"/></div>
    </Swiper>
  </div>
  // <CarouselProvider
  //   naturalSlideWidth={100}
  //   naturalSlideHeight={100}
  //   infinite={true}
  //   totalSlides={props.numSlides}
  // >
  //   <div className="row">
  //     <div className="col-md-2 pr-0 d-none d-md-block">
  //       <Dot slide={0} className="product-dot mb-3"><img className="img-fluid" src="/img/photo/photo-1426122402199-be02db90eb90.jpg" /></Dot>
  //       <Dot slide={1} className="product-dot mb-3"><img className="img-fluid" src="/img/photo/photo-1488805990569-3c9e1d76d51c.jpg" /></Dot>
  //       <Dot slide={2} className="product-dot mb-3"><img className="w-100 img-fluid" src="/img/photo/photo-1494526585095-c41746248156.jpg" /></Dot>
  //     </div>
  //     <div className="col-12 col-md-10">
  //       <Slider moveThreshold={0.05}>
  //         <Slide index={0}><img className="w-100 img-fluid" src="/img/photo/photo-1426122402199-be02db90eb90.jpg" /></Slide>
  //         <Slide index={1}><img className="w-100 img-fluid" src="/img/photo/photo-1488805990569-3c9e1d76d51c.jpg" /></Slide>
  //         <Slide index={2}><img className="w-100 img-fluid" src="/img/photo/photo-1494526585095-c41746248156.jpg" /></Slide>
  //       </Slider>
  //       <DotGroup />
  //       {/*<div className="d-md-none horizontal-dot-group row">*/}
  //       {/*  <Dot slide={0} className="product-dot mr-3 horizontal-product-dot col-sm-2"><img className="img-fluid" src="/img/photo/photo-1426122402199-be02db90eb90.jpg" /></Dot>*/}
  //       {/*  <Dot slide={1} className="product-dot mr-3 horizontal-product-dot col-sm-2"><img className="img-fluid" src="/img/photo/photo-1488805990569-3c9e1d76d51c.jpg" /></Dot>*/}
  //       {/*  <Dot slide={2} className="product-dot mr-3 horizontal-product-dot col-sm-2"><img className="img-fluid" src="/img/photo/photo-1494526585095-c41746248156.jpg" /></Dot>*/}
  //       {/*</div>*/}
  //     </div>
  //   </div>
  // </CarouselProvider>
);

export default Preview;