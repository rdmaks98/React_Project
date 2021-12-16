import React from 'react'

const Testmonialcard = (props) => {
    return (
        <>
           <div className="testimonial-item">
                <div className="img-box">
                    <img src={props.img} alt="" />
                    <i className="bx bxs-quote-alt-right"></i>
                </div>
                <p>
                    {props.p}
                </p>
                <h3>{props.name}</h3>
                <span>{props.developer}</span>
                <div className="rating">
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                </div>
            </div>
  
        </>
    )
}

export default Testmonialcard
