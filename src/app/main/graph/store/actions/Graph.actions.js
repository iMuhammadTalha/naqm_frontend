/** @format */

import axios from "axios";
import { Base_URL } from "../../../../server";
import { showMessage } from "app/store/actions/fuse";
import { authRoles } from "app/auth";
import store from "app/store";
export const GET_ALL_GRAPHS = "[GRAPHS APP] GET GRAPHS";

let selectedSearch = {
    nodeId: "Undefined"
};

export function getAllGraphs() {
    return getGraphsPaginationData(0, 20, "");
}

export const getGraphsPaginationData = (page, pageSize, sorted) => (dispatch) => {
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
        query = "graph/get-all-readings/" +
        page +
        "/" +
        pageSize +
        "/" +
        sortingName +
        "/" +
        sortingOrder;
    } else {
        query = "graph/get-a-node-all-readings/" +
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
            console.log('RESPONSE',res.data);
            dispatch({
                type: GET_ALL_GRAPHS,
                payload: res.data.records,
                pages: res.data.totalPages
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


export function searchReading(state) {
    if (state.nodeId === "") {
        state.nodeId = "Undefined";
    }
    
    selectedSearch = state;

    return getGraphsPaginationData(0, 20, "");
}