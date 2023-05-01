import React, { Component } from "react";
import {Paper, Typography} from "@material-ui/core";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as Actions from "./store/actions";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import Emoji from 'reactjs-emojis';

class ch4 extends Component {

    componentDidMount() {
        this.refreshData();
    }

    refreshData = () => {


        this.props.getARecentReading();
    }

    render() {
        const { ch4 } = this.props;
        return (
            <Paper className="w-full rounded-8 border-1" style={ch4<50 ? {backgroundColor:"#00E000"} : ch4<100 ? {backgroundColor:"#FFFF00"} : ch4<150 ? {backgroundColor:"#FF7600"} : ch4<200 ? {backgroundColor:"#FF0000"} : ch4<300 ? {backgroundColor:"#990049"} : ch4<400 ? {backgroundColor:"#7E0023"} : ch4>400 ? {backgroundColor:"#3E0023"} : {} }>
    <div className="text-center pt-4 pb-12" style={{overflow: "auto"}}>
        <Typography className="text-48 leading-none text-purple-dark">{ch4 ? Number(ch4).toFixed(1) : 0}</Typography>
        <Typography style={ ch4>300 ? { color: '#FFFFFF', fontSize: '0.8rem' } : {fontSize: '0.8rem'}}>ppm </Typography>
        <Typography className="text-12" color="textSecondary" style={ ch4>300 ? { color: '#FFFFFF', fontSize: '0.8rem' } : {fontSize: '0.8rem'}}><h1>CH4</h1></Typography>
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
        ch4: IndexApp.IndexReducer.ch4
    };
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ch4)
);
