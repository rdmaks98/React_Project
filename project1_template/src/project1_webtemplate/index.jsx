import React from 'react'
import Header from "./component/header";
import Slider from "./component/slider";
import About from "./component/about";
import Footer from "./component/footer";
const index = () => {
    return (
        <div>
            <Header/>
            <Slider/>
            <About/>
            <Footer/>
        </div>
    )
}

export default index;
