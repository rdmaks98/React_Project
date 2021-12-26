import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/createStore';
import InputSection from '../component/InputSection';
import NotesSection from '../component/NotesSection';

const Add = () => {
    return (
        <div>
            <h1 style={{textAlign:"center"}}> Add Task</h1>
            <Provider store={store}>
                <div className="container">
                    <InputSection />
                    <div className="line"></div>
                    <NotesSection />
                </div>
            </Provider>
        </div>
    )
}

export default Add
