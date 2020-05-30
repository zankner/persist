import React from 'react';
import { render } from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import './icons';
import '../../scss/style.scss';
import Home from '../../src/pages/Home/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from '@firebase/app';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import rootReducer from '../../modules/reducers';
import '@firebase/firestore';
import '@firebase/auth';
import '@firebase/storage';
import Search from '../../src/pages/Search/Search';
import Login from '../../src/pages/Login/Login';
import Signup from '../../src/pages/Signup/Signup';
import Product from '../../src/pages/Products/Shopper/Product/Product';
import Summary from '../../src/pages/Checkout/Summary/Summary';
import Payment from '../../src/pages/Checkout/Payment/Payment';
import Completion from '../../src/pages/Checkout/Completion/Completion';
import CreateBusiness from '../../src/pages/Businesses/Create/Create';
import BusinessBackground from '../../src/pages/Businesses/Create/Background/Background';
import BusinessDescription from '../../src/pages/Businesses/Create/Description/Description';
import BusinessSpecifics from '../../src/pages/Businesses/Create/Specifics/Specifics';
import BusinessPhotos from '../../src/pages/Businesses/Create/Photos/Photos';
import BusinessCompletion from '../../src/pages/Businesses/Create/Completion/Completion';
import Businesses from '../../src/pages/Businesses/Businesses';
import Business from '../../src/pages/Businesses/Business/Business';
import BusinessBilling from '../../src/pages/Businesses/Admin/Business/Billing/Billing';
import BusinessOrders from '../../src/pages/Orders/Business/Orders/Orders';
import BusinessProducts from '../../src/pages/Products/Business/Products/Products';
import BusinessProduct from '../../src/pages/Products/Business/Products/Product/Product';
import AdminBusiness from '../../src/pages/Businesses/Admin/Business/Business';
import AdminBusinessBackground from '../../src/pages/Businesses/Admin/Business/Background/Background';
import AdminBusinessDescription from '../../src/pages/Businesses/Admin/Business/Description/Description';
import AdminBusinessSpecifics from '../../src/pages/Businesses/Admin/Business/Specifics/Specifics';
import AdminBusinessPhotos from '../../src/pages/Businesses/Admin/Business/Photos/Photos';
import CreateProduct from '../../src/pages/Products/Create/Create';
import ProductBackground from '../../src/pages/Products/Create/Background/Background';
import ProductDescription from '../../src/pages/Products/Create/Description/Description';
import ProductSpecifics from '../../src/pages/Products/Create/Specifics/Specifics';
import ProductPhotos from '../../src/pages/Products/Create/Photos/Photos';
import ProductCompletion from '../../src/pages/Products/Create/Completion/Completion';
import EditProduct from '../../src/pages/Products/Edit/Edit';
import EditProductBackground from '../../src/pages/Products/Edit/Background/Background';
import EditProductDescription from '../../src/pages/Products/Edit/Description/Description';
import EditProductSpecifics from '../../src/pages/Products/Edit/Specifics/Specifics';
import EditProductPhotos from '../../src/pages/Products/Edit/Photos/Photos';
import EditProductCompletion from '../../src/pages/Products/Edit/Completion/Completion';
import User from '../../src/pages/User/User';
import PersonalInfo from '../../src/pages/User/PersonalInfo/PersonalInfo';
import UserOrders from '../../src/pages/Orders/Users/Orders/Orders';
import UserOrder from '../../src/pages/Orders/Users/Orders/Order/Order';
import UserBilling from '../../src/pages/User/Billing/Billing';
import Cart from '../../src/pages/Cart/Cart';

// Initialize Firebase
const firebaseConfig = {
	apiKey: "AIzaSyBRbbnCBPgxHwNB2vQAObT7K1g383Ij5jo",
	authDomain: "persist-a2760.firebaseapp.com",
	databaseURL: "https://persist-a2760.firebaseio.com",
	projectId: "persist-a2760",
	storageBucket: "persist-a2760.appspot.com",
	messagingSenderId: "473760025562",
	appId: "1:473760025562:web:7359badb9dc9f660828ee3",
	measurementId: "G-ZBJ9CVEWXQ"
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

const store = createStore(rootReducer);

const rrfProps = {
	firebase,
	config: {
		userProfile: 'users',
		useFirestoreForProfile: true
	},
	dispatch: store.dispatch,
	createFirestoreInstance
};

// Initialize Font Awesome
library.add(fas);

// Render the app
render(
	<Provider store={store}>
		<ReactReduxFirebaseProvider {...rrfProps}>
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/login' component={Login} />
					<Route exact path='/signup' component={Signup} />
					<Route exact path='/search' component={Search} />
					<Route exact path='/products/:product' component={Product} />
					<Route exact path='/checkout/summary' component={Summary} />
					<Route exact path='/checkout/payment' component={Payment} />
					<Route exact path='/checkout/completion' component={Completion} />
					<Route exact path='/business/create' component={CreateBusiness} />
					<Route exact path='/business/create/background' component={BusinessBackground} />
					<Route exact path='/business/create/description' component={BusinessDescription} />
					<Route exact path='/business/create/specifics' component={BusinessSpecifics} />
					<Route exact path='/business/create/photos' component={BusinessPhotos} />
					<Route exact path='/business/create/completion' component={BusinessCompletion} />
					<Route exact path='/businesses' component={Businesses} />
					<Route exact path='/businesses/:business' component={Business} />
					<Route exact path='/businesses/:business/admin' component={AdminBusiness} />
					<Route exact path='/businesses/:business/admin/orders' component={BusinessOrders} />
					<Route exact path='/businesses/:business/admin/billing' component={BusinessBilling} />
					<Route exact path='/businesses/:business/admin/products' component={BusinessProducts} />
					<Route exact path='/businesses/:business/admin/background' component={AdminBusinessBackground} />
					<Route exact path='/businesses/:business/admin/description' component={AdminBusinessDescription} />
					<Route exact path='/businesses/:business/admin/specifics' component={AdminBusinessSpecifics} />
					<Route exact path='/businesses/:business/admin/photos' component={AdminBusinessPhotos} />
					<Route exact path='/businesses/:business/admin/products/:product' component={BusinessProduct} />
					<Route exact path='/product/create' component={CreateProduct} />
					<Route exact path='/product/create/background' component={ProductBackground} />
					<Route exact path='/product/create/description' component={ProductDescription} />
					<Route exact path='/product/create/specifics' component={ProductSpecifics} />
					<Route exact path='/product/create/photos' component={ProductPhotos} />
					<Route exact path='/product/create/completion' component={ProductCompletion} />
					<Route exact path='/products/:product/edit' component={EditProduct} />
					<Route exact path='/products/:product/background' component={EditProductBackground} />
					<Route exact path='/products/:product/description' component={EditProductDescription} />
					<Route exact path='/products/:product/specifics' component={EditProductSpecifics} />
					<Route exact path='/products/:product/photos' component={EditProductPhotos} />
					<Route exact path='/products/:product/completion' component={EditProductCompletion} />
					<Route exact path='/users/:user' component={User} />
					<Route exact path='/users/:user/personal-info' component={PersonalInfo} />
					<Route exact path='/users/:user/billing' component={UserBilling} />
					<Route exact path='/users/:user/orders' component={UserOrders} />
					<Route exact path='/users/:user/orders/:order' component={UserOrder} />
					<Route exact path='/cart' component={Cart} />
				</Switch>
			</BrowserRouter>
		</ReactReduxFirebaseProvider>
	</Provider>, document.getElementById('root'));
