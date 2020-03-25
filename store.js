import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools} from 'redux-devtools-extension';
import thunderMiddleware from 'redux-thunk';
import data from './data/data.json';

//initial state
const startState = {
    cards: []
}

// actions
export const initialCards = () => {
    return {
        type: 'INITIALCARDS',
        cards: data
    }
}

//create store
export const initStore = (initialState = startState) => {
    return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddlerware)));
}