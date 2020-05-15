import React from 'react';
import Layout from '../../components/Layout';
import { compose } from 'redux';
import { withFirebase } from 'react-redux-firebase';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const Home = props => {
  return (
    <Layout>
      <section className="d-flex align-items-center dark-overlay bg-cover"
               style={{backgroundImage: `url(img/photo/photo-1525610553991-2bede1a236e2.jpg)`}}>
        <div className="container py-6 py-lg-7 text-white overlay-content text-center">
          <div className="row">
            <div className="col-xl-10 mx-auto">
              <h1 className="display-3 font-weight-bold text-shadow">Discover Directory</h1>
              <p className="text-lg text-shadow">Uncover the best places to eat, drink, and shop nearest to you.</p>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="search-bar rounded p-3 p-lg-4 position-relative mt-n5 z-index-20">
          <form action="#">
            <div className="row">
              <div className="col-lg-4 d-flex align-items-center form-group">
                <input className="form-control border-0 shadow-0" type="search" name="search"
                       placeholder="What are you searching for?" />
              </div>
              <div className="col-md-6 col-lg-3 d-flex align-items-center form-group">
                <div className="input-label-absolute input-label-absolute-right w-100">
                  <label className="label-absolute" htmlFor="location"><i className="fa fa-crosshairs"></i>
                    <div className="sr-only">City</div>
                  </label>
                  <input className="form-control border-0 shadow-0" type="text" name="location" placeholder="Location"
                         id="location" />
                </div>
              </div>
              <div className="col-md-6 col-lg-3 d-flex align-items-center form-group no-divider">
                <select className="selectpicker" title="Categories" data-style="btn-form-control">
                  <option value="small">Restaurants</option>
                  <option value="medium">Hotels</option>
                  <option value="large">Cafes</option>
                  <option value="x-large">Garages</option>
                </select>
              </div>
              <div className="col-lg-2 form-group mb-0">
                <button className="btn btn-primary btn-block h-100" type="submit">Search</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = state => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile
});

export default compose(
  connect(mapStateToProps),
  withFirebase,
  withRouter
)(Home);
