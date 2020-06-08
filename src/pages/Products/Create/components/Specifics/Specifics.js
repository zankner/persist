import React, {useState} from 'react';
import Layout from '../../../../../components/Layout';
import {compose} from 'redux';
import {withFirebase} from 'react-redux-firebase';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {Field, FieldArray, getIn, useFormikContext} from "formik";
import {Collapse} from "react-bootstrap";


const Specifics = props => {

  const [showSize, setShowSize] = useState(null);

  const days = ['Sunday', 'Monday', 'Tuesday',
    'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const {touched, errors, values, setFieldValue} = useFormikContext();

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
            <label className="form-label">Does sizing matter for your product?</label>
            <div className="custom-control custom-radio">
              <input className="custom-control-input" type="radio" id="sizing_0" name="isSizing"
                     checked={values.isSizing === true}
                     onChange={() => {
                       setFieldValue("isSizing", true);
                       setShowSize(true);
                     }}
                     data-toggle="collapse" data-target="#true-size" aria-controls="true-size" aria-expanded="false"
            />
            <label className="custom-control-label" htmlFor="sizing_0">Yes, it has multiple sizes</label>
          </div>
          <div className="custom-control custom-radio">
            <input className="custom-control-input" type="radio" id="sizing_1" name="isSizing"
                   checked={values.isSizing === false}
                   onChange={() => {
                     setFieldValue("isSizing", false);
                     setShowSize(false);
                   }}
                   data-toggle="collapse" data-target="#false-size" aria-controls="false-size" aria-expanded="false"
            />
            <label className="custom-control-label" htmlFor="sizing_1">No, it is just one size</label>
          </div>
        </div>
        <Collapse in={showSize === true}>
          <div className="form-group">
            <div className="col-sm-4 pl-0">
              <label className="form-label" htmlFor="form_name">Product sizes</label>
              <FieldArray
                name="sizes"
                render={arrayHelpers => (
                  <div>
                    {values.sizes.map((size, index) => (
                      <div key={index}>
                        <div className="input-group mb-2">
                          <Field
                            name={`sizes.${index}`}
                            placeholder="MD"
                            type="text"
                            className={getIn(errors, "sizes") && getIn(touched, "sizes")
                              ? 'form-control is-invalid'
                              : 'form-control'
                            }
                          />
                          <div className="input-group-append">
                            <button type="button" className="btn btn-secondary input-group-btn fa-lg"
                                    onClick={() => arrayHelpers.remove(values.sizes.indexOf(size))}>
                              <i className="fas fa-trash" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              />
              <button type="button" className="btn btn-block btn-primary"
                      onClick={() => setFieldValue('sizes', values.sizes.concat(''))}><i className="fas fa-plus fa-lg" /></button>
            </div>
          </div>
        </Collapse>
        <Collapse in={showSize === false}>
          <h1>test 2</h1>
        </Collapse>
        {/*<div className="form-group">*/}
        {/*  <div className="col-sm-4 pl-0">*/}
        {/*    <label className="form-label" htmlFor="form_name">Sales tax</label>*/}
        {/*    <div className="input-group">*/}
        {/*      <Field*/}
        {/*        name="tax"*/}
        {/*        placeholder="6.25"*/}
        {/*        type="number"*/}
        {/*        className={getIn(errors, "tax") && getIn(touched, "tax")*/}
        {/*          ? 'form-control is-invalid'*/}
        {/*          : 'form-control'*/}
        {/*        }*/}
        {/*      />*/}
        {/*      <div className="input-group-append">*/}
        {/*        <div className="input-group-text">%</div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<div className="form-group">*/}
        {/*  <label className="form-label">Days of business</label>*/}
        {/*  <FieldArray*/}
        {/*    name="daysOpen"*/}
        {/*    render={arrayHelpers => (*/}
        {/*      <div>*/}
        {/*        {days.map((day) => (*/}
        {/*          <div key={day}>*/}
        {/*            <div className="custom-control custom-checkbox">*/}
        {/*              <input*/}
        {/*                name="daysOpen"*/}
        {/*                type="checkbox"*/}
        {/*                className="custom-control-input"*/}
        {/*                value={day}*/}
        {/*                id={day}*/}
        {/*                checked={!!values.daysOpen.includes(day.toLowerCase())}*/}
        {/*                onChange={e => {*/}
        {/*                  console.log(values.daysOpen);*/}
        {/*                  if (e.target.checked) arrayHelpers.push(day.toLowerCase());*/}
        {/*                  else {*/}
        {/*                    const idx = values.daysOpen.indexOf(day.toLowerCase());*/}
        {/*                    arrayHelpers.remove(idx);*/}
        {/*                  }*/}
        {/*                }}*/}
        {/*              />*/}
        {/*              <label className="custom-control-label text-muted" htmlFor={day}>{day}</label>*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*        ))}*/}
        {/*      </div>*/}
        {/*    )}*/}
        {/*  />*/}
        {/*</div>*/}
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