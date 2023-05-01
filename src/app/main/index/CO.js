import React, { Component } from "react";
import {Paper, Typography} from "@material-ui/core";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as Actions from "./store/actions";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import Emoji from 'reactjs-emojis';

class co extends Component {

    componentDidMount() {
        this.refreshData();
    }

    refreshData = () => {


        this.props.getARecentReading();
    }

    render() {
        const { co } = this.props;
        return (
            
<Paper className="w-full rounded-8 border-1" style={co<4.4 ? {backgroundColor:"#00E000"} : co<9.4 ? {backgroundColor:"#FFFF00"} : co<12.4 ? {backgroundColor:"#FF7600"} : co<15.4 ? {backgroundColor:"#FF0000"} : co<30.4 ? {backgroundColor:"#990049"} : co<40.4 ? {backgroundColor:"#7E0023"} : co>40.4 ? {backgroundColor:"#3E0023"} : {} }>
<div className="text-center pt-4 pb-12" style={{overflow: "auto"}}>
        <Typography className="text-48 leading-none text-purple-dark">{co ? Number(co).toFixed(1) : 0}</Typography>
        <Typography style={{fontSize: '0.8rem'}}>ppm </Typography>
        <Typography className="text-12" color="textSecondary" style={{fontSize: '0.8rem'}} ><h1>CO</h1></Typography>
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
        co: IndexApp.IndexReducer.co
    };
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(co)
);
