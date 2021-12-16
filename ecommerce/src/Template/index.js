import React from 'react';
import Header from './header';
import Slider from './slider';
import Service from './service';
import Story from './story';
import Product from './product';
import Footer from './footer';

const Template = () => {
    return(<>
        <Header />
        <Slider />
        <Story/>
        <Service />
        <Product />
        <Footer />
    </>)
}

export default Template;