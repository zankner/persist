const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const enforce = require('express-sslify');
const admin = require('firebase-admin');
const session = require('express-session');
const {Firestore} = require('@google-cloud/firestore');
const {FirestoreStore} = require('@google-cloud/connect-firestore');

// Create express app
const app = express();

// Set up development environment
if (process.env.NODE_ENV !== 'production') {
	console.log('Running in development mode');
	require('dotenv').config();
	app.use(require('morgan')('dev'));
} else {
	console.log('Running in production mode');
	app.use(enforce.HTTPS({ trustProtoHeader: true }));
}

// Set up firebase
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://persist-a2760.firebaseio.com"
});

// Define routers
const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');

// Set up app
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
	store: new FirestoreStore({
		dataset: new Firestore({
			kind: 'express-sessions',
			keyFilename: './serviceAccountKey.json'
		}),
	}),
	cooke: {
		maxAge: 60000
	},
	secret: process.env.COOKIE_SECRET,
	resave: true,
	saveUninitialized: true
}));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));

// Set up routers
app.use('/api', apiRouter);
app.use('/', indexRouter);


module.exports = app;
