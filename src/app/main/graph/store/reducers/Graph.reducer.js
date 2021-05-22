/** @format */

import * as Actions from "../actions";

const initialState = {
    entities: [],
    routeParams: {},
    pages: 0
};

const GraphReducer = function (state = initialState, action) {
    switch (action.type) {
        case Actions.GET_ALL_GRAPHS: {
            return {
                ...state,
                entities: action.payload,
                pages: action.pages
            };
        }
        default: {
            return state;
        }
    }
};

export default GraphReducer;
