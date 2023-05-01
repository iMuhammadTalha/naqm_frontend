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
<div className="text-center pt-4 pb-12" style={{overflow: "auto"}}>
        <Typography className="text-48 leading-none text-purple-dark">{dust ? Number(dust).toFixed(1) : 0}</Typography>
        <Typography style={{fontSize: '0.8rem'}}>ug/m </Typography>
        <Typography className="text-12" color="textSecondary" style={{fontSize: '0.8rem'}} ><h1>Dust</h1></Typography>
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
        dust: IndexApp.IndexReducer.dust
    };
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(dust)
);
