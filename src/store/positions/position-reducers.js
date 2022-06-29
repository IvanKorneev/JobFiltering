import {GET_POSITIONS} from "./position-actions";

const initialState = [];
export const positionReducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSITIONS: {
            return action.positions
        }
        default: {
            return state
        }
    }
};