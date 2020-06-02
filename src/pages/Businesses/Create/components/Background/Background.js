import React from 'react';
import { Field, FieldArray, getIn, useFormikContext } from 'formik';

const Background = () => {

  const { errors, touched } = useFormikContext();

  const days = ['sunday', 'monday', 'tuesday',
    'wednesday', 'thursday', 'friday', 'saturday'];

  return (
    <>
      <p className="subtitle text-primary">Add new business</p>
      <h1 className="h2 mb-5"> Basic information <span
        className="text-muted float-right">Background</span></h1>
      <div className="row form-block">
        <div className="col-lg-4">
          <h4>Basic</h4>
          <p className="text-muted text-sm">Let us know about your company.</p>
        </div>
        <div className="col-lg-7 ml-auto">
          <div className="form-group">
            <label className="form-label" htmlFor="form_name">Company name</label>
            <Field
              name="name"
              placeholder="Company Inc."
              className={getIn(errors, "name") && getIn(touched, "name")
                ? 'form-control is-invalid'
                : 'form-control'
              }
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="form_description">Describe your business to customers</label>
            <Field
              name="description"
              placeholder="Company Inc. is dedicated to helping its customers"
              component="textarea"
              rows="5"
              className={getIn(errors, "description") && getIn(touched, "description")
                ? 'form-control is-invalid'
                : 'form-control'
              }
            />
            <small className="form-text text-muted mt-2" id="descriptionHelp">The bedding was
            hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin
            compared with the size of the rest of him, waved about helplessly as he looked. &quot;What's
            happened to me?&quot; he thought. It wasn't a dream. </small>
          </div>
          <div className="form-group">
            <label className="form-label">Is your property set as a dedicated guest
              space?</label>
            <FieldArray
              name="daysOpen"
              render={arrayHelpers => (
                <div>
                  {days.map((day, index) => (
                    <div key={index}>
                      <div className="custom-control custom-radio">
                        <input className="custom-control-input" type="radio" id="guests_0"
                               name="guests"/>
                        <label className="custom-control-label" htmlFor="guests_0">{day}</label>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Is your property set as a dedicated guest
              space?</label>
            <div className="custom-control custom-radio">
              <input className="custom-control-input" type="radio" id="guests_0"
                     name="guests"/>
              <label className="custom-control-label" htmlFor="guests_0">Yes, it's
                primarily set up for
                guests</label>
            </div>
            <div className="custom-control custom-radio">
              <input className="custom-control-input" type="radio" id="guests_1"
                     name="guests"/>
              <label className="custom-control-label" htmlFor="guests_1">No, I keep my
                personal belongings
                there</label>
            </div>
          </div>
        </div>
      </div>
      <div className="row form-block">
        <div className="col-lg-4">
          <h4>Location</h4>
          <p className="text-muted text-sm">Samsa was a travelling salesman - and above it
            there hung a picture
            that he had recently cut out of an illustrated magazine and housed in a nice,
            gilded frame.</p>
        </div>
        <div className="col-lg-7 ml-auto">
          <div className="form-group">
            <label className="form-label" htmlFor="form_country">Country / Region</label>
            <select className="selectpicker form-control" name="country" id="form_country"
                    data-style="btn-selectpicker" title=" " data-live-search="true">
              <option value="country_#{index}">Afghanistan</option>
              <option value="country_#{index}">Albania</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="form_street">Street Address</label>
            <input className="form-control" name="name" id="form_street"/>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label className="form-label" htmlFor="form_city">City</label>
                <input className="form-control" name="name" id="form_city"/>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="form-label" htmlFor="form_state">State</label>
                <input className="form-control" name="name" id="form_state"/>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label className="form-label" htmlFor="form_zip">ZIP Code</label>
                <input className="form-control" name="name" id="form_zip"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Background