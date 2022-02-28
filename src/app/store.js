import chat from '../features/Reducers'
import {applyMiddleware, createStore} from 'redux'
import {createStateSyncMiddleware, initStateWithPrevTab} from 'redux-state-sync'

const middlewares = [
    createStateSyncMiddleware(),
]

const saveToLocalStorage = state => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (e) {
        alert(e.toString())
    }
};

const store = createStore(chat, {}, applyMiddleware(...middlewares))
initStateWithPrevTab(store)
store.subscribe(() => {
    saveToLocalStorage(store.getState());
});

export default store

