import React from 'react'

export const Teamcard = (props) => {
    return (
        <>
            <div className="team-item">
                <img src={props.img} alt="" />
                <h3>{props.name}</h3>
                <span>{props.developer}</span>
            </div>         
        </>
    )
}

export default Teamcard;