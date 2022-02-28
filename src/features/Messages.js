import {ADD_MESSAGE, MESSAGE_RECEIVED} from "./ActionTypes";
const initialState = []
const messages = (state = initialState , action) => {
    switch (action.type) {
        case ADD_MESSAGE:
        case MESSAGE_RECEIVED:
            return state.concat([
                {
                    content: action.payload.content,
                    authorName: action.payload.authorName,
                    msgTime: action.payload.msgTime
                }
            ])
        default:
            return state
    }
}

export default messages
