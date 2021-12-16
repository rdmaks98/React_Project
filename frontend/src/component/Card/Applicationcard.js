import React from 'react'

const Applicationcard = (props) => {
    return (
        <>
            <div className="col-lg-4 col-md-4">
                <div data-tilt className="js-tilt">
                    <div className="app-download-item">
                        <i className={props.icon}></i>
                        <h3>{props.title}</h3>
                        <p>
                            {props.data}
                        </p>
                        <a href="#" className="btn btn-2">{props.button} </a>
                    </div>
                </div>
            </div>         
        </>
    )
}

export default Applicationcard
