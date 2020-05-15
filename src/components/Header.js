import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Header = () => (
  <header className="header">
    <nav className="navbar navbar-expand-lg fixed-top shadow navbar-light bg-white">
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <Link to="/" className="navbar-brand py-1">
            <img src="/img/logo.svg" alt="Directory logo"/>
          </Link>
          <form className="form-inline d-none d-sm-flex" action="#" id="search">
            <div className="input-label-absolute input-label-absolute-left input-reset input-expand ml-lg-2 ml-xl-3">
              <label className="label-absolute" htmlFor="search_search"><i className="fa fa-search"/><span
                className="sr-only">What are you looking for?</span></label>
              <input className="form-control form-control-sm border-0 shadow-0 bg-gray-200" id="search_search"
                     placeholder="Search" aria-label="Search"/>
              <button className="btn btn-reset btn-sm" type="reset"><i className="fa-times fas"/>/></button>
            </div>
          </form>
        </div>
        <Navbar />
      </div>
    </nav>
  </header>
);

export default Header;