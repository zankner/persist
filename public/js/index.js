import React from 'react';
import { render } from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
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
import Login from '../../src/pages/login';
import Signup from '../../src/pages/signup';
import Product from '../../src/pages/Products/Product';
import Summary from '../../src/pages/Checkout/Summary/Summary';
import Payment from '../../src/pages/Checkout/Payment/Payment';
import Completion from '../../src/pages/Checkout/Completion/Completion';
import CreateBusiness from '../../src/pages/Businesses/Create/Create';
import BusinessBackground from '../../src/pages/Businesses/Create/Background/Background';
import BusinessDescription from '../../src/pages/Businesses/Create/Description/Description';
import BusinessSpecifics from '../../src/pages/Businesses/Create/Specifics/Specifics'

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
				</Switch>
			</BrowserRouter>
		</ReactReduxFirebaseProvider>
	</Provider>, document.getElementById('root'));
