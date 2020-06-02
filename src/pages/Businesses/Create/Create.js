import React, {useEffect, useState} from 'react';
import Layout from '../../../components/Layout';
import {compose} from 'redux';
import {withFirebase} from 'react-redux-firebase';
import {withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Formik, Field, Form, getIn, ErrorMessage} from 'formik';
import Introduction from "./components/Introduction/Introduction";
import Background from "./components/Background/Background";
import Description from "./components/Description/Description";
import Specifics from "./components/Specifics/Specifics";
import Photos from "./components/Photos/Photos";
import Completion from "./components/Completion/Completion";
import axios from "axios";
import NotFound from "../../../components/NotFound";


const Create = ({auth, profile, firebase}) => {

  const [error, setError] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  const handleSubmit = (values, actions) => {
    setSlideIndex(slideIndex + 1)
  };

  useEffect(() => {
    if (!auth.isLoaded) return;
    firebase.auth().currentUser.getIdToken()
      .then(token => {
        axios.get(`/api/users/${auth.uid}/get`, {
          headers: {Authorization: token}
        })
          .catch(() => setError(true));
      })
      .catch(() => {
        setError(true);
      })
  }, [auth]);

  if (error || profile.isEmpty) return <NotFound/>;

  return (
    <Layout>
      <div className="pt-nav">
        <div className="progress rounded-0 sticky-top" style={{height: '8px', top: '78px'}}>
          <div className="progress-bar" role="progressbar" style={{
            width: `${20 * slideIndex}%`, ariaValuenow: `${20 * slideIndex}`, ariaValuemin: "0",
            ariaValuemax: "100"
          }}/>
        </div>
        <section className="py-5 py-lg-7">
          <div className="container">
          <Formik
            initialValues={{
              name: "",
              address: "",
              description: "",
              daysOpen: [],
              photos: []
            }}
            onSubmit={handleSubmit}
          >
            {({errors, isSubmitting, touched}) => (
              <Form className="form-validate" autoComplete="off">
                {slideIndex === 0 && <Introduction setSlideIndex={setSlideIndex}/>}
                {slideIndex === 1 && <Background />}
                {slideIndex === 2 && <Description />}
                {slideIndex === 3 && <Specifics />}
                {slideIndex === 4 && <Photos />}
                {slideIndex === 5 && <Completion />}
                <div className="row form-block flex-column flex-sm-row">
                  <div className="col text-center text-sm-left">
                    <button className={`btn btn-link text-muted ${(slideIndex === 1 || slideIndex === 5) ? '' : 'd-none'}`}
                            onClick={() => setSlideIndex(slideIndex - 1)}>
                      <i className="fa-chevron-left fa mr-2"/>Back
                    </button>
                  </div>
                  <div className="col text-center text-sm-right">
                    <button className={`btn btn-primary px-3 ${(slideIndex === 1 || slideIndex === 5) ? '' : 'd-none'}`}
                            type="submit"> {slideIndex === 4 ? 'Finish' : 'Next step'}
                      <i className="fa-chevron-right fa ml-2"/></button></div>
                </div>
              </Form>
            )}
          </Formik>
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