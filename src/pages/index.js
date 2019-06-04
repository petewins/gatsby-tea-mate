import React from 'react';
import Layout from '../components/Layout';
import Landing from '../sections/Landing';
import About from '../sections/About';
// import Projects from '../sections/Projects';
import Photos from '../sections/Photos';
import Header from '../components/Header';
import Footer from '../components/Footer';

const IndexPage = () => (
  <Layout>
    <Header />
    <Landing />
    <About />
    {/* <Projects /> */}
    {/* <Photos /> */}
    <Footer />
  </Layout>
);

export default IndexPage;
