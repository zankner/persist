import React from 'react';
import { Link } from 'react-router-dom';

const Filters = props => (
  <div className="col-lg-3 pt-3">
    <form className="pr-xl-3" action="#" autoComplete="off">
      <div className="mb-4">
        <label className="form-label" htmlFor="form_dates">Dates</label>
        <div className="datepicker-container datepicker-container-left">
          <input className="form-control" type="text" name="bookingDate" id="form_dates"
                 placeholder="Choose your dates" />
        </div>
      </div>
      <div className="mb-4">
        <label className="form-label" htmlFor="form_guests">Guests</label>
        <select className="selectpicker form-control" name="guests" id="form_guests"
                data-style="btn-selectpicker" title=" ">
          <option value="guests_0">1</option>
          <option value="guests_1">2</option>
          <option value="guests_2">3</option>
          <option value="guests_3">4</option>
          <option value="guests_4">5</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="form-label" htmlFor="form_type">Home type</label>
        <select className="selectpicker form-control" name="type" id="form_type" multiple
                data-style="btn-selectpicker" title="">
          <option value="type_0">Entire place</option>
          <option value="type_1">Private room</option>
          <option value="type_2">Shared room</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="form-label">Price range</label>
        <div className="text-primary" id="slider-snap"></div>
        <div className="nouislider-values">
          <div className="min">From $<span id="slider-snap-value-from"></span></div>
          <div className="max">To $<span id="slider-snap-value-to"></span></div>
        </div>
        <input type="hidden" name="pricefrom" id="slider-snap-input-from" value="40" />
        <input type="hidden" name="priceto" id="slider-snap-input-to" value="110" />
      </div>
      <div className="mb-4">
        <label className="form-label">Host and booking</label>
        <ul className="list-inline mb-0 mt-1">
          <li className="list-inline-item mb-2">
            <div className="custom-control custom-switch">
              <input className="custom-control-input" id="instantBook" type="checkbox"/>
              <label className="custom-control-label" htmlFor="instantBook"> <span className="text-sm">Instant book</span></label>
            </div>
          </li>
          <li className="list-inline-item">
            <div className="custom-control custom-switch">
              <input className="custom-control-input" id="superhost" type="checkbox" />
              <label className="custom-control-label" htmlFor="superhost"> <span
                className="text-sm">Superhost</span></label>
            </div>
          </li>
        </ul>
      </div>
      <div className="pb-4">
        <div className="collapse" id="moreFilters">
          <div className="filter-block">
            <h6 className="mb-3">Location</h6>
            <div className="form-group mb-4">
              <label className="form-label" htmlFor="form_neighbourhood">Neighbourhood</label>
              <select className="selectpicker form-control" name="neighbourhood" id="form_neighbourhood"
                      multiple data-style="btn-selectpicker" data-live-search="true"
                      data-selected-text-format="count &gt; 1" title="">
                <option value="neighbourhood_0">Battery Park City</option>
                <option value="neighbourhood_1">Bowery</option>
                <option value="neighbourhood_2">Carnegie Hill</option>
                <option value="neighbourhood_3">Central Park</option>
                <option value="neighbourhood_4">Chelsea</option>
                <option value="neighbourhood_5">Chinatown</option>
              </select>
            </div>
            <div className="form-group mb-0">
              <label className="form-label">Neighbourhood Tag</label>
              <ul className="list-inline mt-xl-1 mb-0">
                <li className="list-inline-item">
                  <div className="custom-control custom-checkbox">
                    <input className="custom-control-input" type="checkbox" id="type_0" name="type[]"/>
                    <label className="custom-control-label" htmlFor="type_0">Hipster </label>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div className="custom-control custom-checkbox">
                    <input className="custom-control-input" type="checkbox" id="type_1" name="type[]" />
                    <label className="custom-control-label" htmlFor="type_1">Business </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="filter-block">
            <h6 className="mb-3">Rooms and beds</h6>
            <div className="form-group mb-2">
              <label className="form-label">Beds</label>
              <div className="d-flex align-items-center">
                <div className="btn btn-items btn-items-decrease">-</div>
                <input className="form-control input-items input-items-greaterthan" type="text" value="1+"
                       disabled />
                <div className="btn btn-items btn-items-increase">+</div>
              </div>
            </div>
            <div className="form-group mb-2">
              <label className="form-label">Bedrooms</label>
              <div className="d-flex align-items-center">
                <div className="btn btn-items btn-items-decrease">-</div>
                <input className="form-control input-items input-items-greaterthan" type="text" value="1+"
                       disabled />
                <div className="btn btn-items btn-items-increase">+</div>
              </div>
            </div>
          </div>
          <div className="filter-block">
            <h6 className="mb-3">Trip type</h6>
            <div className="form-group mb-0">
              <div className="custom-control custom-switch mb-2">
                <input className="custom-control-input" id="forfamilies" type="checkbox" name="forfamilies"
                       aria-describedby="forfamiliesHelp" />
                <label className="custom-control-label" htmlFor="forfamilies"> <span className="text-sm">For Families</span></label>
              </div>
              <small className="text-muted form-text" id="forfamiliesHelp">Explore entire homes with 5-star
                reviews from families and essentials like a kitchen and TV</small>
            </div>
            <div className="form-group mb-0">
              <div className="custom-control custom-switch mb-2">
                <input className="custom-control-input" id="forwork" type="checkbox" name="forwork"
                       aria-describedby="forworkHelp" />
                <label className="custom-control-label" htmlFor="forwork"> <span className="text-sm">For work</span></label>
              </div>
              <small className="text-muted form-text" id="forworkHelp">Explore top-rated homes with essentials
                like a workspace, wifi, and self check-in </small>
            </div>
          </div>
          <div className="filter-block">
            <h6 className="mb-3">Amenities</h6>
            <ul className="list-unstyled mb-0">
              <li>
                <div className="custom-control custom-checkbox">
                  <input className="custom-control-input" type="checkbox" id="amenities_0" name="amenities[]"/>
                  <label className="custom-control-label" htmlFor="amenities_0">Kitchen </label>
                </div>
              </li>
              <li>
                <div className="custom-control custom-checkbox">
                  <input className="custom-control-input" type="checkbox" id="amenities_1" name="amenities[]" />
                  <label className="custom-control-label" htmlFor="amenities_1">Shampoo </label>
                </div>
              </li>
            </ul>
          </div>
          <div className="filter-block">
            <h6 className="mb-3">Facilities</h6>
            <ul className="list-unstyled mb-0">
              <li>
                <div className="custom-control custom-checkbox">
                  <input className="custom-control-input" type="checkbox" id="facilities_0"
                         name="facilities[]" />
                  <label className="custom-control-label" htmlFor="facilities_0">Free parking on
                    premises </label>
                </div>
              </li>
              <li>
                <div className="custom-control custom-checkbox">
                  <input className="custom-control-input" type="checkbox" id="facilities_1"
                         name="facilities[]"/>
                  <label className="custom-control-label" htmlFor="facilities_1">Gym </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="mb-4">
          <button className="btn btn-link btn-collapse pl-0 text-secondary" type="button"
                  data-toggle="collapse" data-target="#moreFilters" aria-expanded="false"
                  aria-controls="moreFilters" data-expanded-text="Less filters"
                  data-collapsed-text="More filters">More filters
          </button>
        </div>
        <div className="mb-4">
          <button className="btn btn-primary" type="submit"><i className="fas fa-filter mr-1"></i>Filter
          </button>
        </div>
      </div>
    </form>
  </div>
);

export default Filters;

