/** @format */

import * as Actions from "../actions";

const initialState = {
    routeParams: {},
    bodyTemperatureAvg: [],
    atmosphericTemperatureAvg: [],
    atmosphericHumidityAvg: [],
    beatPerMinAvg: [],
    axAvg: [],
    ayAvg: [],
    azAvg: [],
    gxAvg: [],
    gyAvg: [],
    gzAvg: [],
    dates: []
};

const GraphReducer = function (state = initialState, action) {
    switch (action.type) {
        case Actions.GET_ALL_GRAPHS: {
            return {
                ...state,
                bodyTemperatureAvg: action.payload.bodyTemperatureAvg,
                atmosphericTemperatureAvg: action.payload.atmosphericTemperatureAvg,
                atmosphericHumidityAvg: action.payload.atmosphericHumidityAvg,
                beatPerMinAvg: action.payload.beatPerMinAvg,
                axAvg: action.payload.axAvg,
                ayAvg: action.payload.ayAvg,
                azAvg: action.payload.azAvg,
                gxAvg: action.payload.gxAvg,
                gyAvg: action.payload.gyAvg,
                gzAvg: action.payload.gzAvg,
                dates: action.payload.dates
            };
        }
        default: {
            return state;
        }
    }
};

export default GraphReducer;
