import React from 'react'
import Card from "./component/Card"
import Arr from "./component/arrdata"
// import "../css/"
const index = () => {
    const cleardata = () => {
        console.log("2345678")
    }

    return (
        <>
            <div className="container">
                <div class="row justify-content-md-center">
                    <div class="col col-lg-6">
                        <div class="card mt-5 mx-5 shadow-large bg-dark p-3 rounded" style={{color:"white"}}>
                            <div class="row">
                                {Arr.map((val,i) => {
                                    return (<>
                                    <Card key={i} img={val.img} name={val.name} profession={val.profession} />
                                    </>)
                                })}
                                <button class="btn btn-warning my-5 mx-auto btn-sm" onClick={cleardata}>CLEAR ALL</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default index
