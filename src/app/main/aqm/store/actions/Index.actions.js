/** @format */
import moment from "moment";

import axios from "axios";
import { Base_URL } from "../../../../server";
import { showMessage } from "app/store/actions/fuse";
import { authRoles } from "app/auth";
import store from "app/store";
export const GET_ALL_AIRDASHBOARDS = "[INDEX APP] GET AIRDASHBOARDS";

export const GET_RECENT_AQI = "[INDEX APP] GET RECENT AQI";
export const GET_A_RECENT_READING = "[INDEX APP] GET RECENT READING";

export const GET_ALL_AIRS = "[INDEX APP] GET AIR";
export const GET_ALL_GRAPHS = "[INDEX APP] GET GRAPHS";

let selectedSearch = {
    nodeId: 1
};

export function getAllGraphs() {
    return getGraphsData();
}

export const getGraphsData = () => (dispatch) => {
    
    
    let query = "air/get-aqi-graph/" +selectedSearch.nodeId ;
    
    
    axios
        .get(Base_URL + query)
        .then((res) => {
            console.log('RESPONSE',res.data);
            dispatch({
                type: GET_ALL_GRAPHS,
                payload: res.data,
            });

            return {};
        })
        .catch((err) => {
            dispatch(
                showMessage({
                    message: "Unable to get graphs...",
                    variant: "error"
                })
            );
        });
};

export function getAllAirs() {
    return getAirsPaginationData(0, 10, "");
}

export const getAirsPaginationData = (page, pageSize, sorted) => (dispatch) => {
    if (isNaN(pageSize)) {
        page = 0;
        sorted = [];
    }
    let sortingName;
    let sortingOrder;
    if (sorted.length === 0 || sorted === "") {
        sortingName = "Undefined";
        sortingOrder = "Undefined";
    } else {
        if (sorted[0].desc) {
            sortingName = sorted[0].id;
            sortingOrder = "DESC";
        } else {
            sortingName = sorted[0].id;
            sortingOrder = "ASC";
        }
    }
    let query = "";
    if(selectedSearch.nodeId=="Undefined"){
        query = "air/get-all-readings/" +
        page +
        "/" +
        pageSize +
        "/" +
        sortingName +
        "/" +
        sortingOrder;
    } else {
        query = "air/get-a-node-all-readings/" +
        selectedSearch.nodeId +
        "/" +
        page +
        "/" +
        pageSize +
        "/" +
        sortingName +
        "/" +
        sortingOrder;
    }
    
    axios
        .get(Base_URL + query)
        .then((res) => {
            dispatch({
                type: GET_ALL_AIRS,
                payload: res.data.records,
                pages: res.data.totalPages
            });

            return {};
        })
        .catch((err) => {
            dispatch(
                showMessage({
                    message: "Unable to get airs...",
                    variant: "error"
                })
            );
        });
};

export function searchReading(state) {
    if (state.nodeId === "") {
        state.nodeId = 1;
    }
    
    selectedSearch = state;

    return getRecentAQI();
}

export function searchAQI(state) {
    if (state.nodeId === "") {
        state.nodeId = 1;
    }
    
    selectedSearch = state;

    return getRecentAQI();
}
export function searchParameter(state) {
    if (state.nodeId === "") {
        state.nodeId = 1;
    }
    
    selectedSearch = state;

    return getARecentReading();
}

export const getRecentAQI = () => (dispatch) => {
    const query = "air/get-AQI/"+selectedSearch.nodeId;

    axios
        .get(Base_URL + query)
        .then((res) => {
            console.log(res.data.aqi);
            dispatch({
                type: GET_RECENT_AQI,
                payload: res.data
            });
        })
        .catch((err) => {
            dispatch(
                showMessage({
                    message: "Unable to get recent aqi...",
                    variant: "error"
                })
            );
        });
};

export const getARecentReading = () => (dispatch) => {
    
    let querys = "air/get-a-recent-reading/"+selectedSearch.nodeId;
    
    axios
        .get(Base_URL + querys)
        .then((res) => {
            // console.log(res.data.created_time)
            // console.log(moment(res.data.created_time).fromNow())
            dispatch({
                type: GET_A_RECENT_READING,
                payload: res.data
            });
        })
        .then(() => dispatch(updateAQI()))
        .catch((err) => {
            dispatch(
                showMessage({
                    message: "Unable to get recent air reading...",
                    variant: "error"
                })
            );
        });
};

export function updateAQI() {
    return getRecentAQI();
}