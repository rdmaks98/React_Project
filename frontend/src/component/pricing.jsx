import React from 'react'
import Pricingcard from './Card/Pricingcard';
import {PricingData} from '../ArrData';
const Pricing = () => {
    return (
        <div>
            <section className="pricing section-padding" data-scroll-index="5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title">
                                <h2>Pricing <span>plan</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="my-5"></div>
                    <div className="row justify-content-center">
                        {
                            PricingData.map((elem) => {
                                return(
                                    <>
                                      <Pricingcard title={elem.title} price={elem.price} />  
                                    </>
                                );
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Pricing
