import React, { useState } from 'react';
import { compose } from 'redux';
import { withFirebase } from 'react-redux-firebase';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { Formik, Field, Form, getIn, ErrorMessage } from 'formik';


const LoginForm = ({ firebase, history }) => {

  const [alert, setAlert] = useState(null);

  const handleSubmit = (values, actions) => {
    const { email, password } = values;
    setAlert(null);

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(result => {
        const { user } = result;

        user.getIdToken()
          .then(token => {
            axios.get(`/api/users/${user.uid}/get`, {
              headers: {
                Authorization: token
              }
            })
              .then(() => {
                return history.push('/');
              })
              .catch(() => {
                firebase.auth().signOut()
                  .then(() => {
                    setAlert("Couldn\'t find a user associated with that account.")
                  });
              })
          })
          .catch(() => {
            firebase.auth().signOut()
              .then(() => {
                setAlert("Couldn\'t find a user associated with that account.")
              });
          });
      })
      .catch(err => {
        switch (err.code) {
          case 'auth/user-not-found':
            setAlert("Could not find user for that email.");
            break;

          case 'auth/invalid-email':
            setAlert("Are you sure that\'s your email?");
            break;

          case 'auth/wrong-password':
            setAlert("Incorrect password.");
            break;

          default:
            setAlert("Something went wrong. Please try again.")
        }

        return actions.setSubmitting(false);
      });
  };

  const signInProvider = provider => {
    setAlert(null);

    firebase.auth().signInWithPopup(provider)
      .then(result => {
        const { user } = result;

        user.getIdToken()
          .then(token => {
            axios.get(`/api/users/${user.uid}/get`, {
              headers: {
                Authorization: token
              }
            })
              .then(() => {
                return history.push('/');
              })
              .catch(() => {
                firebase.auth().signOut()
                  .then(() => {
                    setAlert("Couldn\'t find a user associated with that account.")
                  });
              })
          })
          .catch(() => {
            firebase.auth().signOut()
              .then(() => {
                setAlert("Couldn\'t find a user associated with that account.")
              });
          })
      })
      .catch(err => {
        switch (err.code) {
          case 'auth/user-not-found':
            setAlert("Couldn\'t find a user associated with that account.");
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
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
    >
      {({ errors, isSubmitting, touched }) => (
        <Form className="form-validate" autoComplete="off">
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
            <div className="custom-control custom-checkbox">
              <Field
                name="remember"
                className="custom-control-input"
                type="checkbox"
              />
              <label className="custom-control-label text-muted" htmlFor="loginRemember"> <span
                className="text-sm">Remember me for 30 days</span></label>
            </div>
          </div>
          <button className="btn btn-lg btn-block btn-primary" type="submit" disabled={isSubmitting}>Login</button>
          <hr className="my-3 hr-text letter-spacing-2" data-content="OR" />
          <button type="button" className="btn btn btn-outline-muted btn-block btn-social mb-3" onClick={() => {
            signInProvider(new firebase.auth.GoogleAuthProvider());
          }}>
            <i className="fa-2x fa-google fab btn-social-icon" />Connect <span className="d-none d-sm-inline">with Google</span>
          </button>
          <button type="button" className="btn btn btn-outline-primary btn-block btn-social mb-3" onClick={() => {
            signInProvider(new firebase.auth.FacebookAuthProvider());
          }}>
            <i className="fa-2x fa-facebook-f fab btn-social-icon" />Connect <span className="d-none d-sm-inline">with Facebook</span>
          </button>
          <div role="alert" className="alert alert-danger mt-3 animate bounceIn" hidden={!alert}>{alert}</div>
        </Form>
      )}
    </Formik>
  );
};

export default compose(
  withFirebase,
  withRouter
)(LoginForm);