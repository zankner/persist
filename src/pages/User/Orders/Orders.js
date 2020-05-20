import React, { useState } from 'react';
import Layout from '../../../components/Layout';
import { compose } from 'redux';
import { withFirebase } from 'react-redux-firebase';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


const Orders = props => {

    return (
        <Layout >
            <div className="pt-nav">
                <section className="py-5">
                    <div className="container">
                        <ol className="breadcrumb pl-0  justify-content-start">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item active">Host view</li>
                        </ol>
                        <div className="d-flex justify-content-between align-items-end mb-5">
                            <h1 className="hero-heading mb-0">Your nearest bookings</h1><a
                            className="btn btn-link text-muted" href="#">Past bookings</a>
                        </div>
                        <div className="d-flex justify-content-between align-items-center flex-column flex-lg-row mb-5">
                            <div className="mr-3">
                                <p className="mb-3 mb-lg-0">You have <strong>12 bookings</strong> in your property</p>
                            </div>
                            <div className="text-center">
                                <label className="form-label mr-2" htmlFor="form_sort">Sort by</label>
                                <select className="selectpicker mr-3 mb-3 mb-lg-0" name="sort" id="form_sort"
                                        data-style="btn-selectpicker" title="">
                                    <option value="sortBy_0">Newest</option>
                                    <option value="sortBy_1">Oldest</option>
                                    <option value="sortBy_2">Paid</option>
                                </select><a className="btn btn-outline-secondary" href="#"><i
                                className="fa fa-download mr-2"></i>Download CSV</a>
                            </div>
                        </div>
                        <div className="list-group shadow mb-5"><a
                            className="list-group-item list-group-item-action p-4" href="user-booking-detail.html">
                            <div className="row">
                                <div className="col-lg-4 align-self-center mb-4 mb-lg-0">
                                    <div className="d-flex align-items-center mb-3">
                                        <h2 className="h5 mb-0">Meredith Goodwin</h2><img
                                        className="avatar avatar-sm avatar-border-white ml-3"
                                        src="/img/avatar/avatar-0.jpg" alt="Jack London" />
                                    </div>
                                    <p className="text-sm text-muted">Double Room</p><span
                                    className="badge badge-pill p-2 badge-secondary-light">February 16, 2019 - February 19, 2019</span>
                                </div>
                                <div className="col-lg-8">
                                    <div className="row">
                                        <div className="col-6 col-md-4 col-lg-3 py-3 mb-3 mb-lg-0">
                                            <h6 className="label-heading">Rate type</h6>
                                            <p className="text-sm font-weight-bold">Bed & Breakfast</p>
                                            <h6 className="label-heading">Nights </h6>
                                            <p className="text-sm font-weight-bold mb-0">3</p>
                                        </div>
                                        <div className="col-6 col-md-4 col-lg-3 py-3">
                                            <h6 className="label-heading">Occupancy</h6>
                                            <p className="text-sm font-weight-bold">1 pax</p>
                                            <h6 className="label-heading">Charge</h6>
                                            <p className="text-sm font-weight-bold mb-0">$244.42</p>
                                        </div>
                                        <div className="col-6 col-md-4 col-lg-3 py-3">
                                            <h6 className="label-heading">Booked Date</h6>
                                            <p className="text-sm font-weight-bold">February 16, 2019 </p>
                                            <h6 className="label-heading">Arrival Time</h6>
                                            <p className="text-sm font-weight-bold mb-0">Around 4 PM</p>
                                        </div>
                                        <div className="col-12 col-lg-3 align-self-center"><span
                                            className="text-primary text-sm text-uppercase mr-4 mr-lg-0"><i
                                            className="fa fa-check fa-fw mr-2"> </i>Booking paid</span><br
                                            className="d-none d-lg-block" /><span
                                            className="text-primary text-sm text-uppercase"><i
                                            className="fa fa-check fa-fw mr-2"> </i>Confirmed</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a><a className="list-group-item list-group-item-action p-4" href="user-booking-detail.html">
                            <div className="row">
                                <div className="col-lg-4 align-self-center mb-4 mb-lg-0">
                                    <div className="d-flex align-items-center mb-3">
                                        <h2 className="h5 mb-0">Weeks Garrett</h2><img
                                        className="avatar avatar-sm avatar-border-white ml-3"
                                        src="/img/avatar/avatar-1.jpg" alt="Jack London" />
                                    </div>
                                    <p className="text-sm text-muted">Double Room</p><span
                                    className="badge badge-pill p-2 badge-primary-light">March 14, 2019 - March 17, 2019</span>
                                </div>
                                <div className="col-lg-8">
                                    <div className="row">
                                        <div className="col-6 col-md-4 col-lg-3 py-3 mb-3 mb-lg-0">
                                            <h6 className="label-heading">Rate type</h6>
                                            <p className="text-sm font-weight-bold">Bed & Breakfast</p>
                                            <h6 className="label-heading">Nights </h6>
                                            <p className="text-sm font-weight-bold mb-0">3</p>
                                        </div>
                                        <div className="col-6 col-md-4 col-lg-3 py-3">
                                            <h6 className="label-heading">Occupancy</h6>
                                            <p className="text-sm font-weight-bold">3 pax</p>
                                            <h6 className="label-heading">Charge</h6>
                                            <p className="text-sm font-weight-bold mb-0">$495.73</p>
                                        </div>
                                        <div className="col-6 col-md-4 col-lg-3 py-3">
                                            <h6 className="label-heading">Booked Date</h6>
                                            <p className="text-sm font-weight-bold">March 14, 2019 </p>
                                            <h6 className="label-heading">Arrival Time</h6>
                                            <p className="text-sm font-weight-bold mb-0">Around 4 PM</p>
                                        </div>
                                        <div className="col-12 col-lg-3 align-self-center"><span
                                            className="text-primary text-sm text-uppercase mr-4 mr-lg-0"><i
                                            className="fa fa-check fa-fw mr-2"> </i>Booking paid</span><br
                                            className="d-none d-lg-block" /><span
                                            className="text-muted text-sm text-uppercase"><i
                                            className="fa fa-times fa-fw mr-2"> </i>Confirmed</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a><a className="list-group-item list-group-item-action p-4" href="user-booking-detail.html">
                            <div className="row">
                                <div className="col-lg-4 align-self-center mb-4 mb-lg-0">
                                    <div className="d-flex align-items-center mb-3">
                                        <h2 className="h5 mb-0">Fisher Bauer</h2><img
                                        className="avatar avatar-sm avatar-border-white ml-3"
                                        src="/img/avatar/avatar-2.jpg" alt="Jack London" />
                                    </div>
                                    <p className="text-sm text-muted">Double Room</p><span
                                    className="badge badge-pill p-2 badge-danger-light">March 10, 2019 - March 13, 2019</span>
                                </div>
                                <div className="col-lg-8">
                                    <div className="row">
                                        <div className="col-6 col-md-4 col-lg-3 py-3 mb-3 mb-lg-0">
                                            <h6 className="label-heading">Rate type</h6>
                                            <p className="text-sm font-weight-bold">Bed & Breakfast</p>
                                            <h6 className="label-heading">Nights </h6>
                                            <p className="text-sm font-weight-bold mb-0">3</p>
                                        </div>
                                        <div className="col-6 col-md-4 col-lg-3 py-3">
                                            <h6 className="label-heading">Occupancy</h6>
                                            <p className="text-sm font-weight-bold">2 pax</p>
                                            <h6 className="label-heading">Charge</h6>
                                            <p className="text-sm font-weight-bold mb-0">$938.48</p>
                                        </div>
                                        <div className="col-6 col-md-4 col-lg-3 py-3">
                                            <h6 className="label-heading">Booked Date</h6>
                                            <p className="text-sm font-weight-bold">March 10, 2019 </p>
                                            <h6 className="label-heading">Arrival Time</h6>
                                            <p className="text-sm font-weight-bold mb-0">Around 4 PM</p>
                                        </div>
                                        <div className="col-12 col-lg-3 align-self-center"><span
                                            className="text-primary text-sm text-uppercase mr-4 mr-lg-0"><i
                                            className="fa fa-check fa-fw mr-2"> </i>Booking paid</span><br
                                            className="d-none d-lg-block" /><span
                                            className="text-primary text-sm text-uppercase"><i
                                            className="fa fa-check fa-fw mr-2"> </i>Confirmed</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a><a className="list-group-item list-group-item-action p-4" href="user-booking-detail.html">
                            <div className="row">
                                <div className="col-lg-4 align-self-center mb-4 mb-lg-0">
                                    <div className="d-flex align-items-center mb-3">
                                        <h2 className="h5 mb-0">Aguilar Webb</h2><img
                                        className="avatar avatar-sm avatar-border-white ml-3"
                                        src="/img/avatar/avatar-3.jpg" alt="Jack London" />
                                    </div>
                                    <p className="text-sm text-muted">Double Room</p><span
                                    className="badge badge-pill p-2 badge-success-light">April 09, 2019 - April 13, 2019</span>
                                </div>
                                <div className="col-lg-8">
                                    <div className="row">
                                        <div className="col-6 col-md-4 col-lg-3 py-3 mb-3 mb-lg-0">
                                            <h6 className="label-heading">Rate type</h6>
                                            <p className="text-sm font-weight-bold">Bed & Breakfast</p>
                                            <h6 className="label-heading">Nights </h6>
                                            <p className="text-sm font-weight-bold mb-0">4</p>
                                        </div>
                                        <div className="col-6 col-md-4 col-lg-3 py-3">
                                            <h6 className="label-heading">Occupancy</h6>
                                            <p className="text-sm font-weight-bold">3 pax</p>
                                            <h6 className="label-heading">Charge</h6>
                                            <p className="text-sm font-weight-bold mb-0">$955.07</p>
                                        </div>
                                        <div className="col-6 col-md-4 col-lg-3 py-3">
                                            <h6 className="label-heading">Booked Date</h6>
                                            <p className="text-sm font-weight-bold">April 09, 2019 </p>
                                            <h6 className="label-heading">Arrival Time</h6>
                                            <p className="text-sm font-weight-bold mb-0">Around 4 PM</p>
                                        </div>
                                        <div className="col-12 col-lg-3 align-self-center"><span
                                            className="text-primary text-sm text-uppercase mr-4 mr-lg-0"><i
                                            className="fa fa-check fa-fw mr-2"> </i>Booking paid</span><br
                                            className="d-none d-lg-block" /><span
                                            className="text-muted text-sm text-uppercase"><i
                                            className="fa fa-times fa-fw mr-2"> </i>Confirmed</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a><a className="list-group-item list-group-item-action p-4" href="user-booking-detail.html">
                            <div className="row">
                                <div className="col-lg-4 align-self-center mb-4 mb-lg-0">
                                    <div className="d-flex align-items-center mb-3">
                                        <h2 className="h5 mb-0">Melton Simon</h2><img
                                        className="avatar avatar-sm avatar-border-white ml-3"
                                        src="/img/avatar/avatar-4.jpg" alt="Jack London" />
                                    </div>
                                    <p className="text-sm text-muted">Double Room</p><span
                                    className="badge badge-pill p-2 badge-secondary-light">March 24, 2019 - March 28, 2019</span>
                                </div>
                                <div className="col-lg-8">
                                    <div className="row">
                                        <div className="col-6 col-md-4 col-lg-3 py-3 mb-3 mb-lg-0">
                                            <h6 className="label-heading">Rate type</h6>
                                            <p className="text-sm font-weight-bold">Bed & Breakfast</p>
                                            <h6 className="label-heading">Nights </h6>
                                            <p className="text-sm font-weight-bold mb-0">4</p>
                                        </div>
                                        <div className="col-6 col-md-4 col-lg-3 py-3">
                                            <h6 className="label-heading">Occupancy</h6>
                                            <p className="text-sm font-weight-bold">3 pax</p>
                                            <h6 className="label-heading">Charge</h6>
                                            <p className="text-sm font-weight-bold mb-0">$882.25</p>
                                        </div>
                                        <div className="col-6 col-md-4 col-lg-3 py-3">
                                            <h6 className="label-heading">Booked Date</h6>
                                            <p className="text-sm font-weight-bold">March 24, 2019 </p>
                                            <h6 className="label-heading">Arrival Time</h6>
                                            <p className="text-sm font-weight-bold mb-0">Around 4 PM</p>
                                        </div>
                                        <div className="col-12 col-lg-3 align-self-center"><span
                                            className="text-primary text-sm text-uppercase mr-4 mr-lg-0"><i
                                            className="fa fa-check fa-fw mr-2"> </i>Booking paid</span><br
                                            className="d-none d-lg-block" /><span
                                            className="text-primary text-sm text-uppercase"><i
                                            className="fa fa-check fa-fw mr-2"> </i>Confirmed</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        </div>
                        <nav aria-label="Page navigation example">
                            <ul className="pagination pagination-template d-flex justify-content-center">
                                <li className="page-item"><a className="page-link" href="#"> <i
                                    className="fa fa-angle-left"></i></a></li>
                                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item"><a className="page-link" href="#"> <i
                                    className="fa fa-angle-right"></i></a></li>
                            </ul>
                        </nav>
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
)(Orders);