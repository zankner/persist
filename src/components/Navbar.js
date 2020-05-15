import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => (
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
                 placeholder="Search" aria-label="Search" />
          <button className="btn btn-reset btn-sm" type="reset"><i className="fa-times fas"> </i></button>
        </div>
      </form>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
        <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
        <li className="nav-item"><Link to="/business" className="nav-link">Add Your Business</Link></li>
        <li className="nav-item"><Link to="/cart" className="nav-link"><i className="fas fa-shopping-cart fa-lg"/></Link></li>
      </ul>
    </div>
  </>
);

export default Navbar;