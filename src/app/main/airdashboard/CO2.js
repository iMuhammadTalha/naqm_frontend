import React, { Component } from "react";
import {Paper, Typography} from "@material-ui/core";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as Actions from "./store/actions";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import Emoji from 'reactjs-emojis';

class co2 extends Component {

    componentDidMount() {
        this.refreshData();
    }

    refreshData = () => {


        this.props.getARecentReading();
    }

    render() {
        const { co2 } = this.props;
        return (
            <Paper className="w-full rounded-8 border-1" style={co2<1000 ? {backgroundColor:"#00E000"} : co2<2000 ? {backgroundColor:"#FFFF00"} : co2<5000 ? {backgroundColor:"#FF7600"} : co2<10000 ? {backgroundColor:"#FF0000"} : co2<20000 ? {backgroundColor:"#990049"} : co2<40000 ? {backgroundColor:"#7E0023"} : co2>40000 ? {backgroundColor:"#3E0023"} : {} }>
                {this.props.user.role[0] !== "fleet" &&
                <div className="flex items-center justify-center pr-4 pl-16 pt-4">
                    <IconButton aria-label="more" onClick={this.refreshData}>
                    {co2<1000 ? <Emoji name="smiley" size="30"/> : co2<2000 ? <Emoji name="blush" size="30"/> : co2<5000 ? <Emoji name="neutral_face" size="30"/> : co2<10000 ? <Emoji name="worried" size="30"/> : co2<20000 ? <Emoji name="fearful" size="30"/> : co2<40000 ? <Emoji name="disappointed_relieved" size="30"/> : co2>40000 ? <Emoji name="sob" size="30"/> : {} } 
                    
                        {/* <Icon>refresh</Icon> */}
                    </IconButton>
                </div>
                }
                <div className="text-center pt-12 pb-28" style={{overflow: "auto"}}>
                    <Typography
                        className="text-56 leading-none text-purple-dark">{co2 ? co2 : 0}</Typography>
                        ppm
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

function mapStateToProps({ AirDashboardApp, auth }) {
    return {
        co2: AirDashboardApp.AirDashboardReducer.co2,
        user: auth.user
    };
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(co2)
);
