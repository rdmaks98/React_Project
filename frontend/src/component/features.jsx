import React from 'react'
import {FeaturesData} from '../ArrData';
import FeatureCard from './Card/Featurecard';
const Features = () => {
    return (
        <div>
            <section className="features section-padding" data-scroll-index="1">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title">
                            <h2>awesome <span>Features</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="my-5"></div>
                    <div className="row">
                        <div className="owl-carousel features-carousel">
                            {
                                FeaturesData.map((elem) => {
                                    return(
                                        <>
                                            <FeatureCard heading={elem.heading} icon={elem.icon} data={elem.data} />
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

export default Features
