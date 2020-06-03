import React from 'react';
import {Field, FieldArray, getIn, useFormikContext} from 'formik';

const Billing = () => {

  return (
    <div className="row">
      <div className="col-lg-5">
        <p className="subtitle text-primary">Add a new business</p>
        <h1 className="h2 mb-5">Let's get started</h1>
        <p className="text-muted">Don't let these troubling times stop your business. Instead, adapt your business
          to meet the challenge of our current situation.</p>
        <p className="text-muted mb-5">Persist provides commerce that is convenient for both you and your customers.</p>
        <p className="mb-5 mb-lg-0">
          <a className="stripe-connect" onClick={()=>{props.setSlideIndex(1)}}>
            <span>Connect with Stripe</span>
          </a>
        </p>
      </div>
      <div className="col-lg-5 ml-auto d-flex align-items-center"><img className="img-fluid"
                                                                       src="/img/illustration/undraw_celebration_0jvk.svg"
                                                                       alt="" style={{width: "400px"}} /></div>
    </div>
  )
};

export default Billing;