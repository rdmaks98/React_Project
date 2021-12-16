import React from 'react'
import Workcard from './Card/Workcard';
import Applicationcard from './Card/Applicationcard';
import {WorkData,ApplicationData} from '../ArrData';
const Application = () => {
    return (
        <>
            <section className="app-download section-padding" id="ripple-effect" data-scroll-index="3">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title">
                                <h2>download <span>Application</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="my-5"></div>
                    <div className="row justify-content-center mt-5">
                        {
                            ApplicationData.map((elem) => {
                                return(
                                    <>
                                        <Applicationcard title={elem.title} data={elem.data} icon={elem.icon} button={elem.button} />
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </section>

            <section className="how-it-works section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title">
                                <h2>how it <span>Works ?</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="my-5"></div>
                    <div className="row">
                        {
                            WorkData.map((elem) => {
                                return(
                                    <>
                                        <Workcard title={elem.title} no={elem.no} data={elem.data} />
                                    </>
                                );
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
export default Application;