// eslint-disable-next-line no-unused-vars
import React from 'react';


// import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
// import { CTA, Brand, Navbar } from './components';

import Footer from './containers/footer/Footer';
import Features from './containers/features/Features';
import Blog from './containers/blog/Blog';
import Possibility from './containers/possibility/Possibility';
import WhatGPT3 from './containers/whatGPT3/WhatGPT3';
import Header from './containers/header/Header';
import CTA from './components/cta/CTA';
import Navbar from './components/navbar/Navbar';
import Brand from './components/brand/Brand';
import Feature from './components/feature/Feature';
import Article from './components/article/Article';
import './App.css';




const App = () => {
  return (
    <div className="App">
        <div className="gradient__bg">
            <Navbar />
            <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
        <Feature />
        <Article />
        
    </div>
  )
}

export default App;