import React from 'react';
import { Link } from 'react-router-dom';
import { CarouselProvider, Slider, Slide, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


const Preview = props => (
  <CarouselProvider
    naturalSlideWidth={100}
    naturalSlideHeight={100}
    totalSlides={props.numSlides}
  >
    <div className="row">
      <div className="col-md-2 pr-0 d-none d-md-block">
      <Dot slide={0}><img className="img-fluid" src="/img/photo/photo-1426122402199-be02db90eb90.jpg" /></Dot>
      <Dot slide={1}><img className="img-fluid" src="/img/photo/photo-1488805990569-3c9e1d76d51c.jpg" /></Dot>
      <Dot slide={2}><img className="w-100 img-fluid" src="/img/photo/photo-1494526585095-c41746248156.jpg" /></Dot>
    </div>
      <div className="col-md-10">
        <Slider moveThreshold={0.05}>
          <Slide index={0}><img className="w-100 img-fluid" src="/img/photo/photo-1426122402199-be02db90eb90.jpg" /></Slide>
          <Slide index={1}><img className="w-100 img-fluid" src="/img/photo/photo-1488805990569-3c9e1d76d51c.jpg" /></Slide>
          <Slide index={2}><img className="w-100 img-fluid" src="/img/photo/photo-1494526585095-c41746248156.jpg" /></Slide>
        </Slider>
      </div>
    </div>
  </CarouselProvider>
);

export default Preview;