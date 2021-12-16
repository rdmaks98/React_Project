import React from 'react'

const Headercard = (props) => {
    return (
        <>
            <li className="nav-item">
                <a
                    className="nav-link active text-capitalize"
                    href="#"
                    data-scroll-nav={props.no}
                    >{props.title}</a>
                </li>
        </>
    )
}

export default Headercard
