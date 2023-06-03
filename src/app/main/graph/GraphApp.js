/** @format */

import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";
import {FusePageSimple} from "@fuse";
import {bindActionCreators} from "redux";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import withReducer from "app/store/withReducer";
import _ from "@lodash";
import GraphList from "./GraphList";
import GraphHeader from "./GraphHeader";
import * as Actions from "./store/actions";
import reducer from "./store/reducers";
import "./style.css";

import AQMHeader from "../index/Header";
import Footer from "../index/Footer";

class GraphApp extends Component {
    componentDidMount() {
        this.props.getAllGraphs();
    }

    componentDidUpdate(prevProps, prevState) {
        if (!_.isEqual(this.props.location, prevProps.location)) {
            this.props.getAllGraphs();
        }
    }

    render() {
        // if (!localStorage.getItem("jwtToken")) {
        //     window.location = "/login";
        // }
        return (
            <div>
                <AQMHeader />
                    <GraphList/>
                <Footer  color="#008080" />
            </div>     
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            getAllGraphs: Actions.getAllGraphs
        },
        dispatch
    );
}

function mapStateToProps({GraphApp}) {
    return {
        graphs: GraphApp.GraphReducer.entities
    };
}

export default withReducer(
    "GraphApp",
    reducer
)(
    withStyles({withTheme: true})(
        withRouter(connect(mapStateToProps, mapDispatchToProps)(GraphApp))
    )
);
