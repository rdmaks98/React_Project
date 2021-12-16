import React from 'react'

const sign = "$";
const time = "/monthly";
const Pricingcard = (props) => {
    return (
        <>
            <div className="col-lg-4 col-md-6">
                <div className="pricing-plan">
                    <div className="pricing-header">
                        <h3>{props.title}</h3>
                    </div>
                    <div className="pricing-price">
                        <span className="currency">{sign}</span>
                        <span className="price">{props.price}</span>
                        <span className="period">{time}</span>
                    </div>
                    <div className="pricing-body">
                        <ul>
                            <li><i className="bx bx-check"></i> 5 GB Bandwidth</li>
                            <li><i className="bx bx-check"></i> Free Update</li>
                            <li><i className="bx bx-check"></i> High Regulation</li>
                            <li><i className="bx bx-check"></i> Branding</li>                            <li><i className="bx bx-check"></i> Another Great Features</li>
                        </ul>
                    </div>
                    <div className="pricing-footer">
                        <a href="" className="btn btn-2">Get Started</a>
                    </div>
                </div>
            </div>
                     
        </>
    )
}

export default Pricingcard
