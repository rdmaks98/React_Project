import React from 'react'
import Teamcard from './Card/Teamcard';
import {Teamdata} from '../ArrData';

const Team = () => {
    return (
        <div>
            <section className="team section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title">
                                <h2>Team <span>Member</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="my-5"></div>

                    <div className="row">
                        <div className="owl-carousel team-carousel">
                            {
                                Teamdata.map((elem) => {
                                    return(
                                        <>
                                            <Teamcard name={elem.name} developer={elem.developer} img={elem.img}  />
                                        </>
                                    );
                                })
                            }
                            {/* <Teamcard/> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Team
