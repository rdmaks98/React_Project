import React from 'react'
import Testmonialcard from './Card/Testmonialcard';
import {TestmonialData} from '../ArrData';
const Testmonial = () => {
    return (
        <div>
            <section className="testimonial section-padding" data-scroll-index="4">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title">
                                <h2>what our <span>client</span> Say</h2>
                            </div>
                        </div>
                    </div>
                    <div className="my-5"></div>
                    <div className="row">
                        <div className="owl-carousel testimonials-carousel">
                           {
                                TestmonialData.map((elem) => {
                                    return(
                                        <>
                                            <Testmonialcard name={elem.name} p={elem.p} img={elem.img} developer={elem.developer} />
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testmonial
