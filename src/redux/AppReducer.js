import {SET_DISPLAY_PAGE,HOME} from "./AppActions";


const initialState  =  {
    display:HOME
};

export default function AppReducer(state = initialState, action) {
    switch (action.type) {
        case SET_DISPLAY_PAGE:
            state.display = action.display;
            return state;
        default:
            return state;
    }
}