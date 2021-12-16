import React from 'react'
import Header from './header';
import Levelup from './levelup';
import Features from './features';
import Funfact from './funfact';
import Screenshot from './screenshot';
import Application from './apllication';
import Testmonial from './testmonial';
import Pricing from './pricing';
import Team from './team';
import Question from './question';
import Contact from './contact';
import Footer from './footer';

function Component() {
    return (
        <>
           {/* <h1>hi.......🧏🏻‍♂️🧏🏻‍♀️🧏🏻‍♂️🧏🏻‍♀️</h1>  */}
           <Header />
           <Levelup />
           <Features />
           <Funfact />
           <Screenshot />
           <Application />
           <Testmonial />
           <Pricing/>
           <Team />
           <Question />
           <Contact />
           <Footer />
           <div className="toogle-theme">
                <i className="bx bx-moon"></i>
            </div>
        </>
    )
}

export default Component;
