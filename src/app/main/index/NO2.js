import React, { Component } from "react";
import {Paper, Typography} from "@material-ui/core";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as Actions from "./store/actions";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import Emoji from 'reactjs-emojis';

class NO2 extends Component {

    componentDidMount() {
        // this.refreshData();
    }

    refreshData = () => {
        const url = "air/get-a-recent-reading/1";

        this.props.getARecentReading();
    }

    render() {
        const { no2 } = this.props;
        return (                                                                      // {backgroundColor: no2<0.053 ? "#f1c40f" : 0 }}

<Paper className="w-full rounded-8 border-1" style={no2<0.053 ? {backgroundColor:"#00E000"} : no2<0.1 ? {backgroundColor:"#FFFF00"} : no2<0.36 ? {backgroundColor:"#FF7600"} : no2<0.65 ? {backgroundColor:"#FF0000"} : no2<1.24 ? {backgroundColor:"#990049"} : no2<1.64 ? {backgroundColor:"#7E0023"} : no2>1.64 ? {backgroundColor:"#3E0023"} : {} }>
<div className="text-center pt-4 pb-12" style={{overflow: "auto"}}>
        <Typography className="text-48 leading-none text-purple-dark">{no2 ? Number(no2).toFixed(1) : 0}</Typography>
        <Typography style={{fontSize: '0.8rem'}}>ppm </Typography>
        <Typography className="text-12" color="textSecondary" style={{fontSize: '0.8rem'}} ><h1>NO2</h1></Typography>
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
        no2: IndexApp.IndexReducer.no2
    };
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(NO2)
);
