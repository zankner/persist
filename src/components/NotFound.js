import React from 'react';
import Layout from './Layout';

const NotFound = () => (
  <Layout>
    <div className="mh-full-screen d-flex align-items-center">
      <div className="container text-center text-lg overlay-content py-6 py-lg-0">
        <img className="img-fluid" src="/img/illustration/undraw_page_not_found_su7k.svg" draggable={false} alt="" height="500" />
      </div>
    </div>
  </Layout>
);

export default NotFound;