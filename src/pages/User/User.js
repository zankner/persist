import React, {useState, useEffect} from 'react';
import Layout from '../../components/Layout';
import NotFound from "../../components/NotFound";
import {compose} from 'redux';
import {withFirebase} from 'react-redux-firebase';
import {withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';


const User = ({firebase, auth, match, profile}) => {

  const [error, setError] = useState(false);

  useEffect(() => {
    if (!auth.isLoaded) return;
    firebase.auth().currentUser.getIdToken()
      .then(token => {
        axios.get(`/api/users/${match.params.user}/get`, {
          headers: {Authorization: token}
        })
          .catch(() => setError(true));
      })
      .catch(() => {
        setError(true);
      })
  }, [auth]);

  if (error) return <NotFound/>;

  return (
    <Layout>
      <div className="pt-nav">
        <section className="py-5">
          <div className="container">
            <ol className="breadcrumb #{breadcrumbClass}">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item active">Your account</li>
            </ol>
            <h1 className="hero-heading mb-0">Your account</h1>
            <p className="text-muted mb-5">Manage your account and settings here.</p>
            <div className="row">
              <div className="col-6 col-md-4 mb-30px">
                <div className="card h-100 border-0 shadow hover-animate">
                  <div className="card-body">
                    <div className="icon-rounded bg-secondary-light mb-3">
                      <svg className="svg-icon text-secondary w-2rem h-2rem">
                        <use xlinkHref="#identity-1"/>
                      </svg>
                    </div>
                    <h5 className="card-title mb-3"><Link
                      className="text-decoration-none text-dark stretched-link"
                      to={`/users/${match.params.user}/personal-info`}>Personal info</Link></h5>
                    <p className="text-muted card-text text-sm">Provide personal details and how we
                      can reach you</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 mb-30px">
                <div className="card h-100 border-0 shadow hover-animate">
                  <div className="card-body">
                    <div className="icon-rounded bg-secondary-light mb-3">
                      <svg className="svg-icon text-secondary w-2rem h-2rem">
                        <use xlinkHref="#password-1"/>
                      </svg>
                    </div>
                    <h5 className="card-title mb-3"><Link
                      className="text-decoration-none text-dark stretched-link"
                      to={`users/${match.params.user}/security`}>Login &amp; security</Link></h5>
                    <p className="text-muted card-text text-sm">Update your password and secure your
                      account</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 mb-30px">
                <div className="card h-100 border-0 shadow hover-animate">
                  <div className="card-body">
                    <div className="icon-rounded bg-secondary-light mb-3">
                      <svg className="svg-icon text-secondary w-2rem h-2rem">
                        <use xlinkHref="#pay-by-card-1"/>
                      </svg>
                    </div>
                    <h5 className="card-title mb-3"><Link
                      className="text-decoration-none text-dark stretched-link"
                      to={`users/${match.params.user}/billing`}>Payments &amp; payouts</Link></h5>
                    <p className="text-muted card-text text-sm">Review payments, payouts, coupons,
                      gift cards, and taxes</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 mb-30px">
                <div className="card h-100 border-0 shadow hover-animate">
                  <div className="card-body">
                    <div className="icon-rounded bg-secondary-light mb-3">
                      <svg className="svg-icon text-secondary w-2rem h-2rem">
                        <use xlinkHref="#chat-app-1"/>
                      </svg>
                    </div>
                    <h5 className="card-title mb-3"><a
                      className="text-decoration-none text-dark stretched-link"
                      href="#">Notifications</a></h5>
                    <p className="text-muted card-text text-sm">Choose notification preferences and
                      how you want to be contacted</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 mb-30px">
                <div className="card h-100 border-0 shadow hover-animate">
                  <div className="card-body">
                    <div className="icon-rounded bg-secondary-light mb-3">
                      <svg className="svg-icon text-secondary w-2rem h-2rem">
                        <use xlinkHref="#diary-1"/>
                      </svg>
                    </div>
                    <h5 className="card-title mb-3"><a
                      className="text-decoration-none text-dark stretched-link"
                      href="#">Privacy &amp; sharing</a></h5>
                    <p className="text-muted card-text text-sm">Control connected apps, what you
                      share, and who sees it</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 mb-30px">
                <div className="card h-100 border-0 shadow hover-animate">
                  <div className="card-body">
                    <div className="icon-rounded bg-secondary-light mb-3">
                      <svg className="svg-icon text-secondary w-2rem h-2rem">
                        <use xlinkHref="#mix-1"/>
                      </svg>
                    </div>
                    <h5 className="card-title mb-3"><a
                      className="text-decoration-none text-dark stretched-link" href="#">Global
                      preferences</a></h5>
                    <p className="text-muted card-text text-sm">Set your default language, currency,
                      and timezone</p>
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
)(User);