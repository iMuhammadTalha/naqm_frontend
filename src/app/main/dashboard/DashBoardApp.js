/** @format */

import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { FuseAnimateGroup } from "@fuse";
import {FusePageSimple} from "@fuse";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import withReducer from "app/store/withReducer";
import RecentAQI from "./RecentAQI";
import CH4 from "./CH4";
import NO2 from "./NO2";
import NH3 from "./NH3"
import CO from "./CO"
import CO2 from "./CO2"
import Dust from "./dust"
import Humidity from "./humidity";
import Temperature from "./temperature"
import reducer from "./store/reducers";

import "./style.css";


const styles = () => ({
    addButton: {
        position: "fixed",
        right: 12,
        bottom: 12,
        zIndex: 99
    }
});

class DashBoardApp extends Component {
    render() {
        const {classes} = this.props;

        return (
            // <FusePageSimple
            //     classes={{
            //         root: classes.layoutRoot
            //     }}
            //     header={
            //         <div className="p-24"><h4>NAQM</h4></div>
            //     }
            //     contentToolbar={
                    
                    
            //     }
            // />
            <div className="w-full p-12">
                <FuseAnimateGroup
                    className="flex flex-wrap"
                    enter={{
                        animation: "transition.slideUpBigIn"
                    }}
                >
                    <div className="mb-16 w-full">
                        <div className="widget w-full p-16">
                            <RecentAQI />
                        </div>
                    </div>
                       
                    
                    <div className="widget flex w-full sm:w-1/2 md:w-1/4 p-12">
                        <CH4 />
                    </div>
                    
                    <div className="widget flex w-full sm:w-1/2 md:w-1/4 p-12">
                        <NO2 />
                    </div>

                    <div className="widget flex w-full sm:w-1/2 md:w-1/4 p-12">
                        <NH3 />
                    </div>

                    <div className="widget flex w-full sm:w-1/2 md:w-1/4 p-12">
                        <CO />
                    </div>

                    <div className="widget flex w-full sm:w-1/2 md:w-1/4 p-12">
                        <CO2 />
                    </div>
                    <div className="widget flex w-full sm:w-1/2 md:w-1/4 p-12">
                        <Temperature />
                    </div>
                    
                    <div className="widget flex w-full sm:w-1/2 md:w-1/4 p-12">
                        <Dust />
                    </div>

                    <div className="widget flex w-full sm:w-1/2 md:w-1/4 p-12">
                        <Humidity />
                    </div>

                </FuseAnimateGroup>
            
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            // getAllAdminUsers: Actions.getAllAdminUsers,
            // openNewAdminDialog: Actions.openNewAdminDialog
        },
        dispatch
    );
}

function mapStateToProps({ auth }) {
    return {
        user: auth.user
    };
}

export default withReducer(
    "DashBoardApp",
    reducer
)(
    withStyles(styles, { withTheme: true })(
        withRouter(connect(mapStateToProps, mapDispatchToProps)(DashBoardApp))
    )
);
