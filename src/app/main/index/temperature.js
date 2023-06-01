import React, { Component } from "react";
import {Paper, Typography} from "@material-ui/core";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as Actions from "./store/actions";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";

class temperature extends Component {

    componentDidMount() {
        this.refreshData();
    }

    refreshData = () => {
        const url = "air/get-a-recent-reading/1";

        this.props.getARecentReading(url);
    }

    render() {
        const { temperature } = this.props;
        return (
            <Paper className="w-full rounded-8 border-1" >
<div className="text-center pt-4 pb-12" style={{overflow: "auto"}}>
                    <Typography
                        className="text-24 leading-none text-purple-dark">{temperature ? temperature : 0}</Typography>
                        Celsius
                    <Typography className="text-12" color="textSecondary"><h3>Temperature</h3></Typography>
                </div>
            </Paper>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            getARecentReading: Actions.getARecentReading
        },
        dispatch
    );
}

function mapStateToProps({ IndexApp, auth }) {
    return {
        temperature: IndexApp.IndexReducer.temperature
    };
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(temperature)
);
