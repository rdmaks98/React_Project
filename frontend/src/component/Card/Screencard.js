import React from 'react'

const Screencard = (props) => {
    return (
        <>
            <div class="screenshot-item">
                <img src={props.img} alt="" />
            </div>
        </>
    )
}

export default Screencard
