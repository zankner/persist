import React, { useState } from 'react';
import { compose } from 'redux';
import { withFirebase } from 'react-redux-firebase';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import SignupForm from "./components/SignupForm";


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
            <SignupForm />
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