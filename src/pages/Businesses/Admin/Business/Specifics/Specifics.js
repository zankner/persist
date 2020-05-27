import React, { useState } from 'react';
import Layout from '../../../../../components/Layout';
import { compose } from 'redux';
import { withFirebase } from 'react-redux-firebase';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


const Specifics = props => {

  return (
    <Layout >
      <div className="pt-nav">
        <div className="progress rounded-0 sticky-top" style={{height: "8px", top: "71px"}}>
          <div className="progress-bar" role="progressbar" style={{width: "80%", ariaValuenow: "0", ariaValuemin: "0"}}
               aria-valuemax="100"/>
        </div>
        <section className="py-5">
          <div className="container">
            <p className="subtitle text-primary">Add new listing</p>
            <h1 className="h2 mb-5"> Disposition and Amenities <span className="text-muted float-right">Step 3</span>
            </h1>
            <form>
              <div className="row form-block">
                <div className="col-lg-4">
                  <h4>Rooms and beds</h4>
                  <p className="text-muted text-sm"> The number and types of beds you have determines how many guests
                    can stay comfortably</p>
                </div>
                <div className="col-lg-7 ml-auto">
                  <div className="row">
                    <div className="col-lg-4">
                      <label className="form-label">Beds</label>
                      <div className="d-flex align-items-center">
                        <div className="btn btn-items btn-items-decrease">-</div>
                        <input className="form-control input-items" type="text" value="1" disabled />
                          <div className="btn btn-items btn-items-increase">+</div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <label className="form-label">Bedrooms</label>
                      <div className="d-flex align-items-center">
                        <div className="btn btn-items btn-items-decrease">-</div>
                        <input className="form-control input-items" type="text" value="1" disabled />
                          <div className="btn btn-items btn-items-increase">+</div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <label className="form-label">Bathrooms</label>
                      <div className="d-flex align-items-center">
                        <div className="btn btn-items btn-items-decrease">-</div>
                        <input className="form-control input-items" type="text" value="1" disabled />
                          <div className="btn btn-items btn-items-increase">+</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row form-block">
                <div className="col-lg-4">
                  <h4>Amenities</h4>
                  <p className="text-muted text-sm">His room, a proper human room although a little too small, lay
                    peacefully between its four familiar walls. A collection of textile samples lay spread out on the
                    table.</p>
                </div>
                <div className="col-lg-7 ml-auto">
                  <div className="form-group">
                    <label className="form-label">Available Amenities</label>
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item">
                        <div className="custom-control custom-checkbox">
                          <input className="custom-control-input" type="checkbox" id="amenities_0" name="amenities[]" />
                            <label className="custom-control-label text-muted" htmlFor="amenities_0">Kitchen </label>
                        </div>
                      </li>
                      <li className="list-inline-item">
                        <div className="custom-control custom-checkbox">
                          <input className="custom-control-input" type="checkbox" id="amenities_1" name="amenities[]" />
                            <label className="custom-control-label text-muted" htmlFor="amenities_1">Shampoo </label>
                        </div>
                      </li>
                      <li className="list-inline-item">
                        <div className="custom-control custom-checkbox">
                          <input className="custom-control-input" type="checkbox" id="amenities_2" name="amenities[]" />
                            <label className="custom-control-label text-muted" htmlFor="amenities_2">Heating </label>
                        </div>
                      </li>
                      <li className="list-inline-item">
                        <div className="custom-control custom-checkbox">
                          <input className="custom-control-input" type="checkbox" id="amenities_3" name="amenities[]" />
                            <label className="custom-control-label text-muted" htmlFor="amenities_3">Air
                              conditioning </label>
                        </div>
                      </li>
                      <li className="list-inline-item">
                        <div className="custom-control custom-checkbox">
                          <input className="custom-control-input" type="checkbox" id="amenities_4" name="amenities[]" />
                            <label className="custom-control-label text-muted" htmlFor="amenities_4">Washer </label>
                        </div>
                      </li>
                      <li className="list-inline-item">
                        <div className="custom-control custom-checkbox">
                          <input className="custom-control-input" type="checkbox" id="amenities_5" name="amenities[]" />
                            <label className="custom-control-label text-muted" htmlFor="amenities_5">Dryer </label>
                        </div>
                      </li>
                      <li className="list-inline-item">
                        <div className="custom-control custom-checkbox">
                          <input className="custom-control-input" type="checkbox" id="amenities_6" name="amenities[]" />
                            <label className="custom-control-label text-muted" htmlFor="amenities_6">Wifi </label>
                        </div>
                      </li>
                      <li className="list-inline-item">
                        <div className="custom-control custom-checkbox">
                          <input className="custom-control-input" type="checkbox" id="amenities_7" name="amenities[]" />
                            <label className="custom-control-label text-muted" htmlFor="amenities_7">Breakfast </label>
                        </div>
                      </li>
                      <li className="list-inline-item">
                        <div className="custom-control custom-checkbox">
                          <input className="custom-control-input" type="checkbox" id="amenities_8" name="amenities[]" />
                            <label className="custom-control-label text-muted" htmlFor="amenities_8">Indoor
                              fireplace </label>
                        </div>
                      </li>
                      <li className="list-inline-item">
                        <div className="custom-control custom-checkbox">
                          <input className="custom-control-input" type="checkbox" id="amenities_9" name="amenities[]" />
                            <label className="custom-control-label text-muted" htmlFor="amenities_9">Buzzer/wireless
                              intercom </label>
                        </div>
                      </li>
                      <li className="list-inline-item">
                        <div className="custom-control custom-checkbox">
                          <input className="custom-control-input" type="checkbox" id="amenities_10" name="amenities[]" />
                            <label className="custom-control-label text-muted" htmlFor="amenities_10">Doorman </label>
                        </div>
                      </li>
                      <li className="list-inline-item">
                        <div className="custom-control custom-checkbox">
                          <input className="custom-control-input" type="checkbox" id="amenities_11" name="amenities[]" />
                            <label className="custom-control-label text-muted" htmlFor="amenities_11">Hangers </label>
                        </div>
                      </li>
                      <li className="list-inline-item">
                        <div className="custom-control custom-checkbox">
                          <input className="custom-control-input" type="checkbox" id="amenities_12" name="amenities[]" />
                            <label className="custom-control-label text-muted" htmlFor="amenities_12">Iron </label>
                        </div>
                      </li>
                      <li className="list-inline-item">
                        <div className="custom-control custom-checkbox">
                          <input className="custom-control-input" type="checkbox" id="amenities_13" name="amenities[]" />
                            <label className="custom-control-label text-muted" htmlFor="amenities_13">Hair
                              dryer </label>
                        </div>
                      </li>
                      <li className="list-inline-item">
                        <div className="custom-control custom-checkbox">
                          <input className="custom-control-input" type="checkbox" id="amenities_14" name="amenities[]" />
                            <label className="custom-control-label text-muted" htmlFor="amenities_14">Laptop friendly
                              workspace </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row form-block flex-column flex-sm-row">
                <div className="col text-center text-sm-left"><a className="btn btn-link text-muted"
                                                                 href="user-add-2.html"> <i
                  className="fa-chevron-left fa mr-2"></i>Back</a>
                </div>
                <div className="col text-center text-sm-right"><a className="btn btn-primary px-3"
                                                                  href="user-add-4.html"> Next step<i
                  className="fa-chevron-right fa ml-2"></i></a></div>
              </div>
            </form>
          </div>
        </section>
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
)(Specifics);