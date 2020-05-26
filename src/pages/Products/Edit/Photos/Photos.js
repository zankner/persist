import React, { useState } from 'react';
import Layout from '../../../../components/Layout';
import { compose } from 'redux';
import { withFirebase } from 'react-redux-firebase';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


const Photos = props => {

  return (
    <Layout >
      <div className="pt-nav">
        <div className="progress rounded-0 sticky-top" style={{height: "8px", top: "71px"}}>
          <div className="progress-bar" role="progressbar" style={{width: "0%", ariaValuenow: "0", ariaValuemin: "0"}}
               aria-valuemax="100"/>
        </div>
        <section className="py-5">
          <div className="container">
            <p className="subtitle text-primary">Add new listing</p>
            <h1 className="h2 mb-5"> Photos <span className="text-muted float-right">Step 4</span></h1>
            <div className="row form-block">
              <div className="col-lg-4">
                <h4>Photos</h4>
                <p className="text-muted text-sm">His room, a proper human room although a little too small, lay
                  peacefully between its four familiar walls. A collection of textile samples lay spread out on the
                  table.</p>
              </div>
              <div className="col-lg-7 ml-auto">
                <div className="form-group">
                  <form className="dropzone" id="demo-upload" action="/upload">
                    <div className="dz-message text-muted">
                      <p>Drop files here or click to upload.</p>
                      <p><span className="note">(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</span>
                      </p>
                    </div>
                  </form>
                </div>
                <div className="d-none" id="dropzoneTemplate">
                  <div className="dz-preview dz-file-preview">
                    <div className="dz-image"><img data-dz-thumbnail="" alt="" src="/img/logo-square.svg" /></div>
                    <div className="dz-details">
                      <div className="dz-filename"><span data-dz-name=""></span></div>
                      <div className="dz-size" data-dz-size=""></div>
                    </div>
                    <div className="dz-progress"><span className="dz-upload" data-dz-uploadprogress=""></span></div>
                    <div className="dz-success-mark"><span className="dz-icon"><i className="fa-check fa"></i></span>
                    </div>
                    <div className="dz-error-mark"><span className="dz-icon"><i className="fa-times fa"></i></span>
                    </div>
                    <div className="dz-error-message"><span data-dz-errormessage=""></span></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row form-block flex-column flex-sm-row">
              <div className="col text-center text-sm-left"><a className="btn btn-link text-muted"
                                                               href="user-add-3.html"> <i
                className="fa-chevron-left fa mr-2"></i>Back</a>
              </div>
              <div className="col text-center text-sm-right"><a className="btn btn-primary px-3"
                                                                href="user-add-5.html"> Finish<i
                className="fa-chevron-right fa ml-2"></i></a></div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
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
)(Photos);