import React, { useState } from 'react';
import Layout from '../../../components/Layout';
import { compose } from 'redux';
import { withFirebase } from 'react-redux-firebase';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


const Business = props => {

    return (
        <Layout >
            <div className="pt-nav">
                <section className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 mr-lg-auto">
                                <div className="card border-0 shadow mb-6 mb-lg-0">
                                    <div className="card-header bg-gray-100 py-4 border-0 text-center"><a
                                        className="d-inline-block" href="#"><img
                                        className="d-block avatar avatar-xxl p-2 mb-2" src="/img/avatar/avatar-10.jpg"
                                        alt="" /></a>
                                        <h5>Jack London</h5>
                                        <p className="text-muted text-sm mb-0">Los Angeles, CA </p>
                                    </div>
                                    <div className="card-body p-4">
                                        <div className="media align-items-center mb-3">
                                            <div className="icon-rounded icon-rounded-sm bg-primary-light mr-2">
                                                <svg className="svg-icon text-primary svg-icon-md">
                                                    <use xlinkHref="#diploma-1"></use>
                                                </svg>
                                            </div>
                                            <div className="media-body">
                                                <p className="mb-0">2877 reviews</p>
                                            </div>
                                        </div>
                                        <div className="media align-items-center mb-3">
                                            <div className="icon-rounded icon-rounded-sm bg-primary-light mr-2">
                                                <svg className="svg-icon text-primary svg-icon-md">
                                                    <use xlinkHref="#checkmark-1"></use>
                                                </svg>
                                            </div>
                                            <div className="media-body">
                                                <p className="mb-0">Verified</p>
                                            </div>
                                        </div>
                                        <hr />
                                            <h6>Jack provided</h6>
                                            <ul className="card-text text-muted">
                                                <li>Government ID</li>
                                                <li>Email address</li>
                                                <li>Phone number</li>
                                            </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9 pl-lg-5">
                                <h1 className="hero-heading mb-0">Hello, I'm Jack!</h1>
                                <div className="text-block">
                                    <p><span className="badge badge-secondary-light">Joined in 2011</span></p>
                                    <p className="text-muted">Samsa was a travelling salesman - and above it there hung
                                        a picture that he had recently cut out of an illustrated magazine and housed in
                                        a nice, gilded frame. </p>
                                    <p className="text-muted">He must have tried it a hundred times, shut his eyes so
                                        that he wouldn't have to look at the floundering legs, and only stopped when he
                                        began to feel a mild, dull pain there that he had never felt before. </p>
                                </div>
                                <div className="text-block">
                                    <h4 className="mb-5">Jack's Listings</h4>
                                    <div className="row">
                                        <div className="col-sm-6 col-lg-4 mb-30px hover-animate"
                                             data-marker-id="59c0c8e33b1527bfe2abaf92">
                                            <div className="card h-100 border-0 shadow">
                                                <div className="card-img-top overflow-hidden gradient-overlay"><img
                                                    className="img-fluid"
                                                    src="/img/photo/photo-1484154218962-a197022b5858.jpg"
                                                    alt="Modern, Well-Appointed Room"/><a className="tile-link"
                                                                                          href="detail-rooms.html"></a>
                                                    <div className="card-img-overlay-bottom z-index-20">
                                                        <div className="media text-white text-sm align-items-center">
                                                            <img className="avatar avatar-border-white mr-2"
                                                                 src="/img/avatar/avatar-0.jpg" alt="Pamela"/>
                                                            <div className="media-body">Pamela</div>
                                                        </div>
                                                    </div>
                                                    <div className="card-img-overlay-top text-right"><a
                                                        className="card-fav-icon position-relative z-index-40"
                                                        href="#">
                                                        <svg className="svg-icon text-white">
                                                            <use xlinkHref="#heart-1"></use>
                                                        </svg>
                                                    </a></div>
                                                </div>
                                                <div className="card-body d-flex align-items-center">
                                                    <div className="w-100">
                                                        <h6 className="card-title"><a
                                                            className="text-decoration-none text-dark"
                                                            href="detail-rooms.html">Modern, Well-Appointed Room</a>
                                                        </h6>
                                                        <div className="d-flex card-subtitle mb-3">
                                                            <p className="flex-grow-1 mb-0 text-muted text-sm">Private
                                                                room</p>
                                                            <p className="flex-shrink-1 mb-0 card-stars text-xs text-right">
                                                                <i className="fa fa-star text-warning"></i><i
                                                                className="fa fa-star text-warning"></i><i
                                                                className="fa fa-star text-warning"></i><i
                                                                className="fa fa-star text-warning"></i><i
                                                                className="fa fa-star text-warning"></i>
                                                            </p>
                                                        </div>
                                                        <p className="card-text text-muted"><span
                                                            className="h4 text-primary">$80</span> per night</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-4 mb-30px hover-animate"
                                             data-marker-id="59c0c8e322f3375db4d89128">
                                            <div className="card h-100 border-0 shadow">
                                                <div className="card-img-top overflow-hidden gradient-overlay"><img
                                                    className="img-fluid"
                                                    src="/img/photo/photo-1426122402199-be02db90eb90.jpg"
                                                    alt="Cute Quirky Garden apt, NYC adjacent"/><a className="tile-link"
                                                                                                   href="detail-rooms.html"></a>
                                                    <div className="card-img-overlay-bottom z-index-20">
                                                        <div className="media text-white text-sm align-items-center">
                                                            <img className="avatar avatar-border-white mr-2"
                                                                 src="/img/avatar/avatar-7.jpg" alt="John"/>
                                                            <div className="media-body">John</div>
                                                        </div>
                                                    </div>
                                                    <div className="card-img-overlay-top text-right"><a
                                                        className="card-fav-icon position-relative z-index-40"
                                                        href="#">
                                                        <svg className="svg-icon text-white">
                                                            <use xlinkHref="#heart-1"></use>
                                                        </svg>
                                                    </a></div>
                                                </div>
                                                <div className="card-body d-flex align-items-center">
                                                    <div className="w-100">
                                                        <h6 className="card-title"><a
                                                            className="text-decoration-none text-dark"
                                                            href="detail-rooms.html">Cute Quirky Garden apt, NYC
                                                            adjacent</a></h6>
                                                        <div className="d-flex card-subtitle mb-3">
                                                            <p className="flex-grow-1 mb-0 text-muted text-sm">Entire
                                                                apartment</p>
                                                            <p className="flex-shrink-1 mb-0 card-stars text-xs text-right">
                                                                <i className="fa fa-star text-warning"></i><i
                                                                className="fa fa-star text-warning"></i><i
                                                                className="fa fa-star text-warning"></i><i
                                                                className="fa fa-star text-warning"></i><i
                                                                className="fa fa-star text-gray-300"> </i>
                                                            </p>
                                                        </div>
                                                        <p className="card-text text-muted"><span
                                                            className="h4 text-primary">$121</span> per night</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-4 mb-30px hover-animate"
                                             data-marker-id="59c0c8e3a31e62979bf147c9">
                                            <div className="card h-100 border-0 shadow">
                                                <div className="card-img-top overflow-hidden gradient-overlay"><img
                                                    className="img-fluid"
                                                    src="/img/photo/photo-1512917774080-9991f1c4c750.jpg"
                                                    alt="Modern Apt - Vibrant Neighborhood!"/><a className="tile-link"
                                                                                                 href="detail-rooms.html"></a>
                                                    <div className="card-img-overlay-bottom z-index-20">
                                                        <div className="media text-white text-sm align-items-center">
                                                            <img className="avatar avatar-border-white mr-2"
                                                                 src="/img/avatar/avatar-8.jpg" alt="Julie"/>
                                                            <div className="media-body">Julie</div>
                                                        </div>
                                                    </div>
                                                    <div className="card-img-overlay-top text-right"><a
                                                        className="card-fav-icon position-relative z-index-40"
                                                        href="#">
                                                        <svg className="svg-icon text-white">
                                                            <use xlinkHref="#heart-1"></use>
                                                        </svg>
                                                    </a></div>
                                                </div>
                                                <div className="card-body d-flex align-items-center">
                                                    <div className="w-100">
                                                        <h6 className="card-title"><a
                                                            className="text-decoration-none text-dark"
                                                            href="detail-rooms.html">Modern Apt - Vibrant
                                                            Neighborhood!</a></h6>
                                                        <div className="d-flex card-subtitle mb-3">
                                                            <p className="flex-grow-1 mb-0 text-muted text-sm">Entire
                                                                apartment</p>
                                                            <p className="flex-shrink-1 mb-0 card-stars text-xs text-right">
                                                                <i className="fa fa-star text-warning"></i><i
                                                                className="fa fa-star text-warning"></i><i
                                                                className="fa fa-star text-warning"></i><i
                                                                className="fa fa-star text-gray-300"> </i><i
                                                                className="fa fa-star text-gray-300"> </i>
                                                            </p>
                                                        </div>
                                                        <p className="card-text text-muted"><span
                                                            className="h4 text-primary">$75</span> per night</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-4 mb-30px hover-animate"
                                             data-marker-id="59c0c8e3503eb77d487e8082">
                                            <div className="card h-100 border-0 shadow">
                                                <div className="card-img-top overflow-hidden gradient-overlay"><img
                                                    className="img-fluid"
                                                    src="/img/photo/photo-1494526585095-c41746248156.jpg"
                                                    alt="Sunny Private Studio-Apartment"/><a className="tile-link"
                                                                                             href="detail-rooms.html"></a>
                                                    <div className="card-img-overlay-bottom z-index-20">
                                                        <div className="media text-white text-sm align-items-center">
                                                            <img className="avatar avatar-border-white mr-2"
                                                                 src="/img/avatar/avatar-9.jpg" alt="Barbora"/>
                                                            <div className="media-body">Barbora</div>
                                                        </div>
                                                    </div>
                                                    <div className="card-img-overlay-top text-right"><a
                                                        className="card-fav-icon position-relative z-index-40"
                                                        href="#">
                                                        <svg className="svg-icon text-white">
                                                            <use xlinkHref="#heart-1"></use>
                                                        </svg>
                                                    </a></div>
                                                </div>
                                                <div className="card-body d-flex align-items-center">
                                                    <div className="w-100">
                                                        <h6 className="card-title"><a
                                                            className="text-decoration-none text-dark"
                                                            href="detail-rooms.html">Sunny Private Studio-Apartment</a>
                                                        </h6>
                                                        <div className="d-flex card-subtitle mb-3">
                                                            <p className="flex-grow-1 mb-0 text-muted text-sm">Shared
                                                                room</p>
                                                            <p className="flex-shrink-1 mb-0 card-stars text-xs text-right">
                                                                <i className="fa fa-star text-warning"></i><i
                                                                className="fa fa-star text-warning"></i><i
                                                                className="fa fa-star text-warning"></i><i
                                                                className="fa fa-star text-warning"></i><i
                                                                className="fa fa-star text-gray-300"> </i>
                                                            </p>
                                                        </div>
                                                        <p className="card-text text-muted"><span
                                                            className="h4 text-primary">$93</span> per night</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-4 mb-30px hover-animate"
                                             data-marker-id="59c0c8e39aa2eed0626e485d">
                                            <div className="card h-100 border-0 shadow">
                                                <div className="card-img-top overflow-hidden gradient-overlay"><img
                                                    className="img-fluid"
                                                    src="/img/photo/photo-1522771739844-6a9f6d5f14af.jpg"
                                                    alt="Mid-Century Modern Garden Paradise"/><a className="tile-link"
                                                                                                 href="detail-rooms.html"></a>
                                                    <div className="card-img-overlay-bottom z-index-20">
                                                        <div className="media text-white text-sm align-items-center">
                                                            <img className="avatar avatar-border-white mr-2"
                                                                 src="/img/avatar/avatar-10.jpg" alt="Jack"/>
                                                            <div className="media-body">Jack</div>
                                                        </div>
                                                    </div>
                                                    <div className="card-img-overlay-top text-right"><a
                                                        className="card-fav-icon position-relative z-index-40"
                                                        href="#">
                                                        <svg className="svg-icon text-white">
                                                            <use xlinkHref="#heart-1"></use>
                                                        </svg>
                                                    </a></div>
                                                </div>
                                                <div className="card-body d-flex align-items-center">
                                                    <div className="w-100">
                                                        <h6 className="card-title"><a
                                                            className="text-decoration-none text-dark"
                                                            href="detail-rooms.html">Mid-Century Modern Garden
                                                            Paradise</a></h6>
                                                        <div className="d-flex card-subtitle mb-3">
                                                            <p className="flex-grow-1 mb-0 text-muted text-sm">Entire
                                                                house</p>
                                                            <p className="flex-shrink-1 mb-0 card-stars text-xs text-right">
                                                                <i className="fa fa-star text-warning"></i><i
                                                                className="fa fa-star text-warning"></i><i
                                                                className="fa fa-star text-warning"></i><i
                                                                className="fa fa-star text-warning"></i><i
                                                                className="fa fa-star text-warning"></i>
                                                            </p>
                                                        </div>
                                                        <p className="card-text text-muted"><span
                                                            className="h4 text-primary">$115</span> per night</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-4 mb-30px hover-animate"
                                             data-marker-id="59c0c8e39aa2edasd626e485d">
                                            <div className="card h-100 border-0 shadow">
                                                <div className="card-img-top overflow-hidden gradient-overlay"><img
                                                    className="img-fluid"
                                                    src="/img/photo/photo-1488805990569-3c9e1d76d51c.jpg"
                                                    alt="Brooklyn Life, Easy to Manhattan"/><a className="tile-link"
                                                                                               href="detail-rooms.html"></a>
                                                    <div className="card-img-overlay-bottom z-index-20">
                                                        <div className="media text-white text-sm align-items-center">
                                                            <img className="avatar avatar-border-white mr-2"
                                                                 src="/img/avatar/avatar-11.jpg" alt="Stuart"/>
                                                            <div className="media-body">Stuart</div>
                                                        </div>
                                                    </div>
                                                    <div className="card-img-overlay-top text-right"><a
                                                        className="card-fav-icon position-relative z-index-40"
                                                        href="#">
                                                        <svg className="svg-icon text-white">
                                                            <use xlinkHref="#heart-1"></use>
                                                        </svg>
                                                    </a></div>
                                                </div>
                                                <div className="card-body d-flex align-items-center">
                                                    <div className="w-100">
                                                        <h6 className="card-title"><a
                                                            className="text-decoration-none text-dark"
                                                            href="detail-rooms.html">Brooklyn Life, Easy to
                                                            Manhattan</a></h6>
                                                        <div className="d-flex card-subtitle mb-3">
                                                            <p className="flex-grow-1 mb-0 text-muted text-sm">Private
                                                                room</p>
                                                            <p className="flex-shrink-1 mb-0 card-stars text-xs text-right">
                                                                <i className="fa fa-star text-warning"></i><i
                                                                className="fa fa-star text-warning"></i><i
                                                                className="fa fa-star text-warning"></i><i
                                                                className="fa fa-star text-warning"></i><i
                                                                className="fa fa-star text-gray-300"> </i>
                                                            </p>
                                                        </div>
                                                        <p className="card-text text-muted"><span
                                                            className="h4 text-primary">$123</span> per night</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-block">
                                    <p className="subtitle text-sm text-primary">Reviews </p>
                                    <h5 className="mb-4">Listing Reviews </h5>
                                    <div className="media d-block d-sm-flex review">
                                        <div className="text-md-center mr-4 mr-xl-5"><img
                                            className="d-block avatar avatar-xl p-2 mb-2" src="/img/avatar/avatar-8.jpg"
                                            alt="Padmé Amidala" /><span className="text-uppercase text-muted text-sm">Dec 2018</span>
                                        </div>
                                        <div className="media-body">
                                            <h6 className="mt-2 mb-1">Padmé Amidala</h6>
                                            <div className="mb-2"><i className="fa fa-xs fa-star text-primary"></i><i
                                                className="fa fa-xs fa-star text-primary"></i><i
                                                className="fa fa-xs fa-star text-primary"></i><i
                                                className="fa fa-xs fa-star text-primary"></i><i
                                                className="fa fa-xs fa-star text-primary"></i>
                                            </div>
                                            <p className="text-muted text-sm">One morning, when Gregor Samsa woke from
                                                troubled dreams, he found himself transformed in his bed into a horrible
                                                vermin. He lay on his armour-like back, and if he lifted his head a
                                                little he could see his brown belly, slightly domed and divided by
                                                arches into stiff sections </p>
                                        </div>
                                    </div>
                                    <div className="media d-block d-sm-flex review">
                                        <div className="text-md-center mr-4 mr-xl-5"><img
                                            className="d-block avatar avatar-xl p-2 mb-2" src="/img/avatar/avatar-2.jpg"
                                            alt="Luke Skywalker" /><span className="text-uppercase text-muted text-sm">Dec 2018</span>
                                        </div>
                                        <div className="media-body">
                                            <h6 className="mt-2 mb-1">Luke Skywalker</h6>
                                            <div className="mb-2"><i className="fa fa-xs fa-star text-primary"></i><i
                                                className="fa fa-xs fa-star text-primary"></i><i
                                                className="fa fa-xs fa-star text-primary"></i><i
                                                className="fa fa-xs fa-star text-primary"></i><i
                                                className="fa fa-xs fa-star text-gray-200"></i>
                                            </div>
                                            <p className="text-muted text-sm">The bedding was hardly able to cover it
                                                and seemed ready to slide off any moment. His many legs, pitifully thin
                                                compared with the size of the rest of him, waved about helplessly as he
                                                looked. &quot;What's happened to me?&quot; he thought. It wasn't a
                                                dream. </p>
                                        </div>
                                    </div>
                                    <div className="media d-block d-sm-flex review">
                                        <div className="text-md-center mr-4 mr-xl-5"><img
                                            className="d-block avatar avatar-xl p-2 mb-2" src="/img/avatar/avatar-3.jpg"
                                            alt="Princess Leia" /><span className="text-uppercase text-muted text-sm">Dec 2018</span>
                                        </div>
                                        <div className="media-body">
                                            <h6 className="mt-2 mb-1">Princess Leia</h6>
                                            <div className="mb-2"><i className="fa fa-xs fa-star text-primary"></i><i
                                                className="fa fa-xs fa-star text-primary"></i><i
                                                className="fa fa-xs fa-star text-primary"></i><i
                                                className="fa fa-xs fa-star text-gray-200"></i><i
                                                className="fa fa-xs fa-star text-gray-200"></i>
                                            </div>
                                            <p className="text-muted text-sm">His room, a proper human room although a
                                                little too small, lay peacefully between its four familiar walls. A
                                                collection of textile samples lay spread out on the table. </p>
                                        </div>
                                    </div>
                                    <div className="media d-block d-sm-flex review">
                                        <div className="text-md-center mr-4 mr-xl-5"><img
                                            className="d-block avatar avatar-xl p-2 mb-2" src="/img/avatar/avatar-4.jpg"
                                            alt="Jabba Hut" /><span
                                            className="text-uppercase text-muted text-sm">Dec 2018</span></div>
                                        <div className="media-body">
                                            <h6 className="mt-2 mb-1">Jabba Hut</h6>
                                            <div className="mb-2"><i className="fa fa-xs fa-star text-primary"></i><i
                                                className="fa fa-xs fa-star text-primary"></i><i
                                                className="fa fa-xs fa-star text-primary"></i><i
                                                className="fa fa-xs fa-star text-primary"></i><i
                                                className="fa fa-xs fa-star text-primary"></i>
                                            </div>
                                            <p className="text-muted text-sm">Samsa was a travelling salesman - and
                                                above it there hung a picture that he had recently cut out of an
                                                illustrated magazine and housed in a nice, gilded frame. </p>
                                        </div>
                                    </div>
                                    <div className="py-5">
                                        <button className="btn btn-outline-primary" type="button" data-toggle="collapse"
                                                data-target="#leaveReview" aria-expanded="false"
                                                aria-controls="leaveReview">Leave a review
                                        </button>
                                        <div className="collapse mt-4" id="leaveReview">
                                            <h5 className="mb-4">Leave a review</h5>
                                            <form className="form" id="contact-form" method="get" action="#">
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="form-group">
                                                            <label className="form-label" htmlFor="name">Your name
                                                                *</label>
                                                            <input className="form-control" type="text" name="name"
                                                                   id="name" placeholder="Enter your name"
                                                                   required="required" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="form-group">
                                                            <label className="form-label" htmlFor="rating">Your rating
                                                                *</label>
                                                            <select className="custom-select focus-shadow-0"
                                                                    name="rating" id="rating">
                                                                <option
                                                                    value="5">&#9733;&#9733;&#9733;&#9733;&#9733; (5/5)
                                                                </option>
                                                                <option
                                                                    value="4">&#9733;&#9733;&#9733;&#9733;&#9734; (4/5)
                                                                </option>
                                                                <option
                                                                    value="3">&#9733;&#9733;&#9733;&#9734;&#9734; (3/5)
                                                                </option>
                                                                <option
                                                                    value="2">&#9733;&#9733;&#9734;&#9734;&#9734; (2/5)
                                                                </option>
                                                                <option
                                                                    value="1">&#9733;&#9734;&#9734;&#9734;&#9734; (1/5)
                                                                </option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="form-label" htmlFor="email">Your email *</label>
                                                    <input className="form-control" type="email" name="email" id="email"
                                                           placeholder="Enter your  email" required="required" />
                                                </div>
                                                <div className="form-group">
                                                    <label className="form-label" htmlFor="review">Review text *</label>
                                                    <textarea className="form-control" rows="4" name="review"
                                                              id="review" placeholder="Enter your review"
                                                              required="required"></textarea>
                                                </div>
                                                <button className="btn btn-primary" type="submit">Post review</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
)(Business);