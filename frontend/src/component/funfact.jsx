import React from 'react'
import { FactData } from '../ArrData';
import Factcard from './Card/Factcard';
const Funfact = () => {
    return (
        <div>
            <section className="fun-facts section-padding">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-6 col-md-5 d-flex align-items-center
                        justify-content-center">
                        <div className="fun-fact-img">
                        <img src="img/app-screenshots/2.png" alt="fun-facts" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-7">
                        <div className="section-title">
                            <h2>fun <span>facts</span></h2>
                            <p className="fun-facts-text">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Libero, iure magnam corporis exercitationem animi nulla quia
                                repellendus suscipit ducimus enim illum voluptates sit nobis
                                cumque mollitia ex fuga, deleniti eos.
                            </p>
                            <div className="row">
                                {
                                    FactData.map((elem) => {
                                        return(
                                            <>
                                            <Factcard heading={elem.heading} color={elem.color} number={elem.number} /></>
                                        )
                                    })
                                }
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Funfact;
