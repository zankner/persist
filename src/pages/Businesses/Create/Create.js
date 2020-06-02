import React, { useState } from 'react';
import Layout from '../../../components/Layout';
import { compose } from 'redux';
import { withFirebase } from 'react-redux-firebase';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Formik, Field, Form, getIn, ErrorMessage } from 'formik';
import Introduction from "./components/Introduction/Introduction";
import Background from "./components/Background/Background";
import Description from "./components/Description/Description";
import Specifics from "./components/Specifics/Specifics";
import Photos from "./components/Photos/Photos";
import Completion from "./components/Completion/Completion";


const Create = props => {

  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <Layout >
      <div className="pt-nav">
        <Formik
          initialValues={{
            name: "Company",
          }
          }}
          onSubmit={handleSubmit}
        >
        {slideIndex === 0 && Introduction}
        {slideIndex === 1 && Background}
        {slideIndex === 2 && Description}
        {slideIndex === 3 && Specifics}
        {slideIndex === 4 && Photos}
        {slideIndex === 5 && Completion}
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