import React, { useEffect } from 'react';
import {Link, withRouter} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {compose} from "redux";
import {connect} from "react-redux";
import {withFirebase} from "react-redux-firebase";

const Navbar = ({ auth }) => {

  if (!auth.isLoaded) return <></>;

  return (
    <>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
              data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
              aria-label="Toggle navigation"><FontAwesomeIcon icon="bars"/></button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <form className="form-inline mt-4 mb-2 d-sm-none" action="#" id="searchcollapsed">
          <div className="input-label-absolute input-label-absolute-left input-reset w-100">
            <label className="label-absolute" htmlFor="searchcollapsed_search"><i className="fa fa-search"/><span
              className="sr-only">What are you looking for?</span></label>
            <input className="form-control form-control-sm border-0 shadow-0 bg-gray-200" id="searchcollapsed_search"
                   placeholder="Search" aria-label="Search"/>
            <button className="btn btn-reset btn-sm" type="reset"><i className="fa-times fas"> </i></button>
          </div>
        </form>
        {auth.isEmpty ? (
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><Link to="/business/create" className="nav-link">List your business</Link></li>
            <li className="nav-item"><Link to="/about-us" className="nav-link">About us</Link></li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">Login</Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link"><i className="fas fa-shopping-cart fa-2x"/></Link>
            </li>
            <li className="nav-item mt-3 mt-lg-0 ml-lg-3 d-lg-none d-xl-inline-block">
              <Link to="/signup" className="btn btn-primary">Sign up</Link>
            </li>
          </ul>
        ) : (
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><Link to="/business/create" className="nav-link">List your business</Link></li>
            <li className="nav-item"><Link to="/about-us" className="nav-link">About us</Link></li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link"><i className="fas fa-shopping-cart fa-2x"/></Link>
            </li>
            <li className="nav-item dropdown ml-lg-3"><a id="userDropdownMenuLink" href="#" data-toggle="dropdown"
                                                         aria-haspopup="true" aria-expanded="false">
                <img className="avatar avatar-md avatar-border-white mr-2" src="/img/avatar/avatar-10.jpg" alt="Jack London" />
              </a>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdownMenuLink">
                <Link className="dropdown-item" to="user-booking-1.html">Booking process - 4 pages </Link>
                <Link className="dropdown-item" to="user-grid.html">Bookings &mdash; grid view </Link>
                <Link className="dropdown-item" to="user-booking-detail.html">Booking detail </Link>
                <div className="dropdown-divider"/>
                <Link className="dropdown-item" to="login.html">
                  <i className="fas fa-sign-out-alt mr-2 text-muted"/> Sign out</Link>
              </div>
            </li>
          </ul>
        )
        }
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  auth: state.firebase.auth,
});

export default compose(
  connect(mapStateToProps),
  withFirebase,
  withRouter
)(Navbar);