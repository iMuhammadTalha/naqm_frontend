import React, { Component } from "react";
import {Paper, Typography} from "@material-ui/core";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as Actions from "./store/actions";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import Emoji from 'reactjs-emojis';

class dust extends Component {

    componentDidMount() {
        this.refreshData();
    }

    refreshData = () => {


        this.props.getARecentReading();
    }

    render() {
        const { dust } = this.props;
        return (
            <Paper className="w-full rounded-8 border-1" style={dust<12 ? {backgroundColor:"#00E000"} : dust<35.4 ? {backgroundColor:"#FFFF00"} : dust<55.4 ? {backgroundColor:"#FF7600"} : dust<150.4 ? {backgroundColor:"#FF0000"} : dust<250.4 ? {backgroundColor:"#990049"} : dust<350.4 ? {backgroundColor:"#7E0023"} : dust>350.4 ? {backgroundColor:"#3E0023"} : {} }>
                {this.props.user.role[0] !== "fleet" &&
                <div className="flex items-center justify-center pr-4 pl-16 pt-4">
                    <IconButton aria-label="more" onClick={this.refreshData}>
                    {dust<12 ? <Emoji name="smiley" size="30"/> : dust<35.4 ? <Emoji name="blush" size="30"/> : dust<55.4 ? <Emoji name="neutral_face" size="30"/> : dust<150.4 ? <Emoji name="worried" size="30"/> : dust<250.4 ? <Emoji name="fearful" size="30"/> : dust<350.4 ? <Emoji name="disappointed_relieved" size="30"/> : dust>350.4 ? <Emoji name="sob" size="30"/> : {} }
                        {/* <Icon>refresh</Icon> */}
                    </IconButton>
                </div>
                }
                <div className="text-center pt-12 pb-28" style={{overflow: "auto"}}>
                    <Typography
                        className="text-56 leading-none text-purple-dark">{dust ? dust : 0}</Typography>
                        ug/m
                    <Typography className="text-16" color="textSecondary"><h1>Dust</h1></Typography>
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

function mapStateToProps({ AirDashboardApp, auth }) {
    return {
        dust: AirDashboardApp.AirDashboardReducer.dust,
        user: auth.user
    };
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(dust)
);
