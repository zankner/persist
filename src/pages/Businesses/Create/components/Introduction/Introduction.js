import React, { useState } from 'react';
import Layout from '../../../components/Layout';
import { compose } from 'redux';
import { withFirebase } from 'react-redux-firebase';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';


const Introduction = props => {

    return (
        <Layout >
            <div className="pt-nav">
                <div className="progress rounded-0 sticky-top" style={{height: '8px', top: '78px'}}>
                    <div className="progress-bar" role="progressbar" style={{
                        width: "0%", ariaValuenow: "0", ariaValuemin: "0",
                        ariaValuemax: "100"
                    }}/>
                </div>
                <section className="py-5 py-lg-7">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <p className="subtitle text-primary">Add a new business</p>
                                <h1 className="h2 mb-5">Let's get started</h1>
                                <p className="text-muted">Don't let these troubling times stop your business. Instead, adapt your business
                                    to meet the challenge of our current situation.</p>
                                <p className="text-muted mb-5">Persist provides commerce that is convenient for both you and your customers.</p>
                                <p className="mb-5 mb-lg-0">
                                    <Link className="btn btn-primary" to="/business/create/background">Add your business</Link>
                                </p>
                            </div>
                            <div className="col-lg-5 ml-auto d-flex align-items-center"><img className="img-fluid"
                                                                                             src="/img/illustration/undraw_celebration_0jvk.svg"
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
)(Introduction);