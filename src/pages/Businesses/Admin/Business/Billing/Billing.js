import React, { useState, useEffect } from 'react';
import Layout from '../../../../../components/Layout';
import { compose } from 'redux';
import { withFirebase } from 'react-redux-firebase';
import {Link, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import axios from "axios";


const Billing = ({ firebase, match, auth }) => {

  const [alert, setAlert] = useState(null);
  const [business, setBusiness] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!auth.isLoaded) return;

    firebase.auth().currentUser.getIdToken()
      .then(token => {
        axios.get(`api/businesses/${match.params.business}/admin/get`, {
          headers: {Authorization: token}
        })
          .then(business => setBusiness(business))
          .catch(() => setError(true))
      })
      .catch(() => setError(true))
  }, [auth]);

  const connectDashboard = () => {
    firebase.auth().currentUser.getIdToken()
      .then(token => {
        axios.get(`api/businesses/${match.params.business}/admin/dashboard`, {
          headers: {Authorization: token}
        })
          .then(res => {
            window.location = res.data.dashboardUrl.url;
          })
          .catch(() => setAlert("Something went wrong. Please try again."))
      })
      .catch(() => setAlert("Something went wrong. Please try again."))
  };

  const connectBilling = () => {
    firebase.auth().currentUser.getIdToken()
      .then(token => {
        axios.post(`/api/businesses/${match.params.business}/billing/connect`, {}, {
          headers: {Authorization: token}
        })
          .then(res => {
            window.location = res.data.stripeUrl;
          })
          .catch(() => setAlert("Something went wrong. Please try again."));
      })
      .catch(() => setAlert("Something went wrong. Please try again."));
  };

  return (
    <Layout >
      <div className="pt-nav">
        <section className="py-5">
          <div className="container">
            <ol className="breadcrumb pl-0  justify-content-start">
              <li className="breadcrumb-item"><a href="index.html">Home</a></li>
              <li className="breadcrumb-item"><a href="user-account.html">Account</a></li>
              <li className="breadcrumb-item active">Billing info</li>
            </ol>
            <h1 className="hero-heading mb-0">Billing info</h1>
            <p className="text-muted mb-5">Manage and view your Billing info and settings here.</p>
            <div className="row">
              <div className="col-lg-7">
                <div className="text-block">
                  <div className="d-flex justify-content-between align-items-end mb-4">
                    <h5 className="mb-0">Connect to Stripe</h5>
                    <div className="text-muted">
                      <img src="/img/brand/stripe/powered_by_stripe.svg" />
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="row">
                      <button className="btn btn-primary btn-block mb-2" onClick={connectBilling}>Manage account</button>
                      <button className="btn btn-outline-muted btn-block mb-2" onClick={connectDashboard}>Create account</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 ml-lg-auto">
                <div className="card border-0 shadow">
                  <div className="card-header bg-primary-light py-4 border-0">
                    <div className="media align-items-center">
                      <div className="media-body">
                        <h4 className="h6 subtitle text-sm text-primary">What info is shared
                          with others?</h4>
                      </div>
                      <svg
                        className="svg-icon svg-icon svg-icon-light w-3rem h-3rem ml-3 text-primary">
                        <use xlinkHref="#identity-1"></use>
                      </svg>
                    </div>
                  </div>
                  <div className="card-body p-4">
                    <p className="text-muted text-sm card-text">Directory only releases contact
                      information for hosts and guests <strong>after a reservation is
                        confirmed</strong>.</p>
                    <p className="text-muted text-sm card-text">Amet nisi eiusmod minim commodo sit
                      voluptate aute ut quis ea veniam sunt proident ex. <strong>Exercitation
                        culpa laboris</strong> consequat fugiat non ipsum veniam Lorem aliqua
                      deserunt tempor elit veniam.</p>
                  </div>
                </div>
              </div>
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
)(Billing);