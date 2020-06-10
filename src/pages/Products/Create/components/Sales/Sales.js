import React from 'react';
import {Field, FieldArray, getIn, useFormikContext} from 'formik';

const Sales = () => {

    const {errors, touched, values} = useFormikContext();

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
                        <div className="col-sm-4 pl-0">
                            <label className="form-label" htmlFor="form_name">Price (USD)</label>
                            <div className="input-group">
                                <Field
                                    name="price"
                                    placeholder="10.80"
                                    type="number"
                                    className={getIn(errors, "price") && getIn(touched, "price")
                                        ? 'form-control is-invalid'
                                        : 'form-control'
                                    }
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">$</div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                </div>
            </div>
        </>
    );
};

export default Sales