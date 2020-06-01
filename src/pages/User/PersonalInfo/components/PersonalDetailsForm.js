import React, { useState, useEffect } from 'react';
import { compose } from 'redux';
import { withFirebase } from 'react-redux-firebase';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from "axios";
import { Formik, Field, Form, getIn, ErrorMessage } from 'formik';
import PhoneInput from "react-phone-number-input/input";


const PersonalInfo = ({ auth, profile, firebase }) => {
  const [alert, setAlert] = useState({content: '', success: false, hidden: true});

  const handleSubmit = (values, actions) => {
    const { firstName, lastName, birthdate, number, email, address } = values;

    firebase.auth().currentUser.getIdToken()
      .then(token => {
        axios.post(`/api/users/${auth.uid}/update`, {
          firstName,
          lastName,
          birthdate,
          number,
          email,
          address
        }, {
          headers: {Authorization: token}
        })
          .then(() => {
            setAlert({content:"Your profile was successfully updated!", success: true, hidden: false});
            actions.setSubmitting(false);
          })
          .catch(() => {
            setAlert({content:"There was an error updating your profile.", success: false, hidden: false});
            actions.setSubmitting(false);
          })
      })
      .catch(() => {
        setAlert({content:"There was an error updating your profile.", success: false, hidden: false});
        actions.setSubmitting(false);
      });
  };

  return (
    <Formik
      initialValues={{
        firstName: profile.firstName,
        lastName: profile.lastName,
        birthdate: profile.birthdate,
        number: profile.number,
        email: profile.email,
        address: profile.address
      }}
      onSubmit={handleSubmit}
    >
      {({errors, isSubmitting, touched, values, setFieldValue}) => (
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
              <PhoneInput
                country="US"
                name="number"
                placeholder="(123) 456-7890"
                value={values.number}
                onChange={(value) => setFieldValue('number', value || '')}
                className={getIn(errors, "number") && getIn(touched, "number")
                  ? 'form-control is-invalid'
                  : 'form-control'
                }
              />
            </div>
            <div className="form-group col-md-6">
              <label className="form-label" htmlFor="name">Email</label>
              <Field
                name="email"
                placeholder="example@address.com"
                className={getIn(errors, "email") && getIn(touched, "email")
                  ? 'form-control is-invalid'
                  : 'form-control'
                }
              />
            </div>
            <div className="form-group col-md-6">
              <label className="form-label" htmlFor="name">Address</label>
              <Field
                name="address"
                placeholder="10 Green Street"
                className={getIn(errors, "address") && getIn(touched, "address")
                  ? 'form-control is-invalid'
                  : 'form-control'
                }
              />
            </div>
          </div>
          <button type="submit" className="btn btn-lg btn-block btn-primary" disabled={isSubmitting}>
            Update profile
          </button>
          <div role="alert" className={`alert ${alert.success ? 'alert-success' : 'alert-danger'} mt-3 animate bounceIn`}
               hidden={alert.hidden}>{alert.content}</div>
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