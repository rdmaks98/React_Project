import React from 'react'

const Card = (props) => {
    return (
        <>
            <div class="col-lg-4">
                <img img={props.img} class="rounded d-block" alt="profile"></img>
            </div>
            <div class="col-lg-6">
                <center>
                    <h6 >{props.name}</h6>
                    <p>{props.profession}</p>
                </center>
            </div>
        </>
    )
}

export default Card
