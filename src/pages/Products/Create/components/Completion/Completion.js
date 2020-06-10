import React, { useState } from 'react';
import { Link, withRouter } from "react-router-dom";
import axios from 'axios';
import {compose} from 'redux';


const Completion = ({ creationStatus, profile, productId, businessId, firebase }) => {

  const [alert, setAlert] = useState(null);

  if (creationStatus === null || (!productId && creationStatus)) return <></>;

  return (
    <>
      <div className="container text-center">
        <p className="subtitle text-primary">Add new listing</p>
        <h1 className="h2 mb-5">{creationStatus === true ? 'Business created' : 'Error creating business'}</h1>
        <p className="mb-5"><img className="img-fluid"
                                 src={creationStatus === true
                                   ? '/img/illustration/undraw_celebration_0jvk.svg'
                                   : '/img/illustration/undraw_cancel_u1it.svg'} alt=""
                                 style={{width: "400px"}} /></p>
        <p className="text-muted mb-5">
          {creationStatus === true
          ? `Thank you, ${profile.firstName}. Your listing has been saved and will be reviewed shortly.`
          : 'We\'re sorry. Unfortunately, an error occurred creating your business.'}</p>
        {creationStatus === true
        ? <>
            <Link className="btn btn-primary mr-2 mb-2" to="/products/:product">View product</Link>
            <Link className="btn btn-outline-muted mb-2" to={`/businesses/${businessId}`}>Return to business</Link>
          </>
        : <>
            <Link className="btn btn-primary mr-2 mb-2" to='/business/create'
                  onClick={() => window.location.reload()}>Try again</Link>
            <Link className="btn btn-outline-muted mb-2" to='/'>Return home</Link>
          </>
        }
      </div>
    </>
  )
};

export default compose(withRouter(Completion));