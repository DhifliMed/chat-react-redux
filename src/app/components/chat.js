import Header from "./header";
import {useState} from "react";
import {connect} from "react-redux";
import {ADD_MESSAGE} from "../../features/ActionTypes";
import messages from "../../features/Messages";
import Messagelist from "./messagelist";

const Chat = (props) => {
    const [message, setMessage] = useState({
        content: ""
    });
    const [closed, setclosed] = useState(false);


    const updateMessage = (e) => {
        setMessage(previousState => {
            return {...previousState, content: e.target.value}
        });
    }
    const handleClosed = (e) => {
        setclosed(previousState => {
            return !previousState
        });
    }
    const sendMsg = (e) => {
        if (message.content !== '') {
            setMessage(previousState => {
                return {...previousState, content: ''}
            });
            props.addMessage(message.content, props.username, Date.now().toLocaleString())
        }

    }
    return (
        <div className={closed ? " chat-container " : "chat-container shown"}>

            {closed ? (
                <button className="btn btn-light btn-outline-primary" onClick={handleClosed}>show chat</button>) : (<>
                <div onClick={handleClosed}><Header username={props.username}/></div>
                <Messagelist messages={messages} username={props.username}/>
                <div className="row">
                    <div className="w-70">
                        <input value={message.content} onKeyPress={event => {
                            if (event.key === 'Enter') {
                                sendMsg()
                            }
                        }} className="form-control messageinput"
                               onChange={updateMessage}/>
                    </div>
                    <div className="w-30">
                        <button onClick={sendMsg}

                                className="btn btn-light btn-outline-primary w-100">send
                        </button>
                    </div>
                </div>
            </>)}
        </div>)
}

function mapStateToProps(state) {
    return state
}

const mapDispatchToProps = dispatch => ({
    addMessage: (content, authorName, msgTime) => (
        dispatch({
            type: ADD_MESSAGE,
            payload: {content, authorName, msgTime}
        })
    ),


})

export default connect(mapStateToProps, mapDispatchToProps)(Chat);

