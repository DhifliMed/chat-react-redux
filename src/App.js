import React, {useState} from 'react';
import Chat from "./app/components/chat";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {connect} from "react-redux";

const App = () => {
    const [user, setUser] = useState({
        name: ""
    });
    const [active, setActive] = useState({
        active: false
    });

    const updateName = (e) => {
        setUser(previousState => {
            return {...previousState, name: e.target.value}
        });

    }
    const startchat = (e) => {
        if (user.name !== '') {
            setActive(previousState => {
                return {...previousState, active: true}
            });
        }

    }
    return (
        <div className="container">
            <section>
                <div className="logo">
                    <img alt="pretty chat app" src="/logo.png"/>
                </div>
            </section>
            <section>
                {
                    !active.active ? (
                        <div className="start-screen">
                            <div className="w-100 text-center">
                                <input placeholder="Enter your name to start the chat" value={user.name}
                                       className="form-control w-50 mx-auto" onChange={updateName}/>
                                <button className="btn btn-dark btn-outline-light w-50 mx-auto mt-5"
                                        onClick={startchat}>
                                    Start Chat
                                </button>
                            </div>
                        </div>
                    ) : <Chat username={user.name}/>
                }
            </section>

        </div>
    );
}

export default connect(() => ({}))(App)
