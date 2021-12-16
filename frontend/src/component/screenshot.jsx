import React from 'react'
import Screencard from './Card/Screencard'
import {ScreenData} from "../ArrData";
const Screenshot = () => {
    return (
        <div>
            <section class="app-screenshot section-padding" data-scroll-index="2">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="section-title">
                            <h2>app <span>screenshots</span></h2>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="owl-carousel screenshot-carousel">
                            {
                                ScreenData.map((elem) => {
                                    return(
                                        <>
                                            <Screencard img={elem.img} />
                                        </>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Screenshot
