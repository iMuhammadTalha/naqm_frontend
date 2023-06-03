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
<div className="text-center pt-1 pb-1" style={{overflow: "auto"}}>
        <Typography className="text-24 leading-none text-purple-dark">{co2 ? Number(co2).toFixed(0) : 0}</Typography>
        <Typography style={{fontSize: '0.8rem'}}>ppm </Typography>
        <Typography className="text-15 leading-none" color="textSecondary" >CO2</Typography>
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
        co2: IndexApp.IndexReducer.co2
    };
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(co2)
);
