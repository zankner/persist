import React, { useState } from 'react';
import { compose } from 'redux';
import { withFirebase } from 'react-redux-firebase';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


const Signup = props => {

  return (
    <div className="container-fluid px-3">
      <div className="row min-vh-100">
        <div className="col-md-8 col-lg-6 col-xl-5 d-flex align-items-center">
          <div className="w-100 py-5 px-md-5 px-xl-6 position-relative">
            <div className="mb-4"><img className="img-fluid mb-4" src="/img/logo-square.svg" alt="..."
                                       style={{maxWidth: '4rem'}} />
              <h2>Sign up</h2>
              <p className="text-muted">His room, a proper human room although a little too small, lay peacefully
                between its four familiar walls. A collection of textile samples lay spread out on the table.</p>
            </div>
            <form className="form-validate">
              <div className="form-group">
                <label className="form-label" htmlFor="loginUsername"> Email Address</label>
                <input className="form-control" name="loginUsername" id="loginUsername" type="email"
                       placeholder="name@address.com" autoComplete="off" required data-msg="Please enter your email" />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="loginPassword"> Password</label>
                <input className="form-control" name="loginPassword" id="loginPassword" placeholder="Password"
                       type="password" required data-msg="Please enter your password" />
              </div>
              <div className="form-group mb-4">
                <label className="form-label" htmlFor="loginPassword2"> Confirm your password</label>
                <input className="form-control" name="loginPassword2" id="loginPassword2" placeholder="Password"
                       type="password" required data-msg="Please enter your password" />
              </div>
              <button className="btn btn-lg btn-block btn-primary" type="submit">Sign up</button>
              <hr className="my-3 hr-text letter-spacing-2" data-content="OR" />
                <button className="btn btn btn-outline-primary btn-block btn-social mb-3"><i
                  className="fa-2x fa-facebook-f fab btn-social-icon"> </i>Connect <span className="d-none d-sm-inline">with Facebook</span>
                </button>
                <button className="btn btn btn-outline-muted btn-block btn-social mb-3"><i
                  className="fa-2x fa-google fab btn-social-icon"> </i>Connect <span className="d-none d-sm-inline">with Google</span>
                </button>
                <hr className="my-4" />
                  <p className="text-sm text-muted">By signing up you agree to Directory's <a href="#">Terms and
                    Conditions</a> and <a href="#">Privacy Policy</a>.</p>
            </form>
            <a className="close-absolute mr-md-5 mr-xl-6 pt-5" href="index.html">
              <svg className="svg-icon w-3rem h-3rem">
                <use xlinkHref="#close-1"></use>
              </svg>
            </a>
          </div>
        </div>
        <div className="col-md-4 col-lg-6 col-xl-7 d-none d-md-block">
          <div className="bg-cover h-100 mr-n3"
               style={{backgroundImage: 'url(/img/photo/photo-1497436072909-60f360e1d4b1.jpg)'}}></div>
        </div>
      </div>
    </div>
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
)(Signup);