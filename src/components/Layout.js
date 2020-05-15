import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer'

const Layout = props => (
	<React.Fragment>
		<Header />
		{props.children}
		<Footer />
	</React.Fragment>
);

export default Layout