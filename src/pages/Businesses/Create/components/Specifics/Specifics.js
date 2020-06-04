import React, { useState } from 'react';
import Layout from '../../../../../components/Layout';
import { compose } from 'redux';
import { withFirebase } from 'react-redux-firebase';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {Field, FieldArray, getIn, useFormikContext} from "formik";


const Specifics = props => {

  const days = ['Sunday', 'Monday', 'Tuesday',
    'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const { touched, errors, values } = useFormikContext();

  return (
    <div className="container">
      <p className="subtitle text-primary">Add new listing</p>
      <h1 className="h2 mb-5"> Disposition and Amenities <span className="text-muted float-right">Step 3</span>
      </h1>
      <div className="row form-block">
        <div className="col-lg-4">
          <h4>Sales</h4>
          <p className="text-muted text-sm"> The number and types of beds you have determines how many guests
            can stay comfortably</p>
        </div>
        <div className="col-lg-7 ml-auto">
          <div className="form-group">
            <div className="col-sm-4 pl-0">
              <label className="form-label" htmlFor="form_name">Sales tax</label>
              <div className="input-group">
                <Field
                  name="tax"
                  placeholder="6.25"
                  type="number"
                  className={getIn(errors, "tax") && getIn(touched, "tax")
                    ? 'form-control is-invalid'
                    : 'form-control'
                  }
                />
                <div className="input-group-append">
                  <div className="input-group-text">%</div>
                </div>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Days of business</label>
            <FieldArray
              name="daysOpen"
              render={arrayHelpers => (
                <div>
                  {days.map((day) => (
                    <div key={day}>
                      <div className="custom-control custom-checkbox">
                        <input
                          name="daysOpen"
                          type="checkbox"
                          className="custom-control-input"
                          value={day}
                          id={day}
                          checked={!!values.daysOpen.includes(day.toLowerCase())}
                          onChange={e => {
                            console.log(values.daysOpen);
                            if (e.target.checked) arrayHelpers.push(day.toLowerCase());
                            else {
                              const idx = values.daysOpen.indexOf(day.toLowerCase());
                              arrayHelpers.remove(idx);
                            }
                          }}
                        />
                        <label className="custom-control-label text-muted" htmlFor={day}>{day}</label>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </div>
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
)(Specifics);