import {createStore,applyMiddleware} from 'redux'
import kanban_reducer from './kanbanReducer'
import  thunk from 'redux-thunk'
const store =createStore(kanban_reducer,applyMiddleware(thunk));
export default store;
