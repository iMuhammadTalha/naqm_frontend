import React, { Component } from "react";
import {Paper, Typography} from "@material-ui/core";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as Actions from "./store/actions";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";

class co2 extends Component {

    componentDidMount() {
        this.refreshData();
    }

    refreshData = () => {
        const url = "air/get-a-recent-reading/1";

        this.props.getARecentReading(url);
    }

    render() {
        const { co2 } = this.props;
        return (
            <Paper className="w-full rounded-8 border-1">
                {this.props.user.role[0] !== "fleet" &&
                <div className="flex items-center justify-end pr-4 pl-16 pt-4">
                    <IconButton aria-label="more" onClick={this.refreshData}>
                        <Icon>refresh</Icon>
                    </IconButton>
                </div>
                }
                <div className="text-center pt-12 pb-28" style={{overflow: "auto"}}>
                    <Typography
                        className="text-56 leading-none text-purple-dark">{co2 ? co2 : 0}</Typography>
                    <Typography className="text-16" color="textSecondary"><h1>CO2</h1></Typography>
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

function mapStateToProps({ DashBoardApp, auth }) {
    return {
        co2: DashBoardApp.DashboardReducer.co2,
        user: auth.user
    };
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(co2)
);
