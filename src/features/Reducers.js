import { combineReducers } from "redux"
import messages from "./Messages"
import { withReduxStateSync } from 'redux-state-sync'

const chat = combineReducers({
    messages
});
export default withReduxStateSync(chat)
