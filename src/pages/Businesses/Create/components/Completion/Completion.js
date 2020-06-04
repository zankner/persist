import React, { useState } from 'react';
import Layout from '../../../../../components/Layout';
import { compose } from 'redux';
import { withFirebase } from 'react-redux-firebase';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


const Completion = props => {

  return (
    <>
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
    </>
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