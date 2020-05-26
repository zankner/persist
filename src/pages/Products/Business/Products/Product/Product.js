import React, { useState } from 'react';
import Layout from '../../../../../components/Layout';
import { compose } from 'redux';
import { withFirebase } from 'react-redux-firebase';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Preview from './Components/Preview';
import Carousel from "react-bootstrap/Carousel";
import {CarouselProvider} from "pure-react-carousel";


const Product = props => {

  return (
    <Layout>
      <div className="container pt-nav pb-5">
        <div className="row py-5">
          <div className="col-lg-8">
            <div className="text-block">
              <p className="text-primary"><i className="fa-map-marker-alt fa mr-1"></i> Brooklyn, New York</p>
              <h1>Mid-Century Modern Garden Paradise</h1>
              <Preview numSlides={3} classNam="mb-5"/>
              <p className="text-muted text-uppercase mb-4">Entire Apartment </p>
              <ul className="list-inline text-sm mb-4">
                <li className="list-inline-item mr-3"><i className="fa fa-users mr-1 text-secondary"></i> 4 guests</li>
                <li className="list-inline-item mr-3"><i className="fa fa-door-open mr-1 text-secondary"></i> 1 bedroom
                </li>
                <li className="list-inline-item mr-3"><i className="fa fa-bed mr-1 text-secondary"></i> 3 beds</li>
                <li className="list-inline-item mr-3"><i className="fa fa-bath mr-1 text-secondary"></i> 1 bath</li>
              </ul>
              <p className="text-muted font-weight-light">Our garden basement apartment is fully equipped with
                everything you need to enjoy your stay. Very comfortable for a couple but plenty of space for a small
                family. Close to many wonderful Brooklyn attractions and quick trip to Manhattan. </p>
              <h6 className="mb-3">The space</h6>
              <p className="text-muted font-weight-light">Welcome to Brooklyn! We are excited to share our wonderful
                neighborhood with you. Our modern apartment has a private entrance, fully equipped kitchen, and a very
                comfortable queen size bed. We are happy to accommodate additional guests with a single bed in the
                living room, another comfy mattress on the floor and can make arrangements for small children with a
                portable crib and highchair if requested. </p>
              <p className="text-muted font-weight-light">Also in the apartment:</p>
              <ul className="text-muted font-weight-light">
                <li>TV with Netflix and DirectTVNow</li>
                <li>Free WiFi</li>
                <li>Gourmet Coffee/Tea making supplies</li>
                <li>Fresh Sheets and Towels</li>
                <li>Toaster, microwave, pots and pans and basic cooking needs like salt, pepper, sugar, and olive oil.
                </li>
                <li>Air Conditioning to keep you cool all summer!</li>
              </ul>
              <p className="text-muted font-weight-light">The apartment is surprisingly quiet for being in the heart of
                a vibrant, bustling neighborhood.</p>
              <h6 className="mb-3">Interaction with guests</h6>
              <p className="text-muted font-weight-light">We live in the two floors above the garden apartment so we are
                usually available to answer questions. The garden apartment is separate from our living space. We are
                happy to provide advice on local attractions, restaurants and transportation around the city. If there's
                anything you need please don't hesitate to ask!</p>
            </div>
            <div className="text-block">
              <h4 className="mb-4">Amenities</h4>
              <div className="row">
                <div className="col-md-6">
                  <ul className="list-unstyled text-muted">
                    <li className="mb-2"><i className="fa fa-wifi text-secondary w-1rem mr-3 text-center"></i><span
                      className="text-sm">Wifi</span></li>
                    <li className="mb-2"><i className="fa fa-tv text-secondary w-1rem mr-3 text-center"></i><span
                      className="text-sm">Cable TV</span></li>
                    <li className="mb-2"><i className="fa fa-snowflake text-secondary w-1rem mr-3 text-center"></i><span
                      className="text-sm">Air conditioning</span></li>
                    <li className="mb-2"><i
                      className="fa fa-thermometer-three-quarters text-secondary w-1rem mr-3 text-center"></i><span
                      className="text-sm">Heating</span></li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="list-unstyled text-muted">
                    <li className="mb-2"><i className="fa fa-bath text-secondary w-1rem mr-3 text-center"></i><span
                      className="text-sm">Toiletteries</span></li>
                    <li className="mb-2"><i className="fa fa-utensils text-secondary w-1rem mr-3 text-center"></i><span
                      className="text-sm">Equipped Kitchen</span></li>
                    <li className="mb-2"><i className="fa fa-laptop text-secondary w-1rem mr-3 text-center"></i><span
                      className="text-sm">Desk for work</span></li>
                    <li className="mb-2"><i className="fa fa-tshirt text-secondary w-1rem mr-3 text-center"></i><span
                      className="text-sm">Washing machine</span></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="text-block">
              <h4 className="mb-0">Amenities alternative</h4>
              <p className="subtitle text-sm text-primary mb-4">Alternative amenities display</p>
              <ul className="list-inline">
                <li className="list-inline-item mb-2"><span
                  className="badge badge-pill badge-light p-3 text-muted font-weight-normal">Wifi</span></li>
                <li className="list-inline-item mb-2"><span
                  className="badge badge-pill badge-light p-3 text-muted font-weight-normal">Cable TV</span></li>
                <li className="list-inline-item mb-2"><span
                  className="badge badge-pill badge-light p-3 text-muted font-weight-normal">Air conditioning</span>
                </li>
                <li className="list-inline-item mb-2"><span
                  className="badge badge-pill badge-light p-3 text-muted font-weight-normal">Heating</span></li>
                <li className="list-inline-item mb-2"><span
                  className="badge badge-pill badge-light p-3 text-muted font-weight-normal">Toiletteries</span></li>
                <li className="list-inline-item mb-2"><span
                  className="badge badge-pill badge-light p-3 text-muted font-weight-normal">Equipped Kitchen</span>
                </li>
                <li className="list-inline-item mb-2"><span
                  className="badge badge-pill badge-light p-3 text-muted font-weight-normal">Desk for work</span></li>
                <li className="list-inline-item mb-2"><span
                  className="badge badge-pill badge-light p-3 text-muted font-weight-normal">Washing machine</span></li>
              </ul>
            </div>
            <div className="text-block">
              <div className="media"><img className="avatar avatar-lg mr-4" src="/img/avatar/avatar-10.jpg"
                                          alt="Jack London" />
                <div className="media-body">
                  <p><span className="text-muted text-uppercase text-sm">Hosted by </span><br /><strong>Jack
                    London</strong></p>
                  <p className="text-muted text-sm mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore.</p>
                  <p className="text-muted text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                  <p className="text-sm"><a href="user-profile.html">See Jack's 3 other listings <i
                    className="fa fa-long-arrow-alt-right ml-2"></i></a></p>
                </div>
              </div>
            </div>
            <div className="text-block">
              <h5 className="mb-4">Listing location</h5>
              <div className="map-wrapper-300 mb-3">
                <div className="h-100" id="detailMap"></div>
              </div>
            </div>
            <div className="text-block">
              <h5 className="mb-4">Gallery</h5>
              <div className="row gallery mb-3 ml-n1 mr-n1">
                <div className="col-lg-4 col-6 px-1 mb-2"><a href="/img/photo/photo-1426122402199-be02db90eb90.jpg"
                                                             data-fancybox="gallery" title="Our street"><img
                  className="img-fluid" src="/img/photo/photo-1426122402199-be02db90eb90.jpg" alt="..." /></a></div>
                <div className="col-lg-4 col-6 px-1 mb-2"><a href="img/photo/photo-1512917774080-9991f1c4c750.jpg"
                                                             data-fancybox="gallery" title="Outside"><img
                  className="img-fluid" src="/img/photo/photo-1512917774080-9991f1c4c750.jpg" alt="..." /></a></div>
                <div className="col-lg-4 col-6 px-1 mb-2"><a href="img/photo/photo-1494526585095-c41746248156.jpg"
                                                             data-fancybox="gallery" title="Rear entrance"><img
                  className="img-fluid" src="/img/photo/photo-1494526585095-c41746248156.jpg" alt="..." /></a></div>
                <div className="col-lg-4 col-6 px-1 mb-2"><a href="img/photo/photo-1484154218962-a197022b5858.jpg"
                                                             data-fancybox="gallery" title="Kitchen"><img
                  className="img-fluid" src="/img/photo/photo-1484154218962-a197022b5858.jpg" alt="..." /></a></div>
                <div className="col-lg-4 col-6 px-1 mb-2"><a href="img/photo/photo-1522771739844-6a9f6d5f14af.jpg"
                                                             data-fancybox="gallery" title="Bedroom"><img
                  className="img-fluid" src="/img/photo/photo-1522771739844-6a9f6d5f14af.jpg" alt="..." /></a></div>
                <div className="col-lg-4 col-6 px-1 mb-2"><a href="img/photo/photo-1488805990569-3c9e1d76d51c.jpg"
                                                             data-fancybox="gallery" title="Bedroom"><img
                  className="img-fluid" src="/img/photo/photo-1488805990569-3c9e1d76d51c.jpg" alt="..." /></a></div>
              </div>
            </div>
            <div className="text-block">
              <p className="subtitle text-sm text-primary">Reviews </p>
              <h5 className="mb-4">Listing Reviews </h5>
              <div className="media d-block d-sm-flex review">
                <div className="text-md-center mr-4 mr-xl-5"><img className="d-block avatar avatar-xl p-2 mb-2"
                                                                  src="/img/avatar/avatar-8.jpg"
                                                                  alt="Padmé Amidala" /><span
                  className="text-uppercase text-muted text-sm">Dec 2018</span></div>
                <div className="media-body">
                  <h6 className="mt-2 mb-1">Padmé Amidala</h6>
                  <div className="mb-2"><i className="fa fa-xs fa-star text-primary"></i><i
                    className="fa fa-xs fa-star text-primary"></i><i className="fa fa-xs fa-star text-primary"></i><i
                    className="fa fa-xs fa-star text-primary"></i><i className="fa fa-xs fa-star text-primary"></i>
                  </div>
                  <p className="text-muted text-sm">One morning, when Gregor Samsa woke from troubled dreams, he found
                    himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he
                    lifted his head a little he could see his brown belly, slightly domed and divided by arches into
                    stiff sections </p>
                </div>
              </div>
              <div className="media d-block d-sm-flex review">
                <div className="text-md-center mr-4 mr-xl-5"><img className="d-block avatar avatar-xl p-2 mb-2"
                                                                  src="/img/avatar/avatar-2.jpg"
                                                                  alt="Luke Skywalker" /><span
                  className="text-uppercase text-muted text-sm">Dec 2018</span></div>
                <div className="media-body">
                  <h6 className="mt-2 mb-1">Luke Skywalker</h6>
                  <div className="mb-2"><i className="fa fa-xs fa-star text-primary"></i><i
                    className="fa fa-xs fa-star text-primary"></i><i className="fa fa-xs fa-star text-primary"></i><i
                    className="fa fa-xs fa-star text-primary"></i><i className="fa fa-xs fa-star text-gray-200"></i>
                  </div>
                  <p className="text-muted text-sm">The bedding was hardly able to cover it and seemed ready to slide
                    off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about
                    helplessly as he looked. &quot;What's happened to me?&quot; he thought. It wasn't a dream. </p>
                </div>
              </div>
              <div className="media d-block d-sm-flex review">
                <div className="text-md-center mr-4 mr-xl-5"><img className="d-block avatar avatar-xl p-2 mb-2"
                                                                  src="/img/avatar/avatar-3.jpg"
                                                                  alt="Princess Leia" /><span
                  className="text-uppercase text-muted text-sm">Dec 2018</span></div>
                <div className="media-body">
                  <h6 className="mt-2 mb-1">Princess Leia</h6>
                  <div className="mb-2"><i className="fa fa-xs fa-star text-primary"></i><i
                    className="fa fa-xs fa-star text-primary"></i><i className="fa fa-xs fa-star text-primary"></i><i
                    className="fa fa-xs fa-star text-gray-200"></i><i className="fa fa-xs fa-star text-gray-200"></i>
                  </div>
                  <p className="text-muted text-sm">His room, a proper human room although a little too small, lay
                    peacefully between its four familiar walls. A collection of textile samples lay spread out on the
                    table. </p>
                </div>
              </div>
              <div className="media d-block d-sm-flex review">
                <div className="text-md-center mr-4 mr-xl-5"><img className="d-block avatar avatar-xl p-2 mb-2"
                                                                  src="/img/avatar/avatar-4.jpg" alt="Jabba Hut" /><span
                  className="text-uppercase text-muted text-sm">Dec 2018</span></div>
                <div className="media-body">
                  <h6 className="mt-2 mb-1">Jabba Hut</h6>
                  <div className="mb-2"><i className="fa fa-xs fa-star text-primary"></i><i
                    className="fa fa-xs fa-star text-primary"></i><i className="fa fa-xs fa-star text-primary"></i><i
                    className="fa fa-xs fa-star text-primary"></i><i className="fa fa-xs fa-star text-primary"></i>
                  </div>
                  <p className="text-muted text-sm">Samsa was a travelling salesman - and above it there hung a picture
                    that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. </p>
                </div>
              </div>
              <div className="py-5">
                <button className="btn btn-outline-primary" type="button" data-toggle="collapse"
                        data-target="#leaveReview" aria-expanded="false" aria-controls="leaveReview">Leave a review
                </button>
                <div className="collapse mt-4" id="leaveReview">
                  <h5 className="mb-4">Leave a review</h5>
                  <form className="form" id="contact-form" method="get" action="#">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label className="form-label" htmlFor="name">Your name *</label>
                          <input className="form-control" type="text" name="name" id="name"
                                 placeholder="Enter your name" required="required" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label className="form-label" htmlFor="rating">Your rating *</label>
                          <select className="custom-select focus-shadow-0" name="rating" id="rating">
                            <option value="5">&#9733;&#9733;&#9733;&#9733;&#9733; (5/5)</option>
                            <option value="4">&#9733;&#9733;&#9733;&#9733;&#9734; (4/5)</option>
                            <option value="3">&#9733;&#9733;&#9733;&#9734;&#9734; (3/5)</option>
                            <option value="2">&#9733;&#9733;&#9734;&#9734;&#9734; (2/5)</option>
                            <option value="1">&#9733;&#9734;&#9734;&#9734;&#9734; (1/5)</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">Your email *</label>
                      <input className="form-control" type="email" name="email" id="email"
                             placeholder="Enter your  email" required="required" />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="review">Review text *</label>
                      <textarea className="form-control" rows="4" name="review" id="review"
                                placeholder="Enter your review" required="required"></textarea>
                    </div>
                    <button className="btn btn-primary" type="submit">Post review</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="p-4 shadow ml-lg-4 rounded sticky-top" style={{top: "100px"}}>
              <p className="text-muted"><span className="text-primary h2">$120</span> per night</p>
              <hr className="my-4"/>
              <form className="form" id="booking-form" method="get" action="#" autoComplete="off">
                <div className="form-group">
                  <label className="form-label" htmlFor="bookingDate">Your stay *</label>
                  <div className="datepicker-container datepicker-container-right">
                    <input className="form-control" type="text" name="bookingDate" id="bookingDate"
                           placeholder="Choose your dates" required="required" />
                  </div>
                </div>
                <div className="form-group mb-4">
                  <label className="form-label" htmlFor="guests">Guests *</label>
                  <select className="form-control" name="guests" id="guests">
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5 Guests</option>
                  </select>
                </div>
                <div className="form-group">
                  <button className="btn btn-primary btn-block" type="submit">Book your stay</button>
                </div>
              </form>
              <p className="text-muted text-sm text-center">Some additional text can be also placed here.</p>
              <hr className="my-4"/>
              <div className="text-center">
                <p><a className="text-secondary text-sm" href="#"> <i className="fa fa-heart"></i> Bookmark This
                  Listing</a></p>
                <p className="text-muted text-sm">79 people bookmarked this place </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 bg-gray-100">
        <div className="container">
          <h5 className="mb-0">Similar places</h5>
          <p className="subtitle text-sm text-primary mb-4">You may also like </p>
          <div className="swiper-container swiper-container-mx-negative swiper-init pt-3"
               data-swiper="{&quot;slidesPerView&quot;:4,&quot;spaceBetween&quot;:20,&quot;loop&quot;:true,&quot;roundLengths&quot;:true,&quot;breakpoints&quot;:{&quot;1200&quot;:{&quot;slidesPerView&quot;:3},&quot;991&quot;:{&quot;slidesPerView&quot;:2},&quot;565&quot;:{&quot;slidesPerView&quot;:1}},&quot;pagination&quot;:{&quot;el&quot;:&quot;.swiper-pagination&quot;,&quot;clickable&quot;:true,&quot;dynamicBullets&quot;:true}}">
            <div className="swiper-wrapper pb-5">
              <div className="swiper-slide h-auto px-2">
                <div className="w-100 h-100 hover-animate" data-marker-id="59c0c8e33b1527bfe2abaf92">
                  <div className="card h-100 border-0 shadow">
                    <div className="card-img-top overflow-hidden gradient-overlay"><img className="img-fluid"
                                                                                        src="/img/photo/photo-1484154218962-a197022b5858.jpg"
                                                                                        alt="Modern, Well-Appointed Room"/><a
                      className="tile-link" href="detail-rooms.html"></a>
                      <div className="card-img-overlay-bottom z-index-20">
                        <div className="media text-white text-sm align-items-center"><img
                          className="avatar avatar-border-white mr-2" src="/img/avatar/avatar-0.jpg" alt="Pamela"/>
                          <div className="media-body">Pamela</div>
                        </div>
                      </div>
                      <div className="card-img-overlay-top text-right"><a
                        className="card-fav-icon position-relative z-index-40" href="#">
                        <svg className="svg-icon text-white">
                          <use xlinkHref="#heart-1"></use>
                        </svg>
                      </a></div>
                    </div>
                    <div className="card-body d-flex align-items-center">
                      <div className="w-100">
                        <h6 className="card-title"><a className="text-decoration-none text-dark"
                                                      href="detail-rooms.html">Modern, Well-Appointed Room</a></h6>
                        <div className="d-flex card-subtitle mb-3">
                          <p className="flex-grow-1 mb-0 text-muted text-sm">Private room</p>
                          <p className="flex-shrink-1 mb-0 card-stars text-xs text-right"><i
                            className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i
                            className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i
                            className="fa fa-star text-warning"></i>
                          </p>
                        </div>
                        <p className="card-text text-muted"><span className="h4 text-primary">$80</span> per night</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide h-auto px-2">
                <div className="w-100 h-100 hover-animate" data-marker-id="59c0c8e322f3375db4d89128">
                  <div className="card h-100 border-0 shadow">
                    <div className="card-img-top overflow-hidden gradient-overlay"><img className="img-fluid"
                                                                                        src="/img/photo/photo-1426122402199-be02db90eb90.jpg"
                                                                                        alt="Cute Quirky Garden apt, NYC adjacent"/><a
                      className="tile-link" href="detail-rooms.html"></a>
                      <div className="card-img-overlay-bottom z-index-20">
                        <div className="media text-white text-sm align-items-center"><img
                          className="avatar avatar-border-white mr-2" src="/img/avatar/avatar-7.jpg" alt="John"/>
                          <div className="media-body">John</div>
                        </div>
                      </div>
                      <div className="card-img-overlay-top text-right"><a
                        className="card-fav-icon position-relative z-index-40" href="#;">
                        <svg className="svg-icon text-white">
                          <use xlinkHref="#heart-1"></use>
                        </svg>
                      </a></div>
                    </div>
                    <div className="card-body d-flex align-items-center">
                      <div className="w-100">
                        <h6 className="card-title"><a className="text-decoration-none text-dark"
                                                      href="detail-rooms.html">Cute Quirky Garden apt, NYC adjacent</a>
                        </h6>
                        <div className="d-flex card-subtitle mb-3">
                          <p className="flex-grow-1 mb-0 text-muted text-sm">Entire apartment</p>
                          <p className="flex-shrink-1 mb-0 card-stars text-xs text-right"><i
                            className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i
                            className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i
                            className="fa fa-star text-gray-300"> </i>
                          </p>
                        </div>
                        <p className="card-text text-muted"><span className="h4 text-primary">$121</span> per night</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide h-auto px-2">
                <div className="w-100 h-100 hover-animate" data-marker-id="59c0c8e3a31e62979bf147c9">
                  <div className="card h-100 border-0 shadow">
                    <div className="card-img-top overflow-hidden gradient-overlay"><img className="img-fluid"
                                                                                        src="/img/photo/photo-1512917774080-9991f1c4c750.jpg"
                                                                                        alt="Modern Apt - Vibrant Neighborhood!"/><a
                      className="tile-link" href="detail-rooms.html"></a>
                      <div className="card-img-overlay-bottom z-index-20">
                        <div className="media text-white text-sm align-items-center"><img
                          className="avatar avatar-border-white mr-2" src="/img/avatar/avatar-8.jpg" alt="Julie"/>
                          <div className="media-body">Julie</div>
                        </div>
                      </div>
                      <div className="card-img-overlay-top text-right"><a
                        className="card-fav-icon position-relative z-index-40" href="#">
                        <svg className="svg-icon text-white">
                          <use xlinkHref="#heart-1"></use>
                        </svg>
                      </a></div>
                    </div>
                    <div className="card-body d-flex align-items-center">
                      <div className="w-100">
                        <h6 className="card-title"><a className="text-decoration-none text-dark"
                                                      href="detail-rooms.html">Modern Apt - Vibrant Neighborhood!</a>
                        </h6>
                        <div className="d-flex card-subtitle mb-3">
                          <p className="flex-grow-1 mb-0 text-muted text-sm">Entire apartment</p>
                          <p className="flex-shrink-1 mb-0 card-stars text-xs text-right"><i
                            className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i
                            className="fa fa-star text-warning"></i><i className="fa fa-star text-gray-300"> </i><i
                            className="fa fa-star text-gray-300"> </i>
                          </p>
                        </div>
                        <p className="card-text text-muted"><span className="h4 text-primary">$75</span> per night</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide h-auto px-2">
                <div className="w-100 h-100 hover-animate" data-marker-id="59c0c8e3503eb77d487e8082">
                  <div className="card h-100 border-0 shadow">
                    <div className="card-img-top overflow-hidden gradient-overlay"><img className="img-fluid"
                                                                                        src="/img/photo/photo-1494526585095-c41746248156.jpg"
                                                                                        alt="Sunny Private Studio-Apartment"/><a
                      className="tile-link" href="detail-rooms.html"></a>
                      <div className="card-img-overlay-bottom z-index-20">
                        <div className="media text-white text-sm align-items-center"><img
                          className="avatar avatar-border-white mr-2" src="/img/avatar/avatar-9.jpg" alt="Barbora"/>
                          <div className="media-body">Barbora</div>
                        </div>
                      </div>
                      <div className="card-img-overlay-top text-right"><a
                        className="card-fav-icon position-relative z-index-40" href="#">
                        <svg className="svg-icon text-white">
                          <use xlinkHref="#heart-1"></use>
                        </svg>
                      </a></div>
                    </div>
                    <div className="card-body d-flex align-items-center">
                      <div className="w-100">
                        <h6 className="card-title"><a className="text-decoration-none text-dark"
                                                      href="detail-rooms.html">Sunny Private Studio-Apartment</a></h6>
                        <div className="d-flex card-subtitle mb-3">
                          <p className="flex-grow-1 mb-0 text-muted text-sm">Shared room</p>
                          <p className="flex-shrink-1 mb-0 card-stars text-xs text-right"><i
                            className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i
                            className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i
                            className="fa fa-star text-gray-300"> </i>
                          </p>
                        </div>
                        <p className="card-text text-muted"><span className="h4 text-primary">$93</span> per night</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide h-auto px-2">
                <div className="w-100 h-100 hover-animate" data-marker-id="59c0c8e39aa2eed0626e485d">
                  <div className="card h-100 border-0 shadow">
                    <div className="card-img-top overflow-hidden gradient-overlay"><img className="img-fluid"
                                                                                        src="/img/photo/photo-1522771739844-6a9f6d5f14af.jpg"
                                                                                        alt="Mid-Century Modern Garden Paradise"/><a
                      className="tile-link" href="detail-rooms.html"></a>
                      <div className="card-img-overlay-bottom z-index-20">
                        <div className="media text-white text-sm align-items-center"><img
                          className="avatar avatar-border-white mr-2" src="/img/avatar/avatar-10.jpg" alt="Jack"/>
                          <div className="media-body">Jack</div>
                        </div>
                      </div>
                      <div className="card-img-overlay-top text-right"><a
                        className="card-fav-icon position-relative z-index-40" href="#">
                        <svg className="svg-icon text-white">
                          <use xlinkHref="#heart-1"></use>
                        </svg>
                      </a></div>
                    </div>
                    <div className="card-body d-flex align-items-center">
                      <div className="w-100">
                        <h6 className="card-title"><a className="text-decoration-none text-dark"
                                                      href="detail-rooms.html">Mid-Century Modern Garden Paradise</a>
                        </h6>
                        <div className="d-flex card-subtitle mb-3">
                          <p className="flex-grow-1 mb-0 text-muted text-sm">Entire house</p>
                          <p className="flex-shrink-1 mb-0 card-stars text-xs text-right"><i
                            className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i
                            className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i
                            className="fa fa-star text-warning"></i>
                          </p>
                        </div>
                        <p className="card-text text-muted"><span className="h4 text-primary">$115</span> per night</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide h-auto px-2">
                <div className="w-100 h-100 hover-animate" data-marker-id="59c0c8e39aa2edasd626e485d">
                  <div className="card h-100 border-0 shadow">
                    <div className="card-img-top overflow-hidden gradient-overlay"><img className="img-fluid"
                                                                                        src="/img/photo/photo-1488805990569-3c9e1d76d51c.jpg"
                                                                                        alt="Brooklyn Life, Easy to Manhattan"/><a
                      className="tile-link" href="detail-rooms.html"></a>
                      <div className="card-img-overlay-bottom z-index-20">
                        <div className="media text-white text-sm align-items-center"><img
                          className="avatar avatar-border-white mr-2" src="/img/avatar/avatar-11.jpg" alt="Stuart"/>
                          <div className="media-body">Stuart</div>
                        </div>
                      </div>
                      <div className="card-img-overlay-top text-right"><a
                        className="card-fav-icon position-relative z-index-40" href="#">
                        <svg className="svg-icon text-white">
                          <use xlinkHref="#heart-1"></use>
                        </svg>
                      </a></div>
                    </div>
                    <div className="card-body d-flex align-items-center">
                      <div className="w-100">
                        <h6 className="card-title"><a className="text-decoration-none text-dark"
                                                      href="detail-rooms.html">Brooklyn Life, Easy to Manhattan</a></h6>
                        <div className="d-flex card-subtitle mb-3">
                          <p className="flex-grow-1 mb-0 text-muted text-sm">Private room</p>
                          <p className="flex-shrink-1 mb-0 card-stars text-xs text-right"><i
                            className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i
                            className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i
                            className="fa fa-star text-gray-300"> </i>
                          </p>
                        </div>
                        <p className="card-text text-muted"><span className="h4 text-primary">$123</span> per night</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </Layout>
  )
};


const mapStateToProps = state => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile
});

export default compose(
  connect(mapStateToProps),
  withFirebase,
  withRouter
)(Product);