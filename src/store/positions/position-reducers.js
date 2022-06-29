import {ADD_POSITION} from "./position-actions";

const initialState = [];
export const positionReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POSITION: {
            return action.position
        }
        default: {
            return state
        }
    }
};