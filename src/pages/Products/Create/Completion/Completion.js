import React, { useState } from 'react';
import Layout from '../../../../components/Layout';
import { compose } from 'redux';
import { withFirebase } from 'react-redux-firebase';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


const Completion = props => {

  return (
    <Layout >
      <div className="pt-nav">
        <div className="progress rounded-0 sticky-top" style={{height: "8px", top: "71px"}}>
          <div className="progress-bar" role="progressbar" style={{width: "100%", ariaValuenow: "0", ariaValuemin: "0"}}
               aria-valuemax="100"/>
        </div>
        <section className="py-5 py-lg-6">
          <div className="container text-center">
            <p className="subtitle text-primary">Add new listing</p>
            <h1 className="h2 mb-5"> Listing uploaded</h1>
            <p className="mb-5"><img className="img-fluid" src="/img/illustration/undraw_celebration_0jvk.svg" alt=""
                                     style={{width: "400px"}} /></p>
            <p className="text-muted mb-5">Thank you, Ondrej. Your listing has been saved and will be reviewed
              shortly.</p>
            <p className="mb-5"><a className="btn btn-primary mr-2 mb-2" href="#">Do something</a><a
              className="btn btn-outline-muted mb-2" href="#">Or something else</a></p>
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
)(Completion);