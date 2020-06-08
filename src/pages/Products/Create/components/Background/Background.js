import React from 'react';
import {Field, FieldArray, getIn, useFormikContext} from 'formik';

const Background = () => {

  const {errors, touched, values} = useFormikContext();

  const days = ['Sunday', 'Monday', 'Tuesday',
    'Wednesday', 'Thursday', 'Friday', 'Saturday'];

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
        </div>
      </div>
    </>
  );
};

export default Background