import React from 'react';
import Layout from '../../components/Layout';
import { compose } from 'redux';
import { withFirebase } from 'react-redux-firebase';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Swiper from 'react-id-swiper';

const Search = props => {
  return (
    <Layout>
      <div className="pt-nav">
        <div className="container-fluid pt-5 pb-3 border-bottom px-lg-5">
          <div className="row">
            <div className="col-xl-8">
              <h1>Stay on Manhattan, NY </h1>
              <p className="lead text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi.</p>
            </div>
          </div>
        </div>
        <div className="container-fluid py-5 px-lg-5">
          <div className="row">
            <div className="col-lg-3 pt-3">
              <form className="pr-xl-3" action="#" autoComplete="off">
                <div className="mb-4">
                  <label className="form-label" htmlFor="form_dates">Dates</label>
                  <div className="datepicker-container datepicker-container-left">
                    <input className="form-control" type="text" name="bookingDate" id="form_dates"
                           placeholder="Choose your dates" />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="form-label" htmlFor="form_guests">Guests</label>
                  <select className="selectpicker form-control" name="guests" id="form_guests"
                          data-style="btn-selectpicker" title=" ">
                    <option value="guests_0">1</option>
                    <option value="guests_1">2</option>
                    <option value="guests_2">3</option>
                    <option value="guests_3">4</option>
                    <option value="guests_4">5</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="form-label" htmlFor="form_type">Home type</label>
                  <select className="selectpicker form-control" name="type" id="form_type" multiple
                          data-style="btn-selectpicker" title="">
                    <option value="type_0">Entire place</option>
                    <option value="type_1">Private room</option>
                    <option value="type_2">Shared room</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="form-label">Price range</label>
                  <div className="text-primary" id="slider-snap"></div>
                  <div className="nouislider-values">
                    <div className="min">From $<span id="slider-snap-value-from"></span></div>
                    <div className="max">To $<span id="slider-snap-value-to"></span></div>
                  </div>
                  <input type="hidden" name="pricefrom" id="slider-snap-input-from" value="40" />
                    <input type="hidden" name="priceto" id="slider-snap-input-to" value="110" />
                </div>
                <div className="mb-4">
                  <label className="form-label">Host and booking</label>
                  <ul className="list-inline mb-0 mt-1">
                    <li className="list-inline-item mb-2">
                      <div className="custom-control custom-switch">
                        <input className="custom-control-input" id="instantBook" type="checkbox"/>
                        <label className="custom-control-label" htmlFor="instantBook"> <span className="text-sm">Instant book</span></label>
                      </div>
                    </li>
                    <li className="list-inline-item">
                      <div className="custom-control custom-switch">
                        <input className="custom-control-input" id="superhost" type="checkbox" />
                        <label className="custom-control-label" htmlFor="superhost"> <span
                          className="text-sm">Superhost</span></label>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="pb-4">
                  <div className="collapse" id="moreFilters">
                    <div className="filter-block">
                      <h6 className="mb-3">Location</h6>
                      <div className="form-group mb-4">
                        <label className="form-label" htmlFor="form_neighbourhood">Neighbourhood</label>
                        <select className="selectpicker form-control" name="neighbourhood" id="form_neighbourhood"
                                multiple data-style="btn-selectpicker" data-live-search="true"
                                data-selected-text-format="count &gt; 1" title="">
                          <option value="neighbourhood_0">Battery Park City</option>
                          <option value="neighbourhood_1">Bowery</option>
                          <option value="neighbourhood_2">Carnegie Hill</option>
                          <option value="neighbourhood_3">Central Park</option>
                          <option value="neighbourhood_4">Chelsea</option>
                          <option value="neighbourhood_5">Chinatown</option>
                        </select>
                      </div>
                      <div className="form-group mb-0">
                        <label className="form-label">Neighbourhood Tag</label>
                        <ul className="list-inline mt-xl-1 mb-0">
                          <li className="list-inline-item">
                            <div className="custom-control custom-checkbox">
                              <input className="custom-control-input" type="checkbox" id="type_0" name="type[]"/>
                              <label className="custom-control-label" htmlFor="type_0">Hipster </label>
                            </div>
                          </li>
                          <li className="list-inline-item">
                            <div className="custom-control custom-checkbox">
                              <input className="custom-control-input" type="checkbox" id="type_1" name="type[]" />
                              <label className="custom-control-label" htmlFor="type_1">Business </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="filter-block">
                      <h6 className="mb-3">Rooms and beds</h6>
                      <div className="form-group mb-2">
                        <label className="form-label">Beds</label>
                        <div className="d-flex align-items-center">
                          <div className="btn btn-items btn-items-decrease">-</div>
                          <input className="form-control input-items input-items-greaterthan" type="text" value="1+"
                                 disabled />
                          <div className="btn btn-items btn-items-increase">+</div>
                        </div>
                      </div>
                      <div className="form-group mb-2">
                        <label className="form-label">Bedrooms</label>
                        <div className="d-flex align-items-center">
                          <div className="btn btn-items btn-items-decrease">-</div>
                          <input className="form-control input-items input-items-greaterthan" type="text" value="1+"
                                 disabled />
                          <div className="btn btn-items btn-items-increase">+</div>
                        </div>
                      </div>
                    </div>
                    <div className="filter-block">
                      <h6 className="mb-3">Trip type</h6>
                      <div className="form-group mb-0">
                        <div className="custom-control custom-switch mb-2">
                          <input className="custom-control-input" id="forfamilies" type="checkbox" name="forfamilies"
                                 aria-describedby="forfamiliesHelp" />
                          <label className="custom-control-label" htmlFor="forfamilies"> <span className="text-sm">For Families</span></label>
                        </div>
                        <small className="text-muted form-text" id="forfamiliesHelp">Explore entire homes with 5-star
                          reviews from families and essentials like a kitchen and TV</small>
                      </div>
                      <div className="form-group mb-0">
                        <div className="custom-control custom-switch mb-2">
                          <input className="custom-control-input" id="forwork" type="checkbox" name="forwork"
                                 aria-describedby="forworkHelp" />
                          <label className="custom-control-label" htmlFor="forwork"> <span className="text-sm">For work</span></label>
                        </div>
                        <small className="text-muted form-text" id="forworkHelp">Explore top-rated homes with essentials
                          like a workspace, wifi, and self check-in </small>
                      </div>
                    </div>
                    <div className="filter-block">
                      <h6 className="mb-3">Amenities</h6>
                      <ul className="list-unstyled mb-0">
                        <li>
                          <div className="custom-control custom-checkbox">
                            <input className="custom-control-input" type="checkbox" id="amenities_0" name="amenities[]"/>
                              <label className="custom-control-label" htmlFor="amenities_0">Kitchen </label>
                          </div>
                        </li>
                        <li>
                          <div className="custom-control custom-checkbox">
                            <input className="custom-control-input" type="checkbox" id="amenities_1" name="amenities[]" />
                            <label className="custom-control-label" htmlFor="amenities_1">Shampoo </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="filter-block">
                      <h6 className="mb-3">Facilities</h6>
                      <ul className="list-unstyled mb-0">
                        <li>
                          <div className="custom-control custom-checkbox">
                            <input className="custom-control-input" type="checkbox" id="facilities_0"
                                   name="facilities[]" />
                              <label className="custom-control-label" htmlFor="facilities_0">Free parking on
                                premises </label>
                          </div>
                        </li>
                        <li>
                          <div className="custom-control custom-checkbox">
                            <input className="custom-control-input" type="checkbox" id="facilities_1"
                                   name="facilities[]"/>
                              <label className="custom-control-label" htmlFor="facilities_1">Gym </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mb-4">
                    <button className="btn btn-link btn-collapse pl-0 text-secondary" type="button"
                            data-toggle="collapse" data-target="#moreFilters" aria-expanded="false"
                            aria-controls="moreFilters" data-expanded-text="Less filters"
                            data-collapsed-text="More filters">More filters
                    </button>
                  </div>
                  <div className="mb-4">
                    <button className="btn btn-primary" type="submit"><i className="fas fa-filter mr-1"></i>Filter
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-9">
              <div className="d-flex justify-content-between align-items-center flex-column flex-md-row mb-4">
                <div className="mr-3">
                  <p className="mb-3 mb-md-0"><strong>12</strong> results found</p>
                </div>
                <div>
                  <label className="form-label mr-2" htmlFor="form_sort">Sort by</label>
                  <select className="selectpicker" name="sort" id="form_sort" data-style="btn-selectpicker" title="">
                    <option value="sortBy_0">Most popular</option>
                    <option value="sortBy_1">Recommended</option>
                    <option value="sortBy_2">Newest</option>
                    <option value="sortBy_3">Oldest</option>
                    <option value="sortBy_4">Closest</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 col-xl-4 mb-5 hover-animate" data-marker-id="59c0c8e33b1527bfe2abaf92">
                  <div className="card h-100 border-0 shadow">
                    <div className="card-img-top overflow-hidden gradient-overlay"><img className="img-fluid"
                                                                                        src="img/photo/photo-1484154218962-a197022b5858.jpg"
                                                                                        alt="Modern, Well-Appointed Room"/><a
                      className="tile-link" href="detail-rooms.html"></a>
                      <div className="card-img-overlay-bottom z-index-20">
                        <div className="media text-white text-sm align-items-center"><img
                          className="avatar avatar-border-white mr-2" src="img/avatar/avatar-0.jpg" alt="Pamela"/>
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
                <div className="col-sm-6 col-xl-4 mb-5 hover-animate" data-marker-id="59c0c8e322f3375db4d89128">
                  <div className="card h-100 border-0 shadow">
                    <div className="card-img-top overflow-hidden gradient-overlay"><img className="img-fluid"
                                                                                        src="img/photo/photo-1426122402199-be02db90eb90.jpg"
                                                                                        alt="Cute Quirky Garden apt, NYC adjacent"/><a
                      className="tile-link" href="detail-rooms.html"></a>
                      <div className="card-img-overlay-bottom z-index-20">
                        <div className="media text-white text-sm align-items-center"><img
                          className="avatar avatar-border-white mr-2" src="img/avatar/avatar-7.jpg" alt="John"/>
                          <div className="media-body">John</div>
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
                <div className="col-sm-6 col-xl-4 mb-5 hover-animate" data-marker-id="59c0c8e3a31e62979bf147c9">
                  <div className="card h-100 border-0 shadow">
                    <div className="card-img-top overflow-hidden gradient-overlay"><img className="img-fluid"
                                                                                        src="img/photo/photo-1512917774080-9991f1c4c750.jpg"
                                                                                        alt="Modern Apt - Vibrant Neighborhood!"/><a
                      className="tile-link" href="detail-rooms.html"></a>
                      <div className="card-img-overlay-bottom z-index-20">
                        <div className="media text-white text-sm align-items-center"><img
                          className="avatar avatar-border-white mr-2" src="img/avatar/avatar-8.jpg" alt="Julie"/>
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
                <div className="col-sm-6 col-xl-4 mb-5 hover-animate" data-marker-id="59c0c8e3503eb77d487e8082">
                  <div className="card h-100 border-0 shadow">
                    <div className="card-img-top overflow-hidden gradient-overlay"><img className="img-fluid"
                                                                                        src="img/photo/photo-1494526585095-c41746248156.jpg"
                                                                                        alt="Sunny Private Studio-Apartment"/><a
                      className="tile-link" href="detail-rooms.html"></a>
                      <div className="card-img-overlay-bottom z-index-20">
                        <div className="media text-white text-sm align-items-center"><img
                          className="avatar avatar-border-white mr-2" src="img/avatar/avatar-9.jpg" alt="Barbora"/>
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
                <div className="col-sm-6 col-xl-4 mb-5 hover-animate" data-marker-id="59c0c8e39aa2eed0626e485d">
                  <div className="card h-100 border-0 shadow">
                    <div className="card-img-top overflow-hidden gradient-overlay"><img className="img-fluid"
                                                                                        src="img/photo/photo-1522771739844-6a9f6d5f14af.jpg"
                                                                                        alt="Mid-Century Modern Garden Paradise"/><a
                      className="tile-link" href="detail-rooms.html"></a>
                      <div className="card-img-overlay-bottom z-index-20">
                        <div className="media text-white text-sm align-items-center"><img
                          className="avatar avatar-border-white mr-2" src="img/avatar/avatar-10.jpg" alt="Jack"/>
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
                <div className="col-sm-6 col-xl-4 mb-5 hover-animate" data-marker-id="59c0c8e39aa2edasd626e485d">
                  <div className="card h-100 border-0 shadow">
                    <div className="card-img-top overflow-hidden gradient-overlay"><img className="img-fluid"
                                                                                        src="img/photo/photo-1488805990569-3c9e1d76d51c.jpg"
                                                                                        alt="Brooklyn Life, Easy to Manhattan"/><a
                      className="tile-link" href="detail-rooms.html"></a>
                      <div className="card-img-overlay-bottom z-index-20">
                        <div className="media text-white text-sm align-items-center"><img
                          className="avatar avatar-border-white mr-2" src="img/avatar/avatar-11.jpg" alt="Stuart"/>
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
              <nav aria-label="Page navigation example">
                <ul className="pagination pagination-template d-flex justify-content-center">
                  <li className="page-item"><a className="page-link" href="#"> <i className="fa fa-angle-left"></i></a>
                  </li>
                  <li className="page-item active"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item"><a className="page-link" href="#"> <i className="fa fa-angle-right"></i></a>
                  </li>
                </ul>
              </nav>
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
)(Search);