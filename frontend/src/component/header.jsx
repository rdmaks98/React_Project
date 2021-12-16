import React from 'react';
import {HeaderData} from "../ArrData";
import Headercard from './Card/Headercard';
const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-md fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="#">Code Intelli</a>
                    <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapsibleNavbar"
                    >
                    <i className="bx bxs-category"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav ml-auto">
                            {
                                HeaderData.map((elem) => {
                                    return(
                                        <>
                                            <Headercard title={elem.title} no={elem.no} />
                                        </>
                                    )
                                })
                            }

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;
