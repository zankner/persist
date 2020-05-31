import React from 'react';
import Layout from '../../components/Layout';
import {compose} from 'redux';
import {withFirebase} from 'react-redux-firebase';
import {withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Swiper from 'react-id-swiper';

const Home = props => {
  return (
    <Layout>
      <div className="pt-nav">
        <section className="d-flex align-items-center dark-overlay bg-cover"
                 style={{backgroundImage: `url(img/photo/photo-1525610553991-2bede1a236e2.jpg)`}}>
          <div className="container py-6 py-lg-7 text-white overlay-content text-center">
            <div className="row">
              <div className="col-xl-10 mx-auto">
                <h1 className="display-3 font-weight-bold text-shadow">Discover Directory</h1>
                <p className="text-lg text-shadow">Uncover the best places to eat, drink, and shop nearest to you.</p>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="search-bar rounded p-3 p-lg-4 position-relative mt-n5 z-index-20">
            <form action="#">
              <div className="row">
                <div className="col-lg-4 d-flex align-items-center form-group">
                  <input className="form-control border-0 shadow-0" type="search" name="search"
                         placeholder="What are you searching for?"/>
                </div>
                <div className="col-md-6 col-lg-3 d-flex align-items-center form-group">
                  <div className="input-label-absolute input-label-absolute-right w-100">
                    <label className="label-absolute" htmlFor="location"><i className="fa fa-crosshairs"/>
                      <div className="sr-only">City</div>
                    </label>
                    <input className="form-control border-0 shadow-0" type="text" name="location" placeholder="Location"
                           id="location"/>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 d-flex align-items-center form-group no-divider">
                  <select className="selectpicker" title="Categories" data-style="btn-form-control">
                    <option value="small">Restaurants</option>
                    <option value="medium">Hotels</option>
                    <option value="large">Cafes</option>
                    <option value="x-large">Garages</option>
                  </select>
                </div>
                <div className="col-lg-2 form-group mb-0">
                  <button className="btn btn-primary btn-block h-100" type="submit">Search</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <section className="py-6">
          <div className="container">
            <div className="text-center pb-lg-4">
              <p className="subtitle text-secondary">Try something new today</p>
              <h2 className="mb-5">Popular places around you</h2>
            </div>
          </div>
          <div className="container-fluid">
            <Swiper
              containerClass="swiper-container"
              spacebetween={20}
              loop={true}
              roundLengths
              slidesPerView={5}
              breakpoints={{
                1600: {slidesPerView: 5},
                1400: {slidesPerView: 4},
                1200: {slidesPerView: 3},
                991: {slidesPerView: 2},
                565: {slidesPerView: 1},
              }}
            >
              <div className="h-auto hover-animate px-2 my-3">
                <div className="card h-100 border-0 shadow">
                  <div className="card-img-top overflow-hidden dark-overlay bg-cover"
                       style={{
                         backgroundImage: 'url(img/photo/restaurant-1430931071372-38127bd472b8.jpg)',
                         minHeight: "200px"
                       }}>
                    <Link className="tile-link" to="/" />
                    <div className="card-img-overlay-bottom z-index-20">
                      <h4 className="text-white text-shadow">Blue Hill</h4>
                      <p className="mb-2 text-xs"><i className="fa fa-star text-warning"/><i
                        className="fa fa-star text-warning"/><i className="fa fa-star text-warning"/><i
                        className="fa fa-star text-warning"/><i className="fa fa-star text-gray-300"> </i>
                      </p>
                    </div>
                    <div className="card-img-overlay-top d-flex justify-content-between align-items-center">
                      <div className="badge badge-transparent badge-pill px-3 py-2">Restaurants</div>
                      <Link className="card-fav-icon position-relative z-index-40" to="/">
                        <svg className="svg-icon text-white">
                          <use xlinkHref="#heart-1"/>
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <div className="card-body">
                    <p className="text-sm text-muted mb-3"> Cupidatat excepteur non dolore laborum et quis nostrud
                      veniam
                      dolore deserunt. Pariatur dolore ut in elit id nulla. Irur...</p>
                    <p className="text-sm text-muted text-uppercase mb-1">By <Link to="/" className="text-dark">Matt
                      Damon</Link></p>
                    <p className="text-sm mb-0"><Link className="mr-1" to="/">Restaurant,</Link><Link className="mr-1"
                                                                                               to="/">Contemporary</Link>
                    </p>
                  </div>
                </div>
              </div>
            </Swiper>
            <div className="text-center mt-5"><Link className="btn btn-outline-primary" to="/">See all
              places</Link></div>
          </div>
        </section>
        <section className="py-6 bg-gray-100">
          <div className="container">
            <div className="pb-lg-4">
              <p className="subtitle text-secondary">Why us?</p>
              <h2 className="mb-5">Discover the best businesses around you</h2>
            </div>
            <div className="row">
              <div className="col-sm-6 col-lg-4 mb-3 mb-lg-0">
                <div className="px-0 pr-lg-4">
                  <div className="icon-rounded mb-3 bg-primary-light">
                    <svg className="svg-icon w-2rem h-2rem text-primary">
                      <use xlinkHref="#store-1"/>
                    </svg>
                  </div>
                  <h3 className="h6 text-uppercase">Find your favorite shops</h3>
                  <p className="text-muted text-sm">Shop from stores you love and discover your new favorite places.</p>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 mb-3 mb-lg-0">
                <div className="px-0 pr-lg-4">
                  <div className="icon-rounded mb-3 bg-secondary-light">
                    <svg className="svg-icon w-2rem h-2rem text-secondary">
                      <use xlinkHref="#delivery-time-1"></use>
                    </svg>
                  </div>
                  <h3 className="h6 text-uppercase">Schedule a pickup</h3>
                  <p className="text-muted text-sm">Find a time to pick up or have your order dropped off.
                    Stay socially distant at your convenience.</p>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 mb-3 mb-lg-0">
                <div className="px-0 pr-lg-4">
                  <div className="icon-rounded mb-3 bg-primary-light">
                    <svg className="svg-icon w-2rem h-2rem text-primary">
                      <use xlinkHref="#giftbox-1"/>
                    </svg>
                  </div>
                  <h3 className="h6 text-uppercase">Enjoy</h3>
                  <p className="text-muted text-sm">Sit back, relax, and enjoy your order </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

const mapStateToProps = state => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile
});

export default compose(
  connect(mapStateToProps),
  withFirebase,
  withRouter
)(Home);
