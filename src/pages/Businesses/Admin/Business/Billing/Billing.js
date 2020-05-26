import React, { useState } from 'react';
import Layout from '../../../../../components/Layout';
import { compose } from 'redux';
import { withFirebase } from 'react-redux-firebase';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


const Billing = props => {

  return (
    <Layout >
      <div className="pt-nav">
        <section className="py-5">
          <div className="container">
            <ol className="breadcrumb pl-0  justify-content-start">
              <li className="breadcrumb-item"><a href="index.html">Home</a></li>
              <li className="breadcrumb-item"><a href="user-account.html">Account</a></li>
              <li className="breadcrumb-item active">Personal info</li>
            </ol>
            <h1 className="hero-heading mb-0">Personal info</h1>
            <p className="text-muted mb-5">Manage your Personal info and settings here.</p>
            <div className="row">
              <div className="col-lg-7">
                <div className="text-block">
                  <div className="d-flex justify-content-between align-items-end mb-4">
                    <h5 className="mb-0">Pay with your card</h5>
                    <div className="text-muted"><i className="fab fa-cc-amex fa-2x mr-2"> </i><i
                      className="fab fa-cc-visa fa-2x mr-2"> </i><i className="fab fa-cc-mastercard fa-2x"></i></div>
                  </div>
                  <select className="selectpicker form-control mb-3" name="payment" id="form_payment"
                          data-style="btn-selectpicker">
                    <option value="">Visa •••• 5687</option>
                    <option value="">Mastercard •••• 4569</option>
                  </select>
                  <button className="btn btn-link btn-collapse pl-0 text-muted" type="button" data-toggle="collapse"
                          data-target="#addNewCard" aria-expanded="false" aria-controls="addNewCard"
                          data-expanded-text="Close" data-collapsed-text="Add a new card">Add a new card
                  </button>
                  <div className="row collapse" id="addNewCard">
                    <div className="form-group col-md-6">
                      <label className="form-label" htmlFor="card-name">Name on Card</label>
                      <input className="form-control" type="text" name="card-name" placeholder="Name on card"
                             id="card-name" />
                    </div>
                    <div className="form-group col-md-6">
                      <label className="form-label" htmlFor="card-number">Card Number</label>
                      <input className="form-control" type="text" name="card-number" placeholder="Card number"
                             id="card-number" />
                    </div>
                    <div className="form-group col-md-4">
                      <label className="form-label" htmlFor="expiry-date">Expiry Date</label>
                      <input className="form-control" type="text" name="expiry-date" placeholder="MM/YY"
                             id="expiry-date" />
                    </div>
                    <div className="form-group col-md-4">
                      <label className="form-label" htmlFor="cvv">CVC/CVV</label>
                      <input className="form-control" type="text" name="cvv" placeholder="123" id="cvv" />
                    </div>
                    <div className="form-group col-md-4">
                      <label className="form-label" htmlFor="zip">ZIP</label>
                      <input className="form-control" type="text" name="zip" placeholder="123" id="zip" />
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