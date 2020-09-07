import { combineReducers } from "redux";
import history from "../history"
import DialogReducer from "./dialogReducer"
import AppReducer from "./AppReducer"

import { connectRouter } from 'connected-react-router/immutable';

export default combineReducers({
    router:connectRouter(history),
    DialogReducer,
    AppReducer
});