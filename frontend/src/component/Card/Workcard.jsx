import React from 'react'

const Workcard = (props) => {
    return (
        <>
            <div class="col-lg-3 col-md-6">
                <div class="how-it-works-item line-right">
                    <div class="step">{props.no}</div>
                    <h3>{props.title}</h3>
                    <p>
                       {props.data}
                    </p>
                </div>
            </div>      
        </>
    )
}

export default Workcard
