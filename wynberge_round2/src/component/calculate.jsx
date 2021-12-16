import React ,{useState} from 'react'

import "../calculate.css"
const Calculate = () => {
    
    // get localstorage value
    const getItems = () => {
        let list = localStorage.getItem("calculatedata");
        if (list) {
            return JSON.parse(localStorage.getItem("calculatedata"));
        } else {
            return [];
        }
    };

    // take state for input value
    const [min, setmin] = useState("")
    const [max, setmax] = useState("")
    const [comission, setcomission] = useState("")
    const [all,setall] = useState(getItems())
    const [inputsale,setinputsale] = useState("")
    const [amount, setamount] = useState("")
    // store data in locastorage
    localStorage.setItem("calculatedata", JSON.stringify(all))

    // only numeric value consider
    const minChange = (e) => {
        const val = e.target.value.replace(/\D/g,"");
        setmin(val)
        
    }

    const maxChange = (e) => {
        const val = e.target.value.replace(/\D/g, "");
        setmax(val)
    }

    const comChange = (e) => {
        const val = e.target.value.replace(/\D/g, "");
        setcomission(val)
    }

    
    // insert data in table
    const addData = () => {
        if(max <= min)
        {
            alert("please enter max value is greater to min")
        }
        else{
            let data = all;
            data = [...data,{min,max,comission}];
            setall(data)
        }
        setmin("")
        setmax("")
        setcomission("")
    }

    const Getamount = () => {
        const calamt = (all.min*100) + (all.max*100)
        setamount(calamt)
        
    }
    return (
        <>
            <h2 className="title">calculate total selling commissions by Range</h2>
            <div>Minimum value        Maximum value          Commision value</div>
            <div>
                <input type="text" value={min} onChange={minChange}  placeholder="enter minimum value" />
                <input type="text" value={max} onChange={maxChange} placeholder="enter maximum value" />
                <input type="text" value={comission} onChange={comChange} placeholder="enter commision  value" />
                <button type="button" className="addbtn" onClick={addData}>Add data</button>
            </div>
            <div>
                <table border="1" className="table">
                <tr>
                    <th>Minimum value</th>
                    <th>Maximum value</th>
                    <th>Comission value</th>
                </tr>
                {all.map((value,i) => {
                    return <>
                        <tr>
                            <td>{value.min}</td>
                            <td>{value.max}</td>
                            <td>{value.comission}</td>
                        </tr>
                    </>
                })}
                
                </table>
            </div>
            <hr/>
            <div>
                <div>Input sale</div>
                <input type="text" onChange={((e) => {setinputsale(e.target.value)})} placeholder="enter sales"/>
                <button type="button" className="getbtn" onClick={Getamount}>Get Commision</button>
            </div>
            <div>
                Your commison amount {amount}
            </div>
        </>
    )
}

export default Calculate
