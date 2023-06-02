/** @format */

import * as Actions from "../actions";

const initialState = {
    routeParams: {},
    nitrogenAvg: [],
    phosphorusAvg: [],
    potassiumAvg: [],
    soilMoistureAvg: [],
    dates: []
};

const GraphReducer = function (state = initialState, action) {
    switch (action.type) {
        case Actions.GET_ALL_GRAPHS: {
            return {
                ...state,
                nitrogenAvg: action.payload.nitrogenAvg,
                phosphorusAvg: action.payload.phosphorusAvg,
                potassiumAvg: action.payload.potassiumAvg,
                soilMoistureAvg: action.payload.soilMoistureAvg,
                dates: action.payload.dates
            };
        }
        default: {
            return state;
        }
    }
};

export default GraphReducer;
