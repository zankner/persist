import React, { useState } from 'react';
import Layout from '../../../components/Layout';
import { compose } from 'redux';
import { withFirebase } from 'react-redux-firebase';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


const Create = props => {

  return (
    <Layout >
      <div className="pt-nav">
        <div className="progress rounded-0 sticky-top" style={{height: "8px", top: "71px"}}>
          <div className="progress-bar" role="progressbar" style={{width: "0%", ariaValuenow: "0", ariaValuemin: "0"}}
               aria-valuemax="100"/>
        </div>
        <section className="py-5 py-lg-7">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <p className="subtitle text-primary">Add a new listing</p>
                <h1 className="h2 mb-5">Let's get started</h1>
                <p className="text-muted">His room, a proper human room although a little too small, lay peacefully
                  between its four familiar walls. A collection of textile samples lay spread out on the table.</p>
                <p className="text-muted mb-5">Samsa was a travelling salesman - and above it there hung a picture that
                  he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.</p>
                <p className="mb-5 mb-lg-0"><a className="btn btn-primary" href="user-add-1.html">Add your listing</a>
                </p>
              </div>
              <div className="col-lg-5 ml-auto d-flex align-items-center"><img className="img-fluid"
                                                                               src="img/illustration/undraw_celebration_0jvk.svg"
                                                                               alt="" style={{width: "400px"}} /></div>
            </div>
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
)(Create);