import React, {useEffect, useState} from 'react';
import Layout from '../../../components/Layout';
import {compose} from 'redux';
import {withFirebase} from 'react-redux-firebase';
import {withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Formik, Field, Form, getIn, ErrorMessage} from 'formik';
import Introduction from "./components/Introduction/Introduction";
import Background from "./components/Background/Background";
import Photos from "./components/Photos/Photos";
import Completion from "./components/Completion/Completion";
import axios from "axios";
import NotFound from "../../../components/NotFound";
import Specifics from "./components/Specifics/Specifics";
import Sales from "./components/Sales/Sales";


const Create = ({auth, profile, firebase, match}) => {

  const [error, setError] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const [creationStatus, setCreationStatus] = useState(null);
  const [productId, setProductId] = useState('');
  const [business, setBusiness] = useState(null);

  const handleSubmit = (values, actions) => {
    if (slideIndex === 4) {
      const { name, description, tax, isSizing, price, sizes, photos, filePath } = values;

      firebase.auth().currentUser.getIdToken()
        .then(token => {
          axios.post(`/api/products/businesses/${match.params.business}/create`, {
            name, price, description, tax, isSizing, sizes, photos, filePath
          }, {
            headers: {Authorization: token}
          })
            .then(res => {
              setSlideIndex(slideIndex + 1);
              setCreationStatus(true);
              setProductId(res.data.id);
              actions.setSubmitting(false);
            })
            .catch(() => {
              setSlideIndex(slideIndex + 1);
              setCreationStatus(false);
              actions.setSubmitting(false);
            })
        })
        .catch(() => {
          setSlideIndex(slideIndex + 1);
          setCreationStatus(false);
          actions.setSubmitting(false);
        });
    } else {
      setSlideIndex(slideIndex + 1);
      actions.setSubmitting(false);
    }
  };

  useEffect(() => {
    if (!auth.isLoaded) return;
    firebase.auth().currentUser.getIdToken()
      .then(token => {
        axios.get(`/api/businesses/${match.params.business}/admin/get`, {
          headers: {Authorization: token}
        })
          .then(res => {
            setBusiness(res.data)
          })
          .catch(() => setError(true));
      })
      .catch(() => {
        setError(true);
      })
  }, [auth]);

  if (error || profile.isEmpty) return <NotFound/>;

  if (!business) return <NotFound/>;

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
                description: "",
                tax: business.tax,
                isSizing: "",
                price: "",
                filePath: "",
                sizes: [{size: '', available: true}],
                photos: []
              }}
              onSubmit={handleSubmit}
            >
              {({errors, isSubmitting, touched, setFieldValue}) => (
                <Form className="form-validate" autoComplete="off">
                  {slideIndex === 0 && <Introduction setSlideIndex={setSlideIndex}/>}
                  {slideIndex === 1 && <Background />}
                  {slideIndex === 2 && <Sales />}
                  {slideIndex === 3 && <Specifics />}
                  {slideIndex === 4 && <Photos auth={auth} businessId={business.id}/>}
                  {slideIndex === 5 && <Completion
                    creationStatus={creationStatus} profile={profile} businessId={business.id}
                    productId={productId} firebase={firebase}/>}
                  <div className="row form-block flex-column flex-sm-row">
                    <div className="col text-center text-sm-left">
                      <button className={`btn btn-link text-muted ${(slideIndex === 0 || slideIndex === 5) ? 'd-none' : ''}`}
                              type="button"
                              onClick={() => setSlideIndex(slideIndex - 1)}>
                        <i className="fa-chevron-left fa mr-2"/>Back
                      </button>
                    </div>
                    <div className="col text-center text-sm-right">
                      <button className={`btn btn-primary px-3 ${(slideIndex === 0 || slideIndex === 5) ? 'd-none' : ''}`}
                              type="submit"> {slideIndex === 4 ? 'Add Business' : 'Next step'}
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