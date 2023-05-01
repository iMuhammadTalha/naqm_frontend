/** @format */

import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";
import {FusePageSimple} from "@fuse";
import {bindActionCreators} from "redux";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import withReducer from "app/store/withReducer";
import _ from "@lodash";
// import AirDashboardList from "./AirDashboardList";
import * as Actions from "./store/actions";
import reducer from "./store/reducers";
import "./style.css";

import Index from "./Index";

class IndexApp extends Component {
    componentDidMount() {
        this.props.getAllGraphs();
        this.props.getRecentAQI();
        this.props.getARecentReading();
        this.props.getAllAirs();
    }

    componentDidUpdate(prevProps, prevState) {
        if (!_.isEqual(this.props.location, prevProps.location)) {
            this.props.getRecentAQI();
            this.props.getARecentReading();
            this.props.getAllAirs();
            this.props.getAllGraphs();
        }
    }

    render() {
        return (
            <Index>

            </Index>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            getARecentReading: Actions.getARecentReading,
            getRecentAQI: Actions.getRecentAQI,
            getAllAirs: Actions.getAllAirs,
            getAllGraphs: Actions.getAllGraphs
        },
        dispatch
    );
}

function mapStateToProps({IndexApp}) {
    return {
        airdashboards: IndexApp.IndexReducer.entities
    };
}

export default withReducer(
    "IndexApp",
    reducer
)(
    withStyles({withTheme: true})(
        withRouter(connect(mapStateToProps, mapDispatchToProps)(IndexApp))
    )
);
