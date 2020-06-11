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
            <div className="col-md-9 pl-0">
              <div className="d-flex justify-content-between">
                <label className="form-label" htmlFor="form_name">Product sizes</label>
                <label className="form-label" htmlFor="form_name">In Stock</label>
              </div>
              <FieldArray
                name="sizes"
                render={arrayHelpers => (
                  <div>
                    {values.sizes.map(({size, availability}, index) => (
                      <div key={index}>
                        <div className="d-flex justify-content-between row mb-2">
                          <div className="col-6">
                            <div className="input-group">
                              <Field
                                name={`sizes.${index}.size`}
                                placeholder="MD"
                                type="text"
                                className={getIn(errors, "sizes") && getIn(touched, "sizes")
                                  ? 'form-control is-invalid'
                                  : 'form-control'
                                }
                              />
                              <div className="input-group-append">
                                <button type="button" className="btn btn-secondary input-group-btn fa-lg"
                                        onClick={() => arrayHelpers.remove(index)}>
                                  <i className="fas fa-trash" />
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="btn-group btn-group-toggle d-flex justify-content-end">
                              <label className={`btn btn-primary ${values.sizes[index].available === false ? 'disabled' : ''}`}>
                                <Field type="radio" name={`sizes.${index}.available`} id="option2" autoComplete="off"
                                       checked={values.sizes[index].available === true}
                                       onChange={e => {
                                         if (e.target.checked) {
                                           setFieldValue(`sizes.${index}.available`, true);
                                         }
                                       }}
                                />
                                <i className="fas fa-check"/>
                              </label>
                              <label className={`btn btn-primary ${values.sizes[index].available === true ? 'disabled' : ''}`}>
                                <Field type="radio" name={`sizes.${index}.available`} id="option2" autoComplete="off"
                                       checked={values.sizes[index].available === false}
                                       onChange={e => {
                                         if (e.target.checked) {
                                           setFieldValue(`sizes.${index}.available`, false);
                                         }
                                       }}
                                />
                                <i className="fas fa-times"/>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              />
              <div className="col-6 pl-0">
                <button type="button" className="btn btn-block btn-primary"
                        onClick={() => setFieldValue('sizes', values.sizes.concat(''))}><i className="fas fa-plus fa-lg" /></button>
              </div>
            </div>
          </div>
        </Collapse>
        <Collapse in={showSize === false}>
          <h1>test 2</h1>
        </Collapse>
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