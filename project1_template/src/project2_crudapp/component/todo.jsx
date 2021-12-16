import React, { useState } from 'react'
import { Form, Button, Table } from "react-bootstrap"

// displat toast message
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Todo = () => {

    // localstorage getitem

    const Retrive = () => {
        let storing = localStorage.getItem("all");
        if (storing) {
            return JSON.parse(localStorage.getItem("all"));
        } else {
            return [];
        }
    };

    // intialvalue function currentvalue
    const [name, setname] = useState("")
    const [desc, setdesc] = useState("")
    const [pic, setpic] = useState("")

    // create validation 
    const [validatename, namevalidaton] = useState(false)
    const [validatedesc, descvalidaton] = useState(false)

    // setall input value in one state using array
    const [data, alldata] = useState(Retrive())

    // localstorage setitem
    localStorage.setItem("all", JSON.stringify(data))

    // button confirm yaa edit
    const [btn, setbtn] = useState("Add Todo")

    // flags pass
    const [flag, setflag] = useState(false)
    const [updateid, setupdate] = useState("")
    const Name = ((e) => {
        setname(e.target.value)
        namevalidaton(false)
    })

    const Desc = ((e) => {
        setdesc(e.target.value)
        descvalidaton(false)
    })

    const profile = ((e) => {
        setpic(e.target.value)
    })

    const Submit = () => {

        // validate data
        if (name === "") {
            namevalidaton(true)
        }

        if (desc === "") {
            descvalidaton(true)
        }

        // insert and read item
        if (name != "" && desc != "") {
            if (flag) {
                setbtn("Add Todo")
                let updatdata = data.map((val) => {
                    if (val.id === updateid) {
                        return { id: updateid, name, desc }
                    }
                    else {
                        return val;
                    }
                })
                alldata(updatdata)
                setflag(false)
                toast.success("😍Your data Update successfully😍")

            }
            else {
                let all = data
                all = [...data, { name, desc, pic, id: Math.random() }]
                alldata(all)
                toast.success("😍Your data added successfully😍")
            }
        }
        setname("")
        setdesc("")
    }

    // delete single item 
    const Delete = (id) => {
        let deletedata = data
        deletedata = deletedata.filter((val, i) => {
            return i !== id
        })
        alldata(deletedata)
    }

    // Edit item
    const Edit = (id) => {
        setbtn("Edit Todo")
        setflag(true)
        setupdate(id)
        let editdata = data.find((val) => {
            return val.id === id
        });
        setname(editdata.name);
        setdesc(editdata.desc);
    }

    // all data clear in localstorage also table 
    const Clearall = () => {
        localStorage.clear()
        return alldata([])
    }

    return (
        <>
            <div className="container my-5 w-50">
                <ToastContainer />
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" value={name} placeholder="your name ex:rdmakvana" onChange={Name} />{validatename && "please enter name here"}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Your Profile">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="file" name="pic" value={pic} placeholder="your name ex:rdmakvana" onChange={profile} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description Bio</Form.Label>
                        <Form.Control name="desc" value={desc} as="textarea" rows={3} placeholder="enter your bio here..." onChange={Desc} />{validatedesc && "please enter description here"}
                    </Form.Group>
                    <Button type="button" onClick={Submit} variant="success">✏{btn}✏</Button>{' '}
                </Form>
                <h2 className="text-center">Your Todo List</h2><Button onClick={Clearall} variant="warning" size="md">
                    Clear all
                </Button>{' '}
                <div className="container-fluid my-5">
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Profile</th>
                                <th>Description</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((val, i) => {
                                return <>
                                    <tr>
                                        <td key={i + 1}>{i + 1}</td>
                                        <td key={val.name}>{val.name}</td>
                                        <td key={val.pic}><img src={val.pic} alt="profile"></img></td>
                                        <td key={val.desc}>{val.desc}</td>
                                        <td><Button variant="outline-danger" onClick={() => Delete(i)}>🎁Delete</Button>{' '}
                                            <Button variant="outline-info" onClick={() => Edit(val.id)}>📝Edit</Button>{' '}
                                        </td>
                                    </tr>
                                </>
                            })
                            }

                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    )
}

export default Todo
