import React, { Component } from "react";
import {Paper, Typography} from "@material-ui/core";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as Actions from "./store/actions";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTint } from '@fortawesome/free-solid-svg-icons';

class humidity extends Component {

    componentDidMount() {
        this.refreshData();
    }

    refreshData = () => {


        this.props.getARecentReading();
    }

    render() {
        const { humidity } = this.props;
        return (
            <Paper className="w-full rounded-8 border-1">
<div className="text-center pt-1 pb-1" style={{overflow: "auto"}}>
                    <Typography
                        className="text-24 leading-none text-purple-dark">{humidity ? humidity : 0}</Typography>
                        %
                    <Typography className="text-12" color="textSecondary"><h3>Humidity</h3></Typography>
                    
                    <div style={{ position: "absolute"}}>
                    <FontAwesomeIcon icon={faTint} size="sm" />
    </div>
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
        humidity: IndexApp.IndexReducer.humidity
    };
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(humidity)
);
