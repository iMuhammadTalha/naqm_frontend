import React, { Component } from "react";
import {Paper, Typography} from "@material-ui/core";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as Actions from "./store/actions";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import Emoji from 'reactjs-emojis';

class nh3 extends Component {

    componentDidMount() {
        this.refreshData();
    }

    refreshData = () => {


        this.props.getARecentReading();
    }

    render() {
        const { nh3 } = this.props;
        console.log('NH3',nh3);
        return (
            
<Paper className="w-full rounded-8 border-1" style={nh3<200 ? {backgroundColor:"#00E000"} : nh3<400 ? {backgroundColor:"#FFFF00"} : nh3<800 ? {backgroundColor:"#FF7600"} : nh3<1200 ? {backgroundColor:"#FF0000"} : nh3<1800 ? {backgroundColor:"#990049"} : nh3<2000 ? {backgroundColor:"#7E0023"} : nh3>2000 ? {backgroundColor:"#3E0023"} : {} }>
<div className="text-center pt-1 pb-1" style={{overflow: "auto"}}>
        <Typography className="text-24 leading-none text-purple-dark">{nh3 ? Number(nh3).toFixed(1) : 0}</Typography>
        <Typography style={{fontSize: '0.8rem'}}>ppm </Typography>
        <Typography className="text-15 leading-none" color="textSecondary" >NH3</Typography>
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
        nh3: IndexApp.IndexReducer.nh3

    };
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(nh3)
);
