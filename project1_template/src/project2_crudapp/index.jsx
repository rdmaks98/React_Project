import React from 'react'
import Header from "./component/navbar"
import Footer from "./component/footer"
import Todo from "./component/todo"
const index = () => {
    return (
        <div>
            <Header/>
            <Todo/>
            <Footer/>
        </div>
    )
}

export default index
