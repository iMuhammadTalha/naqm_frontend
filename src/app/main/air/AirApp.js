/** @format */

import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";
import {FusePageSimple} from "@fuse";
import {bindActionCreators} from "redux";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import withReducer from "app/store/withReducer";
import _ from "@lodash";
import AirList from "./AirList";
import AirHeader from "./AirHeader";
import * as Actions from "./store/actions";
import reducer from "./store/reducers";
import "./style.css";

import AQMHeader from "../index/Header";
import Footer from "../index/Footer";

class AirApp extends Component {
    componentDidMount() {
        this.props.getAllAirs();
    }

    componentDidUpdate(prevProps, prevState) {
        if (!_.isEqual(this.props.location, prevProps.location)) {
            this.props.getAllAirs();
        }
    }

    render() {
        // if (!localStorage.getItem("jwtToken")) {
        //     window.location = "/login";
        // }
        return (

            <div>
                <AQMHeader />
                    <AirList/>
                <Footer color="#008080" />
            </div>

        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            getAllAirs: Actions.getAllAirs
        },
        dispatch
    );
}

function mapStateToProps({AirApp}) {
    return {
        airs: AirApp.AirReducer.entities
    };
}

export default withReducer(
    "AirApp",
    reducer
)(
    withStyles({withTheme: true})(
        withRouter(connect(mapStateToProps, mapDispatchToProps)(AirApp))
    )
);
