import React, { useState, useEffect } from 'react';
import { compose } from 'redux';
import { withFirebase } from 'react-redux-firebase';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from "axios";
import { Formik, Field, Form, getIn, ErrorMessage } from 'formik';


const PersonalInfo = ({ auth, profile, firebase }) => {
  const [alert, setAlert] = useState(null);

  const handleSubmit = (values, actions) => {
    const { firstName, lastName, birthdate, number } = values;

    firebase.auth().currentUser.getIdToken()
      .then(token => {
        axios.post(`/api/users/${auth.uid}/update`, {
          firstName,
          lastName,
          birthdate,
          number
        }, {
          headers: {Authorization: token}
        })
          .then(() => {
            setAlert("Your profile was successfully updated!");
            actions.setSubmitting(false);
          })
          .catch(() => {
            setAlert("There was an error updating your profile.");
            actions.setSubmitting(false);
          })
      })
      .catch(() => {
        setAlert("There was an error updating your profile.");
        actions.setSubmitting(false);
      });
  };

  return (
    <Formik
      initialValues={{
        firstName: profile.firstName,
        lastName: profile.lastName,
        birthdate: profile.birthdate,
        number: profile.number
      }}
      onSubmit={handleSubmit}
    >
      {({errors, isSubmitting, touched}) => (
        <Form className="form-validate" autoComplete="off">
          <div className="row pt-4">
            <div className="form-group col-md-6">
              <label className="form-label" htmlFor="name">First Name</label>
              <Field
                name="firstName"
                placeholder="John"
                className={getIn(errors, "firstName") && getIn(touched, "firstName")
                  ? 'form-control is-invalid'
                  : 'form-control'
                }
              />
            </div>
            <div className="form-group col-md-6">
              <label className="form-label" htmlFor="name">Last Name</label>
              <Field
                name="lastName"
                placeholder="Doe"
                className={getIn(errors, "lastName") && getIn(touched, "lastName")
                  ? 'form-control is-invalid'
                  : 'form-control'
                }
              />
            </div>
            <div className="form-group col-md-6">
              <label className="form-label" htmlFor="name">Date of Birth</label>
              <Field
                name="birthdate"
                placeholder="06/22/1980"
                className={getIn(errors, "birthdate") && getIn(touched, "birthdate")
                  ? 'form-control is-invalid'
                  : 'form-control'
                }
              />
            </div>
            <div className="form-group col-md-6">
              <label className="form-label" htmlFor="name">Phone Number</label>
              <Field
                name="number"
                placeholder="123456789"
                className={getIn(errors, "number") && getIn(touched, "number")
                  ? 'form-control is-invalid'
                  : 'form-control'
                }
              />
            </div>
          </div>
          <button className="btn btn-outline-primary mb-4" type="submit" disabled={isSubmitting}> Save your
            personal details
          </button>
          <div role="alert" className="alert alert-danger mt-3 animate bounceIn" hidden={!alert}>{alert}</div>
        </Form>
      )}
    </ Formik>
  )
};


const mapStateToProps = state => ({
  auth: state.firebase.auth,
});

export default compose(
  connect(mapStateToProps),
  withFirebase,
  withRouter
)(PersonalInfo);