import React, { useState } from 'react';
import Layout from '../../../components/Layout';
import { compose } from 'redux';
import { withFirebase } from 'react-redux-firebase';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


const Business = props => {

    return (
        <Layout >
            <div className="pt-nav">
              <section className="pt-7 pb-5 d-flex align-items-end dark-overlay bg-cover"
                       style={{backgroundImage: "url('/img/photo/restaurant-1515164783716-8e6920f3e77c.jpg')"}}>
                <div className="container overlay-content">
                  <div
                    className="d-flex justify-content-between align-items-start flex-column flex-lg-row align-items-lg-end">
                    <div className="text-white mb-4 mb-lg-0">
                      <div className="badge badge-pill badge-transparent px-3 py-2 mb-4">Eat &amp; Drink</div>
                      <h1 className="text-shadow verified">Fifteen Restaurant & Bar</h1>
                      <p><i className="fa-map-marker-alt fas mr-2"></i> 53 Broadway, Brooklyn, NY 1129</p>
                      <p className="mb-0 d-flex align-items-center"><i className="fa fa-xs fa-star text-primary"></i><i
                        className="fa fa-xs fa-star text-primary"></i><i
                        className="fa fa-xs fa-star text-primary"></i><i
                        className="fa fa-xs fa-star text-primary"></i><i
                        className="fa fa-xs fa-star text-gray-200 mr-4"> </i>8 Reviews</p>
                    </div>
                    <div className="calltoactions"><a className="btn btn-primary" href="#leaveReview"
                                                      onClick="$('#leaveReview').collapse('show')" data-smooth-scroll>Leave
                      a Review</a></div>
                  </div>
                </div>
              </section>
              <section className="py-6">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="text-block">
                        <h3 className="mb-3">About</h3>
                        <p className="text-muted"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                          dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                        <p className="text-muted"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                          id est laborum.</p>
                      </div>
                      <div className="text-block">
                        <h3 className="mb-4">Location</h3>
                        <div className="map-wrapper-300 mb-3">
                          <div className="h-100" id="detailMap"></div>
                        </div>
                      </div>
                      <div className="text-block">
                        <h3 className="mb-4">Gallery</h3>
                        <div className="row gallery ml-n1 mr-n1">
                          <div className="col-lg-4 col-6 px-1 mb-2"><a
                            href="img/photo/restaurant-1515164783716-8e6920f3e77c.jpg"><img className="img-fluid"
                                                                                            src="/img/photo/restaurant-1515164783716-8e6920f3e77c.jpg"
                                                                                            alt="..." /></a></div>
                          <div className="col-lg-4 col-6 px-1 mb-2"><a
                            href="img/photo/restaurant-1466978913421-dad2ebd01d17.jpg"><img className="img-fluid"
                                                                                            src="/img/photo/restaurant-1466978913421-dad2ebd01d17.jpg"
                                                                                            alt="..." /></a></div>
                          <div className="col-lg-4 col-6 px-1 mb-2"><a
                            href="img/photo/restaurant-1477763858572-cda7deaa9bc5.jpg"><img className="img-fluid"
                                                                                            src="/img/photo/restaurant-1477763858572-cda7deaa9bc5.jpg"
                                                                                            alt="..." /></a></div>
                          <div className="col-lg-4 col-6 px-1 mb-2"><a
                            href="img/photo/restaurant-1505275350441-83dcda8eeef5.jpg"><img className="img-fluid"
                                                                                            src="/img/photo/restaurant-1505275350441-83dcda8eeef5.jpg"
                                                                                            alt="..." /></a></div>
                          <div className="col-lg-4 col-6 px-1 mb-2"><a
                            href="img/photo/restaurant-1508766917616-d22f3f1eea14.jpg"><img className="img-fluid"
                                                                                            src="/img/photo/restaurant-1508766917616-d22f3f1eea14.jpg"
                                                                                            alt="..." /></a></div>
                          <div className="col-lg-4 col-6 px-1 mb-2"><a
                            href="img/photo/restaurant-1430931071372-38127bd472b8.jpg"><img className="img-fluid"
                                                                                            src="/img/photo/restaurant-1430931071372-38127bd472b8.jpg"
                                                                                            alt="..." /></a></div>
                        </div>
                      </div>
                      <div className="text-block">
                        <h3 className="mb-4">Amenities</h3>
                        <ul className="amenities-list list-inline">
                          <li className="list-inline-item mb-3">
                            <div className="d-flex align-items-center">
                              <div className="icon-circle bg-secondary mr-2"><i className="fa fa-check"></i></div>
                              <span>Elevator</span>
                            </div>
                          </li>
                          <li className="list-inline-item mb-3">
                            <div className="d-flex align-items-center">
                              <div className="icon-circle bg-secondary mr-2"><i className="fa fa-check"></i></div>
                              <span>Vegan friendly</span>
                            </div>
                          </li>
                          <li className="list-inline-item mb-3">
                            <div className="d-flex align-items-center">
                              <div className="icon-circle bg-secondary mr-2"><i className="fa fa-check"></i></div>
                              <span>Alcohol served</span>
                            </div>
                          </li>
                          <li className="list-inline-item mb-3">
                            <div className="d-flex align-items-center">
                              <div className="icon-circle bg-secondary mr-2"><i className="fa fa-check"></i></div>
                              <span>No smoking</span>
                            </div>
                          </li>
                          <li className="list-inline-item mb-3">
                            <div className="d-flex align-items-center">
                              <div className="icon-circle bg-secondary mr-2"><i className="fa fa-check"></i></div>
                              <span>Parking spaces (paid)</span>
                            </div>
                          </li>
                          <li className="list-inline-item mb-3">
                            <div className="d-flex align-items-center">
                              <div className="icon-circle bg-secondary mr-2"><i className="fa fa-check"></i></div>
                              <span>WiFi</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="text-block">
                        <p className="subtitle text-sm text-primary">Reviews </p>
                        <h5 className="mb-4">Listing Reviews </h5>
                        <div className="media d-block d-sm-flex review">
                          <div className="text-md-center mr-4 mr-xl-5"><img
                            className="d-block avatar avatar-xl p-2 mb-2" src="/img/avatar/avatar-8.jpg"
                            alt="Padmé Amidala" /><span className="text-uppercase text-muted text-sm">Dec 2018</span>
                          </div>
                          <div className="media-body">
                            <h6 className="mt-2 mb-1">Padmé Amidala</h6>
                            <div className="mb-2"><i className="fa fa-xs fa-star text-primary"></i><i
                              className="fa fa-xs fa-star text-primary"></i><i
                              className="fa fa-xs fa-star text-primary"></i><i
                              className="fa fa-xs fa-star text-primary"></i><i
                              className="fa fa-xs fa-star text-primary"></i>
                            </div>
                            <p className="text-muted text-sm">One morning, when Gregor Samsa woke from troubled dreams,
                              he found himself transformed in his bed into a horrible vermin. He lay on his armour-like
                              back, and if he lifted his head a little he could see his brown belly, slightly domed and
                              divided by arches into stiff sections </p>
                          </div>
                        </div>
                        <div className="media d-block d-sm-flex review">
                          <div className="text-md-center mr-4 mr-xl-5"><img
                            className="d-block avatar avatar-xl p-2 mb-2" src="/img/avatar/avatar-2.jpg"
                            alt="Luke Skywalker" /><span className="text-uppercase text-muted text-sm">Dec 2018</span>
                          </div>
                          <div className="media-body">
                            <h6 className="mt-2 mb-1">Luke Skywalker</h6>
                            <div className="mb-2"><i className="fa fa-xs fa-star text-primary"></i><i
                              className="fa fa-xs fa-star text-primary"></i><i
                              className="fa fa-xs fa-star text-primary"></i><i
                              className="fa fa-xs fa-star text-primary"></i><i
                              className="fa fa-xs fa-star text-gray-200"></i>
                            </div>
                            <p className="text-muted text-sm">The bedding was hardly able to cover it and seemed ready
                              to slide off any moment. His many legs, pitifully thin compared with the size of the rest
                              of him, waved about helplessly as he looked. &quot;What's happened to me?&quot; he
                              thought. It wasn't a dream. </p>
                          </div>
                        </div>
                        <div className="media d-block d-sm-flex review">
                          <div className="text-md-center mr-4 mr-xl-5"><img
                            className="d-block avatar avatar-xl p-2 mb-2" src="/img/avatar/avatar-3.jpg"
                            alt="Princess Leia" /><span className="text-uppercase text-muted text-sm">Dec 2018</span>
                          </div>
                          <div className="media-body">
                            <h6 className="mt-2 mb-1">Princess Leia</h6>
                            <div className="mb-2"><i className="fa fa-xs fa-star text-primary"></i><i
                              className="fa fa-xs fa-star text-primary"></i><i
                              className="fa fa-xs fa-star text-primary"></i><i
                              className="fa fa-xs fa-star text-gray-200"></i><i
                              className="fa fa-xs fa-star text-gray-200"></i>
                            </div>
                            <p className="text-muted text-sm">His room, a proper human room although a little too small,
                              lay peacefully between its four familiar walls. A collection of textile samples lay spread
                              out on the table. </p>
                          </div>
                        </div>
                        <div className="media d-block d-sm-flex review">
                          <div className="text-md-center mr-4 mr-xl-5"><img
                            className="d-block avatar avatar-xl p-2 mb-2" src="/img/avatar/avatar-4.jpg" alt="Jabba Hut" /><span
                            className="text-uppercase text-muted text-sm">Dec 2018</span></div>
                          <div className="media-body">
                            <h6 className="mt-2 mb-1">Jabba Hut</h6>
                            <div className="mb-2"><i className="fa fa-xs fa-star text-primary"></i><i
                              className="fa fa-xs fa-star text-primary"></i><i
                              className="fa fa-xs fa-star text-primary"></i><i
                              className="fa fa-xs fa-star text-primary"></i><i
                              className="fa fa-xs fa-star text-primary"></i>
                            </div>
                            <p className="text-muted text-sm">Samsa was a travelling salesman - and above it there hung
                              a picture that he had recently cut out of an illustrated magazine and housed in a nice,
                              gilded frame. </p>
                          </div>
                        </div>
                        <div className="py-5">
                          <button className="btn btn-outline-primary" type="button" data-toggle="collapse"
                                  data-target="#leaveReview" aria-expanded="false" aria-controls="leaveReview">Leave a
                            review
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
                      <div className="pl-xl-4">
                        <div className="card border-0 shadow mb-5">
                          <div className="card-header bg-gray-100 py-4 border-0">
                            <div className="media align-items-center">
                              <div className="media-body">
                                <p className="subtitle text-sm text-primary">Opening in 5 minutes</p>
                                <h4 className="mb-0">Opening Hours </h4>
                              </div>
                              <svg className="svg-icon svg-icon svg-icon-light w-3rem h-3rem ml-3 text-muted">
                                <use xlinkHref="#wall-clock-1"></use>
                              </svg>
                            </div>
                          </div>
                          <div className="card-body">
                            <table className="table text-sm mb-0">
                              <tr>
                                <th className="pl-0 border-0">Sunday</th>
                                <td className="pr-0 text-right border-0">8:00 am - 6:00 pm</td>
                              </tr>
                              <tr>
                                <th className="pl-0">Monday</th>
                                <td className="pr-0 text-right">8:00 am - 6:00 pm</td>
                              </tr>
                              <tr>
                                <th className="pl-0">Tuesday</th>
                                <td className="pr-0 text-right">8:00 am - 6:00 pm</td>
                              </tr>
                              <tr>
                                <th className="pl-0">Wednesday</th>
                                <td className="pr-0 text-right">8:00 am - 6:00 pm</td>
                              </tr>
                              <tr>
                                <th className="pl-0">Thursday</th>
                                <td className="pr-0 text-right">8:00 am - 6:00 pm</td>
                              </tr>
                              <tr>
                                <th className="pl-0">Friday</th>
                                <td className="pr-0 text-right">8:00 am - 6:00 pm</td>
                              </tr>
                              <tr>
                                <th className="pl-0">Saturday</th>
                                <td className="pr-0 text-right">Closed</td>
                              </tr>
                            </table>
                          </div>
                        </div>
                        <div className="card border-0 shadow mb-5">
                          <div className="card-header bg-gray-100 py-4 border-0">
                            <div className="media align-items-center">
                              <div className="media-body">
                                <p className="subtitle text-sm text-primary">Drop Us a Line</p>
                                <h4 className="mb-0">Contact</h4>
                              </div>
                              <svg className="svg-icon svg-icon svg-icon-light w-3rem h-3rem ml-3 text-muted">
                                <use xlinkHref="#fountain-pen-1"></use>
                              </svg>
                            </div>
                          </div>
                          <div className="card-body">
                            <ul className="list-unstyled mb-4">
                              <li className="mb-2"><a className="text-gray-00 text-sm text-decoration-none" href="#"><i
                                className="fa fa-phone mr-3"></i><span
                                className="text-muted">(020) 123 456 789</span></a></li>
                              <li className="mb-2"><a className=" text-sm text-decoration-none" href="#"><i
                                className="fa fa-envelope mr-3"></i><span className="text-muted">info@example.com</span></a>
                              </li>
                              <li className="mb-2"><a className=" text-sm text-decoration-none" href="#"><i
                                className="fa fa-globe mr-3"></i><span className="text-muted">www.example.com</span></a>
                              </li>
                              <li className="mb-2"><a className="text-blue text-sm text-decoration-none" href="#"><i
                                className="fab fa-facebook mr-3"></i><span className="text-muted">Facebook</span></a>
                              </li>
                              <li className="mb-2"><a className=" text-sm text-decoration-none" href="#"><i
                                className="fab fa-twitter mr-3"></i><span className="text-muted">Twitter</span></a></li>
                              <li className="mb-2"><a className=" text-sm text-decoration-none" href="#"><i
                                className="fab fa-instagram mr-3"></i><span className="text-muted">Instagram</span></a>
                              </li>
                              <li className="mb-2"><a className=" text-sm text-decoration-none" href="#"><i
                                className="fab fa-google-plus mr-3"></i><span className="text-muted">Google+</span></a>
                              </li>
                            </ul>
                            <div className="text-center"><a className="btn btn-outline-primary btn-block" href="#"> <i
                              className="far fa-paper-plane mr-2"></i>Send a Message</a></div>
                          </div>
                        </div>
                        <div className="text-center">
                          <p><a className="text-secondary" href="#"> <i className="fa fa-heart"></i> Bookmark This
                            Listing</a></p><span>79 people bookmarked this place </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <div className="py-6 bg-gray-100">
                <div className="container">
                  <h5 className="mb-0">Similar places</h5>
                  <p className="subtitle text-sm text-primary mb-4">You may also like </p>
                  <div className="swiper-container swiper-container-mx-negative items-slider">
                    <div className="swiper-wrapper pb-5">
                      <div className="swiper-slide h-auto px-2">
                        <div className="w-100 h-100" data-marker-id="59c0c8e33b1527bfe2abaf92">
                          <div className="card h-100 border-0 shadow">
                            <div className="card-img-top overflow-hidden dark-overlay bg-cover"
                                 style={{backgroundImage: 'url(img/photo/restaurant-1430931071372-38127bd472b8.jpg)', minHeight: '200px'}}>
                              <a className="tile-link" href="detail.html"></a>
                              <div className="card-img-overlay-bottom z-index-20">
                                <h4 className="text-white text-shadow">Blue Hill</h4>
                                <p className="mb-2 text-xs"><i className="fa fa-star text-warning"></i><i
                                  className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i
                                  className="fa fa-star text-warning"></i><i className="fa fa-star text-gray-300"> </i>
                                </p>
                              </div>
                              <div className="card-img-overlay-top d-flex justify-content-between align-items-center">
                                <div className="badge badge-transparent badge-pill px-3 py-2">Restaurants</div>
                                <a className="card-fav-icon position-relative z-index-40" href="#">
                                  <svg className="svg-icon text-white">
                                    <use xlinkHref="#heart-1"></use>
                                  </svg>
                                </a>
                              </div>
                            </div>
                            <div className="card-body">
                              <p className="text-sm text-muted mb-3"> Cupidatat excepteur non dolore laborum et quis
                                nostrud veniam dolore deserunt. Pariatur dolore ut in elit id nulla. Irur...</p>
                              <p className="text-sm text-muted text-uppercase mb-1">By <a href="#"
                                                                                          className="text-dark">Matt
                                Damon</a></p>
                              <p className="text-sm mb-0"><a className="mr-1" href="#">Restaurant,</a><a
                                className="mr-1" href="#">Contemporary</a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide h-auto px-2">
                        <div className="w-100 h-100" data-marker-id="59c0c8e322f3375db4d89128">
                          <div className="card h-100 border-0 shadow">
                            <div className="card-img-top overflow-hidden dark-overlay bg-cover"
                                 style={{backgroundImage: 'url(img/photo/restaurant-1436018626274-89acd1d6ec9d.jpg)', minHeight: "200px"}}>
                              <a className="tile-link" href="detail.html"></a>
                              <div className="card-img-overlay-bottom z-index-20">
                                <h4 className="text-white text-shadow">Plutorque</h4>
                                <p className="mb-2 text-xs"><i className="fa fa-star text-warning"></i><i
                                  className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i
                                  className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i>
                                </p>
                              </div>
                              <div className="card-img-overlay-top d-flex justify-content-between align-items-center">
                                <div className="badge badge-transparent badge-pill px-3 py-2">Restaurant</div>
                                <a className="card-fav-icon position-relative z-index-40" href="#">
                                  <svg className="svg-icon text-white">
                                    <use xlinkHref="#heart-1"></use>
                                  </svg>
                                </a>
                              </div>
                            </div>
                            <div className="card-body">
                              <p className="text-sm text-muted mb-3"> Proident irure eiusmod velit veniam consectetur id
                                minim irure et nostrud mollit magna velit. Commodo amet proident aliq...</p>
                              <p className="text-sm text-muted text-uppercase mb-1">By <a href="#"
                                                                                          className="text-dark">Matt
                                Damon</a></p>
                              <p className="text-sm mb-0"><a className="mr-1" href="#">Restaurant,</a><a
                                className="mr-1" href="#">Fusion</a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide h-auto px-2">
                        <div className="w-100 h-100" data-marker-id="59c0c8e3a31e62979bf147c9">
                          <div className="card h-100 border-0 shadow">
                            <div className="card-img-top overflow-hidden dark-overlay bg-cover"
                                 style={{backgroundImage: 'url(img/photo/restaurant-1436018626274-89acd1d6ec9d.jpg)', minHeight: "200px"}}>
                              <a className="tile-link" href="detail.html"></a>
                              <div className="card-img-overlay-bottom z-index-20">
                                <h4 className="text-white text-shadow">Junipoor</h4>
                                <p className="mb-2 text-xs"><i className="fa fa-star text-warning"></i><i
                                  className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i
                                  className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i>
                                </p>
                              </div>
                              <div className="card-img-overlay-top d-flex justify-content-between align-items-center">
                                <div className="badge badge-transparent badge-pill px-3 py-2">Music club</div>
                                <a className="card-fav-icon position-relative z-index-40" href="#">
                                  <svg className="svg-icon text-white">
                                    <use xlinkHref="#heart-1"></use>
                                  </svg>
                                </a>
                              </div>
                            </div>
                            <div className="card-body">
                              <p className="text-sm text-muted mb-3"> Lorem amet ex duis in et fugiat consectetur
                                laborum eiusmod labore. Quis cupidatat et do dolor in in magna. Eu sit quis ...</p>
                              <p className="text-sm text-muted text-uppercase mb-1">By <a href="#"
                                                                                          className="text-dark">Matt
                                Damon</a></p>
                              <p className="text-sm mb-0"><a className="mr-1" href="#">Music,</a><a className="mr-1"
                                                                                                    href="#">Techno,</a><a
                                className="mr-1" href="#">House</a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide h-auto px-2">
                        <div className="w-100 h-100" data-marker-id="59c0c8e3503eb77d487e8082">
                          <div className="card h-100 border-0 shadow">
                            <div className="card-img-top overflow-hidden dark-overlay bg-cover"
                                 style={{backgroundImage: 'url(img/photo/restaurant-1436018626274-89acd1d6ec9d.jpg)', minHeight: "200px"}}>
                              <a className="tile-link" href="detail.html"></a>
                              <div className="card-img-overlay-bottom z-index-20">
                                <h4 className="text-white text-shadow">Musix</h4>
                                <p className="mb-2 text-xs"><i className="fa fa-star text-warning"></i><i
                                  className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i
                                  className="fa fa-star text-gray-300"> </i><i
                                  className="fa fa-star text-gray-300"> </i>
                                </p>
                              </div>
                              <div className="card-img-overlay-top d-flex justify-content-between align-items-center">
                                <div className="badge badge-transparent badge-pill px-3 py-2">Music club</div>
                                <a className="card-fav-icon position-relative z-index-40" href="#">
                                  <svg className="svg-icon text-white">
                                    <use xlinkHref="#heart-1"></use>
                                  </svg>
                                </a>
                              </div>
                            </div>
                            <div className="card-body">
                              <p className="text-sm text-muted mb-3"> Deserunt eiusmod Lorem proident consequat elit
                                culpa laboris ea cupidatat. Consequat dolore proident ipsum qui sint enim...</p>
                              <p className="text-sm text-muted text-uppercase mb-1">By <a href="#"
                                                                                          className="text-dark">Matt
                                Damon</a></p>
                              <p className="text-sm mb-0"><a className="mr-1" href="#">Music,</a><a className="mr-1"
                                                                                                    href="#">Club,</a><a
                                className="mr-1" href="#">Rock</a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide h-auto px-2">
                        <div className="w-100 h-100" data-marker-id="59c0c8e39aa2eed0626e485d">
                          <div className="card h-100 border-0 shadow">
                            <div className="card-img-top overflow-hidden dark-overlay bg-cover"
                                 style={{backgroundImage: 'url(img/photo/restaurant-1436018626274-89acd1d6ec9d.jpg)', minHeight: "200px"}}>
                              <a className="tile-link" href="detail.html"></a>
                              <div className="card-img-overlay-bottom z-index-20">
                                <h4 className="text-white text-shadow">Prosure</h4>
                                <p className="mb-2 text-xs"><i className="fa fa-star text-warning"></i><i
                                  className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i
                                  className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i>
                                </p>
                              </div>
                              <div className="card-img-overlay-top d-flex justify-content-between align-items-center">
                                <div className="badge badge-transparent badge-pill px-3 py-2">Restaurant</div>
                                <a className="card-fav-icon position-relative z-index-40" href="#">
                                  <svg className="svg-icon text-white">
                                    <use xlinkHref="#heart-1"></use>
                                  </svg>
                                </a>
                              </div>
                            </div>
                            <div className="card-body">
                              <p className="text-sm text-muted mb-3"> Cillum sunt reprehenderit ea non irure veniam
                                dolore commodo labore fugiat est consequat velit. Cupidatat nisi qui ad si...</p>
                              <p className="text-sm text-muted text-uppercase mb-1">By <a href="#"
                                                                                          className="text-dark">Matt
                                Damon</a></p>
                              <p className="text-sm mb-0"><a className="mr-1" href="#">Nisi,</a><a className="mr-1"
                                                                                                   href="#">Ex,</a><a
                                className="mr-1" href="#">Eiusmod</a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide h-auto px-2">
                        <div className="w-100 h-100" data-marker-id="59c0c8e39aa2edasd626e485d">
                          <div className="card h-100 border-0 shadow">
                            <div className="card-img-top overflow-hidden dark-overlay bg-cover"
                                 style={{backgroundImage: 'url(img/photo/restaurant-1436018626274-89acd1d6ec9d.jpg)', minHeight: "200px"}}>
                              <a className="tile-link" href="detail.html"></a>
                              <div className="card-img-overlay-bottom z-index-20">
                                <h4 className="text-white text-shadow">Take That</h4>
                                <p className="mb-2 text-xs"><i className="fa fa-star text-warning"></i><i
                                  className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i
                                  className="fa fa-star text-warning"></i><i className="fa fa-star text-gray-300"> </i>
                                </p>
                              </div>
                              <div className="card-img-overlay-top d-flex justify-content-between align-items-center">
                                <div className="badge badge-transparent badge-pill px-3 py-2">Café</div>
                                <a className="card-fav-icon position-relative z-index-40" href="#">
                                  <svg className="svg-icon text-white">
                                    <use xlinkHref="#heart-1"></use>
                                  </svg>
                                </a>
                              </div>
                            </div>
                            <div className="card-body">
                              <p className="text-sm text-muted mb-3"> Cillum sunt reprehenderit ea non irure veniam
                                dolore commodo labore fugiat est consequat velit. Cupidatat nisi qui ad si...</p>
                              <p className="text-sm text-muted text-uppercase mb-1">By <a href="#"
                                                                                          className="text-dark">Matt
                                Damon</a></p>
                              <p className="text-sm mb-0"><a className="mr-1" href="#">Nisi,</a><a className="mr-1"
                                                                                                   href="#">Ex,</a><a
                                className="mr-1" href="#">Eiusmod</a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-pagination"></div>
                  </div>
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
)(Business);