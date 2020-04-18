const firebase = require('firebase');
const axios = require('axios');
const moment = require('moment');

firebase.initializeApp({
  apiKey: "AIzaSyBRbbnCBPgxHwNB2vQAObT7K1g383Ij5jo",
  authDomain: "persist-a2760.firebaseapp.com",
  databaseURL: "https://persist-a2760.firebaseio.com",
  projectId: "persist-a2760",
  storageBucket: "persist-a2760.appspot.com",
  messagingSenderId: "473760025562",
  appId: "1:473760025562:web:7359badb9dc9f660828ee3",
  measurementId: "G-ZBJ9CVEWXQ"
});

console.log('Testing...');

const pswd = 'zankner';

const email = 'zackankner@gmail.com';
const firstName = 'test';
const lastName = 'ankner';
const address = '226 beacon street';
const birthdate = '+16179393564';
const number = '+16179393564';
const billing = {t: 'test'};
const businesses = ['test'];
const orders = ['te'];
const schedule = ['2'];
const receipts = ['3'];
const dataStreams = {
  spotify: 'VxWaQxPWI0MyKuhxe9RMrQQEvvx2-1584826355981'
};

const business = 'PuCxVsWkBMh0bvQiHVff4qjU3pr2-1587158946208';

const products = ['test', 't'];
const dateOrdered = moment().format();
const customer = 'PuCxVsWkBMh0bvQiHVff4qjU3pr2';
const orderStatus = 'declined';


const order = 'PuCxVsWkBMh0bvQiHVff4qjU3pr2-1587174959937';

const photos = [];
const description = 'test';
const title = 'test';
const price = 5;


firebase.auth().signInWithEmailAndPassword(email, pswd).then((result) => {
  const { user } = result;
  user.getIdToken().then((token) => {
    axios.post(`http://localhost:3000/api/products/create`,
      {business, photos, description, title, price},
      {headers: {Authorization: token}
      }).then((res) => {
      console.log(res);
    }).catch(err => {
      console.log(err)
    });
  });
});