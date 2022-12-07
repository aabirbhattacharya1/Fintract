import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import AboutUs from './AboutUs'
import Footer from './Footer'
import Header from './Header'
import Home from './Home'
import More from './More'
import OurProducts from './OurProducts'

const fint = () => {
  return (
    <>
    <Header />
    <Home />
    <AboutUs />
    <OurProducts />
    <More />
    <Footer />
    </>
  );
};

export default fint;
