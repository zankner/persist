import React, { useState } from 'react';


const Completion = ({ creationStatus, profile }) => {

  if (creationStatus === null) return <></>;

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
        <p className="mb-5"><a className="btn btn-primary mr-2 mb-2" href="#">Do something</a><a
          className="btn btn-outline-muted mb-2" href="#">Or something else</a></p>
      </div>
    </>
  )
};

export default Completion;