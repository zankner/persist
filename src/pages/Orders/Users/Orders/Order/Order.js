import React, { useState } from 'react';
import Layout from '../../../../../components/Layout';
import { compose } from 'redux';
import { withFirebase } from 'react-redux-firebase';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


const Order = props => {

  return (
    <Layout >
      <div className="pt-nav">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 col-xl-7 px-4 pb-4 pl-xl-5 pr-xl-5">
              <section className="mx-n4 mx-xl-n5 mb-4 mb-xl-5">
                <div className="swiper-container booking-detail-slider">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide"><img className="img-fluid"
                                                       src="/img/photo/photo-1426122402199-be02db90eb90.jpg"
                                                       alt="Our street" /></div>
                    <div className="swiper-slide"><img className="img-fluid"
                                                       src="/img/photo/photo-1512917774080-9991f1c4c750.jpg"
                                                       alt="Outside" /></div>
                    <div className="swiper-slide"><img className="img-fluid"
                                                       src="/img/photo/photo-1494526585095-c41746248156.jpg"
                                                       alt="Rear entrance" /></div>
                    <div className="swiper-slide"><img className="img-fluid"
                                                       src="/img/photo/photo-1484154218962-a197022b5858.jpg"
                                                       alt="Kitchen" /></div>
                    <div className="swiper-slide"><img className="img-fluid"
                                                       src="/img/photo/photo-1522771739844-6a9f6d5f14af.jpg"
                                                       alt="Bedroom" /></div>
                    <div className="swiper-slide"><img className="img-fluid"
                                                       src="/img/photo/photo-1488805990569-3c9e1d76d51c.jpg"
                                                       alt="Bedroom" /></div>
                  </div>
                  <div className="swiper-pagination swiper-pagination-white"></div>
                  <div className="swiper-button-prev swiper-button-white"></div>
                  <div className="swiper-button-next swiper-button-white"></div>
                </div>
              </section>
              <ol className="breadcrumb pl-0  justify-content-start">
                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                <li className="breadcrumb-item"><a href="user-grid.html">Your trips</a></li>
                <li className="breadcrumb-item active">Trip to London</li>
              </ol>
              <div className="text-block">
                <p className="subtitle">Monday Apr 17 - Tuesday Apr 18</p>
                <h1 className="hero-heading mb-3">Modern Apt - Vibrant Neighborhood</h1>
              </div>
              <div className="text-block">
                <h6 className="mb-4">1 night in London</h6>
                <div className="row mb-3">
                  <div className="col-md-6 d-flex align-items-center mb-3 mb-md-0">
                    <div className="date-tile mr-3">
                      <div className="text-uppercase"><span className="text-sm">Apr</span><br /><strong
                        className="text-lg">17</strong></div>
                    </div>
                    <p className="text-sm mb-0">Wednesday check-in<br />3PM - 7PM</p>
                  </div>
                  <div className="col-md-6 d-flex align-items-center">
                    <div className="date-tile mr-3">
                      <div className="text-uppercase"><span className="text-sm">Apr</span><br /><strong
                        className="text-lg">18</strong></div>
                    </div>
                    <p className="text-sm mb-0">Thursday check-out<br />11AM</p>
                  </div>
                </div>
              </div>
              <div className="text-block">
                <div className="row">
                  <div className="col-sm">
                    <h6>Address</h6>
                    <p className="text-muted">Ap #867, 859 Sit Rd., London</p>
                  </div>
                  <div className="col-sm">
                    <h6>Phone</h6>
                    <p className="text-muted">+421 454 897 545</p>
                  </div>
                </div>
              </div>
              <div className="text-block">
                <div className="media align-items-center mb-3">
                  <div className="media-body">
                    <h6>Entire appartment</h6>
                    <p className="text-muted mb-0">Hosted by <a href="user-profile.html" className="text-reset">Jack
                      London</a></p>
                  </div>
                  <a href="user-profile.html"><img className="avatar avatar-lg avatar-border-white ml-4"
                                                   src="/img/avatar/avatar-10.jpg" alt="Jack London" /></a>
                </div>
              </div>
              <div className="text-block">
                <h6 className="mb-3">Who's coming</h6>
                <div className="row mb-3">
                  <div className="col-auto text-center text-sm"><img className="avatar avatar-border-white mb-1"
                                                                     src="/img/avatar/avatar-0.jpg" alt="Ondrej" /><br />Ondrej
                  </div>
                  <div className="col-auto text-center text-sm"><img className="avatar avatar-border-white mb-1"
                                                                     src="/img/avatar/avatar-1.jpg" alt="Julie" /><br />Julie
                  </div>
                  <div className="col-auto text-center text-sm"><img className="avatar avatar-border-white mb-1"
                                                                     src="/img/avatar/avatar-2.jpg" alt="Barbora" /><br />Barbora
                  </div>
                </div>
              </div>
              <div className="text-block">
                <div className="row">
                  <div className="col">
                    <h6> Total cost</h6>
                    <p className="text-muted">$499.50</p>
                  </div>
                  <div className="col align-self-center">
                    <p className="text-right d-print-none"><a className="btn btn-link text-muted" href="#"><i
                      className="far fa-file mr-2"></i>Your invoice</a></p>
                  </div>
                </div>
              </div>
              <div className="text-block">
                <h6 className="mb-4">Things to keep in mind</h6>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <div className="media align-items-center mb-3">
                      <div className="icon-rounded icon-rounded-sm bg-secondary-light mr-4"><i
                        className="fa fas fa-child text-secondary fa-fw text-center"></i></div>
                      <div className="media-body"><span className="text-sm">Not suitable for children and infants - The entrance staircase doesn't have handrails</span>
                      </div>
                    </div>
                  </li>
                  <li className="mb-2">
                    <div className="media align-items-center mb-3">
                      <div className="icon-rounded icon-rounded-sm bg-secondary-light mr-4"><i
                        className="fa fas fa-glass-cheers text-secondary fa-fw text-center"></i></div>
                      <div className="media-body"><span className="text-sm">No parties or events</span></div>
                    </div>
                  </li>
                  <li className="mb-2">
                    <div className="media align-items-center mb-3">
                      <div className="icon-rounded icon-rounded-sm bg-secondary-light mr-4"><i
                        className="fa fa-smoking-ban text-secondary fa-fw text-center"></i></div>
                      <div className="media-body"><span className="text-sm">No smoking</span></div>
                    </div>
                  </li>
                  <li className="mb-2">
                    <div className="media align-items-center mb-3">
                      <div className="icon-rounded icon-rounded-sm bg-secondary-light mr-4"><i
                        className="fa fa-cat text-secondary fa-fw text-center"></i></div>
                      <div className="media-body"><span className="text-sm">No pets</span></div>
                    </div>
                  </li>
                </ul>
                <div className="collapse" id="moreRules">
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <div className="media align-items-center mb-3">
                        <div className="icon-rounded icon-rounded-sm bg-secondary-light mr-4"><i
                          className="fa fas fa-child text-secondary fa-fw text-center"></i></div>
                        <div className="media-body"><span className="text-sm">Not suitable for children and infants - The entrance staircase doesn't have handrails</span>
                        </div>
                      </div>
                    </li>
                    <li className="mb-2">
                      <div className="media align-items-center mb-3">
                        <div className="icon-rounded icon-rounded-sm bg-secondary-light mr-4"><i
                          className="fa fas fa-glass-cheers text-secondary fa-fw text-center"></i></div>
                        <div className="media-body"><span className="text-sm">No parties or events</span></div>
                      </div>
                    </li>
                    <li className="mb-2">
                      <div className="media align-items-center mb-3">
                        <div className="icon-rounded icon-rounded-sm bg-secondary-light mr-4"><i
                          className="fa fa-smoking-ban text-secondary fa-fw text-center"></i></div>
                        <div className="media-body"><span className="text-sm">No smoking</span></div>
                      </div>
                    </li>
                    <li className="mb-2">
                      <div className="media align-items-center mb-3">
                        <div className="icon-rounded icon-rounded-sm bg-secondary-light mr-4"><i
                          className="fa fa-cat text-secondary fa-fw text-center"></i></div>
                        <div className="media-body"><span className="text-sm">No pets</span></div>
                      </div>
                    </li>
                  </ul>
                </div>
                <button className="btn btn-link btn-collapse pl-0 text-muted" type="button" data-toggle="collapse"
                        data-target="#moreRules" aria-expanded="false" aria-controls="moreRules"
                        data-expanded-text="Show less" data-collapsed-text="Show more">Show more
                </button>
              </div>
              <div className="text-block d-print-none">
                <button className="btn btn-link pl-0" onClick="window.print()"><i className="fa fa-print mr-2"></i>Print
                </button>
              </div>
            </div>
            <div className="col-lg-5 col-xl-5 map-side-lg px-lg-0">
              <div className="map-full shadow-left" id="detailSideMap"></div>
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
)(Order);