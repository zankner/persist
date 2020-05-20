import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { compose } from 'redux';
import { withFirebase } from 'react-redux-firebase';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


const Billing = props => {

    return (
        <Layout >
            <div className="pt-nav">

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