import React, { useState } from 'react';
import Layout from '../../../../../components/Layout';
import { compose } from 'redux';
import { withFirebase } from 'react-redux-firebase';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


const Background = props => {

  return (
    <Layout >
      <div className="pt-nav">
        <div className="progress rounded-0 sticky-top" style={{height: "8px", top: "71px"}}>
          <div className="progress-bar" role="progressbar" style={{width: "20%", ariaValuenow: "0", ariaValuemin: "0"}}
               aria-valuemax="100"/>
        </div>
        <section className="py-5">
          <div className="container">
            <p className="subtitle text-primary">Add new listing</p>
            <h1 className="h2 mb-5"> Basic information <span className="text-muted float-right">Step 1</span></h1>
            <form>
              <div className="row form-block">
                <div className="col-lg-4">
                  <h4>Basic</h4>
                  <p className="text-muted text-sm">His room, a proper human room although a little too small, lay
                    peacefully between its four familiar walls. A collection of textile samples lay spread out on the
                    table.</p>
                </div>
                <div className="col-lg-7 ml-auto">
                  <div className="form-group"></div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="form_name">Property name</label>
                    <input className="form-control" name="name" id="form_name" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="form_type">Home type</label>
                    <select className="selectpicker form-control" name="type" id="form_type"
                            data-style="btn-selectpicker" title="" aria-describedby="propertyTypeHelp">
                      <option value="type_0">Entire place</option>
                      <option value="type_1">Private room</option>
                      <option value="type_2">Shared room</option>
                    </select><small className="form-text text-muted" id="propertyTypeHelp">One morning, when Gregor
                    Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He
                    lay on his armour-like back, and if he lifted his head a little he could see his brown belly,
                    slightly domed and divided by arches into stiff sections</small>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Is your property set as a dedicated guest space?</label>
                    <div className="custom-control custom-radio">
                      <input className="custom-control-input" type="radio" id="guests_0" name="guests" />
                        <label className="custom-control-label" htmlFor="guests_0">Yes, it's primarily set up for
                          guests</label>
                    </div>
                    <div className="custom-control custom-radio">
                      <input className="custom-control-input" type="radio" id="guests_1" name="guests" />
                        <label className="custom-control-label" htmlFor="guests_1">No, I keep my personal belongings
                          there</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row form-block">
                <div className="col-lg-4">
                  <h4>Location</h4>
                  <p className="text-muted text-sm">Samsa was a travelling salesman - and above it there hung a picture
                    that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.</p>
                </div>
                <div className="col-lg-7 ml-auto">
                  <div className="form-group">
                    <label className="form-label" htmlFor="form_country">Country / Region</label>
                    <select className="selectpicker form-control" name="country" id="form_country"
                            data-style="btn-selectpicker" title=" " data-live-search="true">
                      <option value="country_#{index}">Afghanistan</option>
                      <option value="country_#{index}">Albania</option>
                      <option value="country_#{index}">Algeria</option>
                      <option value="country_#{index}">Andorra</option>
                      <option value="country_#{index}">Angola</option>
                      <option value="country_#{index}">Anguilla</option>
                      <option value="country_#{index}">Antigua &amp; Barbuda</option>
                      <option value="country_#{index}">Argentina</option>
                      <option value="country_#{index}">Armenia</option>
                      <option value="country_#{index}">Aruba</option>
                      <option value="country_#{index}">Australia</option>
                      <option value="country_#{index}">Austria</option>
                      <option value="country_#{index}">Azerbaijan</option>
                      <option value="country_#{index}">Bahamas</option>
                      <option value="country_#{index}">Bahrain</option>
                      <option value="country_#{index}">Bangladesh</option>
                      <option value="country_#{index}">Barbados</option>
                      <option value="country_#{index}">Belarus</option>
                      <option value="country_#{index}">Belgium</option>
                      <option value="country_#{index}">Belize</option>
                      <option value="country_#{index}">Benin</option>
                      <option value="country_#{index}">Bermuda</option>
                      <option value="country_#{index}">Bhutan</option>
                      <option value="country_#{index}">Bolivia</option>
                      <option value="country_#{index}">Bosnia &amp; Herzegovina</option>
                      <option value="country_#{index}">Botswana</option>
                      <option value="country_#{index}">Brazil</option>
                      <option value="country_#{index}">British Virgin Islands</option>
                      <option value="country_#{index}">Brunei</option>
                      <option value="country_#{index}">Bulgaria</option>
                      <option value="country_#{index}">Burkina Faso</option>
                      <option value="country_#{index}">Burundi</option>
                      <option value="country_#{index}">Cambodia</option>
                      <option value="country_#{index}">Cameroon</option>
                      <option value="country_#{index}">Cape Verde</option>
                      <option value="country_#{index}">Cayman Islands</option>
                      <option value="country_#{index}">Chad</option>
                      <option value="country_#{index}">Chile</option>
                      <option value="country_#{index}">China</option>
                      <option value="country_#{index}">Colombia</option>
                      <option value="country_#{index}">Congo</option>
                      <option value="country_#{index}">Cook Islands</option>
                      <option value="country_#{index}">Costa Rica</option>
                      <option value="country_#{index}">Cote D Ivoire</option>
                      <option value="country_#{index}">Croatia</option>
                      <option value="country_#{index}">Cruise Ship</option>
                      <option value="country_#{index}">Cuba</option>
                      <option value="country_#{index}">Cyprus</option>
                      <option value="country_#{index}">Czech Republic</option>
                      <option value="country_#{index}">Denmark</option>
                      <option value="country_#{index}">Djibouti</option>
                      <option value="country_#{index}">Dominica</option>
                      <option value="country_#{index}">Dominican Republic</option>
                      <option value="country_#{index}">Ecuador</option>
                      <option value="country_#{index}">Egypt</option>
                      <option value="country_#{index}">El Salvador</option>
                      <option value="country_#{index}">Equatorial Guinea</option>
                      <option value="country_#{index}">Estonia</option>
                      <option value="country_#{index}">Ethiopia</option>
                      <option value="country_#{index}">Falkland Islands</option>
                      <option value="country_#{index}">Faroe Islands</option>
                      <option value="country_#{index}">Fiji</option>
                      <option value="country_#{index}">Finland</option>
                      <option value="country_#{index}">France</option>
                      <option value="country_#{index}">French Polynesia</option>
                      <option value="country_#{index}">French West Indies</option>
                      <option value="country_#{index}">Gabon</option>
                      <option value="country_#{index}">Gambia</option>
                      <option value="country_#{index}">Georgia</option>
                      <option value="country_#{index}">Germany</option>
                      <option value="country_#{index}">Ghana</option>
                      <option value="country_#{index}">Gibraltar</option>
                      <option value="country_#{index}">Greece</option>
                      <option value="country_#{index}">Greenland</option>
                      <option value="country_#{index}">Grenada</option>
                      <option value="country_#{index}">Guam</option>
                      <option value="country_#{index}">Guatemala</option>
                      <option value="country_#{index}">Guernsey</option>
                      <option value="country_#{index}">Guinea</option>
                      <option value="country_#{index}">Guinea Bissau</option>
                      <option value="country_#{index}">Guyana</option>
                      <option value="country_#{index}">Haiti</option>
                      <option value="country_#{index}">Honduras</option>
                      <option value="country_#{index}">Hong Kong</option>
                      <option value="country_#{index}">Hungary</option>
                      <option value="country_#{index}">Iceland</option>
                      <option value="country_#{index}">India</option>
                      <option value="country_#{index}">Indonesia</option>
                      <option value="country_#{index}">Iran</option>
                      <option value="country_#{index}">Iraq</option>
                      <option value="country_#{index}">Ireland</option>
                      <option value="country_#{index}">Isle of Man</option>
                      <option value="country_#{index}">Israel</option>
                      <option value="country_#{index}">Italy</option>
                      <option value="country_#{index}">Jamaica</option>
                      <option value="country_#{index}">Japan</option>
                      <option value="country_#{index}">Jersey</option>
                      <option value="country_#{index}">Jordan</option>
                      <option value="country_#{index}">Kazakhstan</option>
                      <option value="country_#{index}">Kenya</option>
                      <option value="country_#{index}">Kuwait</option>
                      <option value="country_#{index}">Kyrgyz Republic</option>
                      <option value="country_#{index}">Laos</option>
                      <option value="country_#{index}">Latvia</option>
                      <option value="country_#{index}">Lebanon</option>
                      <option value="country_#{index}">Lesotho</option>
                      <option value="country_#{index}">Liberia</option>
                      <option value="country_#{index}">Libya</option>
                      <option value="country_#{index}">Liechtenstein</option>
                      <option value="country_#{index}">Lithuania</option>
                      <option value="country_#{index}">Luxembourg</option>
                      <option value="country_#{index}">Macau</option>
                      <option value="country_#{index}">Macedonia</option>
                      <option value="country_#{index}">Madagascar</option>
                      <option value="country_#{index}">Malawi</option>
                      <option value="country_#{index}">Malaysia</option>
                      <option value="country_#{index}">Maldives</option>
                      <option value="country_#{index}">Mali</option>
                      <option value="country_#{index}">Malta</option>
                      <option value="country_#{index}">Mauritania</option>
                      <option value="country_#{index}">Mauritius</option>
                      <option value="country_#{index}">Mexico</option>
                      <option value="country_#{index}">Moldova</option>
                      <option value="country_#{index}">Monaco</option>
                      <option value="country_#{index}">Mongolia</option>
                      <option value="country_#{index}">Montenegro</option>
                      <option value="country_#{index}">Montserrat</option>
                      <option value="country_#{index}">Morocco</option>
                      <option value="country_#{index}">Mozambique</option>
                      <option value="country_#{index}">Namibia</option>
                      <option value="country_#{index}">Nepal</option>
                      <option value="country_#{index}">Netherlands</option>
                      <option value="country_#{index}">Netherlands Antilles</option>
                      <option value="country_#{index}">New Caledonia</option>
                      <option value="country_#{index}">New Zealand</option>
                      <option value="country_#{index}">Nicaragua</option>
                      <option value="country_#{index}">Niger</option>
                      <option value="country_#{index}">Nigeria</option>
                      <option value="country_#{index}">Norway</option>
                      <option value="country_#{index}">Oman</option>
                      <option value="country_#{index}">Pakistan</option>
                      <option value="country_#{index}">Palestine</option>
                      <option value="country_#{index}">Panama</option>
                      <option value="country_#{index}">Papua New Guinea</option>
                      <option value="country_#{index}">Paraguay</option>
                      <option value="country_#{index}">Peru</option>
                      <option value="country_#{index}">Philippines</option>
                      <option value="country_#{index}">Poland</option>
                      <option value="country_#{index}">Portugal</option>
                      <option value="country_#{index}">Puerto Rico</option>
                      <option value="country_#{index}">Qatar</option>
                      <option value="country_#{index}">Reunion</option>
                      <option value="country_#{index}">Romania</option>
                      <option value="country_#{index}">Russia</option>
                      <option value="country_#{index}">Rwanda</option>
                      <option value="country_#{index}">Saint Pierre &amp; Miquelon</option>
                      <option value="country_#{index}">Samoa</option>
                      <option value="country_#{index}">San Marino</option>
                      <option value="country_#{index}">Satellite</option>
                      <option value="country_#{index}">Saudi Arabia</option>
                      <option value="country_#{index}">Senegal</option>
                      <option value="country_#{index}">Serbia</option>
                      <option value="country_#{index}">Seychelles</option>
                      <option value="country_#{index}">Sierra Leone</option>
                      <option value="country_#{index}">Singapore</option>
                      <option value="country_#{index}">Slovakia</option>
                      <option value="country_#{index}">Slovenia</option>
                      <option value="country_#{index}">South Africa</option>
                      <option value="country_#{index}">South Korea</option>
                      <option value="country_#{index}">Spain</option>
                      <option value="country_#{index}">Sri Lanka</option>
                      <option value="country_#{index}">St Kitts &amp; Nevis</option>
                      <option value="country_#{index}">St Lucia</option>
                      <option value="country_#{index}">St Vincent</option>
                      <option value="country_#{index}">St. Lucia</option>
                      <option value="country_#{index}">Sudan</option>
                      <option value="country_#{index}">Suriname</option>
                      <option value="country_#{index}">Swaziland</option>
                      <option value="country_#{index}">Sweden</option>
                      <option value="country_#{index}">Switzerland</option>
                      <option value="country_#{index}">Syria</option>
                      <option value="country_#{index}">Taiwan</option>
                      <option value="country_#{index}">Tajikistan</option>
                      <option value="country_#{index}">Tanzania</option>
                      <option value="country_#{index}">Thailand</option>
                      <option value="country_#{index}">Timor L'Este</option>
                      <option value="country_#{index}">Togo</option>
                      <option value="country_#{index}">Tonga</option>
                      <option value="country_#{index}">Trinidad &amp; Tobago</option>
                      <option value="country_#{index}">Tunisia</option>
                      <option value="country_#{index}">Turkey</option>
                      <option value="country_#{index}">Turkmenistan</option>
                      <option value="country_#{index}">Turks &amp; Caicos</option>
                      <option value="country_#{index}">Uganda</option>
                      <option value="country_#{index}">Ukraine</option>
                      <option value="country_#{index}">United Arab Emirates</option>
                      <option value="country_#{index}">United Kingdom</option>
                      <option value="country_#{index}">Uruguay</option>
                      <option value="country_#{index}">Uzbekistan</option>
                      <option value="country_#{index}">Venezuela</option>
                      <option value="country_#{index}">Vietnam</option>
                      <option value="country_#{index}">Virgin Islands (US)</option>
                      <option value="country_#{index}">Yemen</option>
                      <option value="country_#{index}">Zambia</option>
                      <option value="country_#{index}">Zimbabwe</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="form_street">Street Address</label>
                    <input className="form-control" name="name" id="form_street" />
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label" htmlFor="form_city">City</label>
                        <input className="form-control" name="name" id="form_city" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label" htmlFor="form_state">State</label>
                        <input className="form-control" name="name" id="form_state" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label" htmlFor="form_zip">ZIP Code</label>
                        <input className="form-control" name="name" id="form_zip" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row form-block flex-column flex-sm-row">
                <div className="col text-center text-sm-left">
                </div>
                <div className="col text-center text-sm-right"><a className="btn btn-primary px-3"
                                                                  href="user-add-2.html"> Next step<i
                  className="fa-chevron-right fa ml-2"></i></a></div>
              </div>
            </form>
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
)(Background);