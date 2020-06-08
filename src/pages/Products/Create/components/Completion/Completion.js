import React, { useState } from 'react';
import { Link, withRouter } from "react-router-dom";
import axios from 'axios';
import {compose} from 'redux';


const Completion = ({ creationStatus, profile, businessId, firebase, history }) => {

  const [alert, setAlert] = useState(null);

  const connectBilling = () => {
    firebase.auth().currentUser.getIdToken()
      .then(token => {
        axios.post(`/api/businesses/${businessId}/billing/connect`, {}, {
          headers: {Authorization: token}
        })
          .then(res => {
            window.location = res.data.stripeUrl;
          })
          .catch(() => setAlert("Something went wrong. Please try again."));
      })
      .catch(() => setAlert("Something went wrong. Please try again."));
  };

  if (creationStatus === null || (!businessId && creationStatus)) return <></>;

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
            <button className="btn btn-primary mr-2 mb-2" type="button" onClick={connectBilling}>Set up billing</button>
            <Link className="btn btn-outline-muted mb-2" to={`/businesses/${businessId}`}>View business</Link>
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