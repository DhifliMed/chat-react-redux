
import * as types from './ActionTypes'


export const addMessage = (content, authorName, msgTime) => (dispatch) => {
    return dispatch({type: types.ADD_MESSAGE, payload: {content, authorName, msgTime}});
}


export const messageReceived = (content, authorName,msgTime) => ({
    type: types.MESSAGE_RECEIVED,
    content,
    authorName,
    msgTime
})

