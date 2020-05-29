import React, { useState } from 'react';
import { compose } from 'redux';
import { withFirebase } from 'react-redux-firebase';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { Formik, Field, Form, getIn, ErrorMessage } from 'formik';


const SignupForm = ({ firebase, history }) => {

  const [alert, setAlert] = useState(null);

  const handleSubmit = (values, actions) => {
    const { firstName, lastName, email, password } = values;
    setAlert(null);

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(result => {
        const { user } = result;

        user.getIdToken()
          .then(token => {
            axios.post('/api/users/create', {
              firstName, lastName, email
            }, {
              headers: {
                Authorization: token
              }
            })
              .then(() => {
                firebase.auth().currentUser.sendEmailVerification();

                return history.push('/');
              })
          })
      })
      .catch(err => {
        switch (err.code) {
          case 'auth//email-already-in-use':
            setAlert("That email is already in use.");
            break;

          case 'auth/invalid-email':
            setAlert("Are you sure that\'s your email?");
            break;

          case 'auth/weak-password':
            setAlert("Make sure your password is at least 6 characters.");
            break;

          default:
            setAlert("Something went wrong. Please try again.")
        }

        return actions.setSubmitting(false);
      });
  };

  const signUpProvider = provider => {
    setAlert(null);

    firebase.auth().signInWithPopup(provider)
      .then(result => {
        const { user } = result;
        const { email, displayName } = user;

        const firstName = displayName.split(' ')[0];
        const lastName = displayName.split(' ')[1] || '';

        console.log(email);
        console.log(firstName);
        console.log(lastName);

        user.getIdToken()
          .then(token => {
            axios.post('/api/users/create', {
              firstName, lastName, email
            }, {
              headers: {
                Authorization: token
              }
            })
              .then(() => {
                firebase.auth().currentUser.sendEmailVerification();

                return history.push('/');
              })
          })
      })
      .catch(err => {
        console.log("had err")
        switch (err.code) {
          case 'auth/account-exists-with-different-credential':
            setAlert("The email for that account is already in use.");
            break;

          case 'auth/cancelled-popup-request':
            break;

          case 'auth/popup-closed-by-user':
            break;

          default:
            setAlert("Something went wrong. Please try again.")
        }
      })
  };

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }}
      onSubmit={handleSubmit}
    >
      {({ errors, isSubmitting, touched }) => (
        <Form className="form-validate" autoComplete="off">
          <div className="form-row">
            <div className="form-group col-md-6">
              <label className="form-label">First name</label>
              <Field
                name="firstName"
                placeholder="John"
                className={getIn(errors, 'firstName') && getIn(touched, 'firstName')
                  ? 'form-control is-invalid'
                  : 'form-control'}
              />
              <ErrorMessage name="firstName" component="span" className="mt-1 text-danger small" />
            </div>
            <div className="form-group col-md-6">
              <label className="form-label">Last name</label>
              <Field
                name="lastName"
                placeholder="Doe"
                className={getIn(errors, 'lastName') && getIn(touched, 'lastName')
                  ? 'form-control is-invalid'
                  : 'form-control'}
              />
              <ErrorMessage name="lastName" component="span" className="mt-1 text-danger small" />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label"> Email Address</label>
            <Field
              name="email"
              placeholder="name@address.com"
              className={getIn(errors, 'email') && getIn(touched, 'email')
                ? 'form-control is-invalid'
                : 'form-control'
              }
            />
            <ErrorMessage name="email" component="span" className="mt-1 text-danger small" />
          </div>
        <div className="form-group">
          <label className="form-label"> Password</label>
          <Field
            name="password"
            placeholder="Password"
            className={getIn(errors, 'password') && getIn(touched, 'password')
              ? 'form-control is-invalid'
              : 'form-control'
            }
          />
          <ErrorMessage name="password" component="span" className="mt-1 text-danger small" />
        </div>
        <div className="form-group mb-4">
          <label className="form-label"> Confirm your password</label>
          <Field
            name="confirmPassword"
            placeholder="Password"
            className={getIn(errors, 'confirmPassword') && getIn(touched, 'confirmPassword')
              ? 'form-control is-invalid'
              : 'form-control'
            }
          />
          <ErrorMessage name="confirmPassword" component="span" className="mt-1 text-danger small" />
        </div>
        <button className="btn btn-lg btn-block btn-primary" type="submit" disabled={isSubmitting}>Sign up</button>
        <hr className="my-3 hr-text letter-spacing-2" data-content="OR" />
        <button type="button" className="btn btn btn-outline-muted btn-block btn-social mb-3" onClick={() => {
          signUpProvider(new firebase.auth.GoogleAuthProvider());
        }}>
          <i className="fa-2x fa-google fab btn-social-icon" />Connect <span className="d-none d-sm-inline">with Google</span>
        </button>
        <button type="button" className="btn btn btn-outline-primary btn-block btn-social mb-3" onClick={() => {
          signUpProvider(new firebase.auth.FacebookAuthProvider());
        }}>
          <i className="fa-2x fa-facebook-f fab btn-social-icon" />Connect <span className="d-none d-sm-inline">with Facebook</span>
        </button>
        <hr className="my-4" />
        <div role="alert" className="alert alert-danger mt-3 animate bounceIn" hidden={!alert}>{alert}</div>
        <hr className="my-4" />
        <p className="text-sm text-muted">By signing up you agree to Directory's <a href="#">Terms and
        Conditions</a> and <a href="#">Privacy Policy</a>.</p>
        </Form>
      )}
    </Formik>
  );
};

export default compose(
  withFirebase,
  withRouter
)(SignupForm);