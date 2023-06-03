/** @format */
import React, { Component } from "react";
import { FuseAnimate } from "@fuse";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import ReactTable from "react-table";
import * as Actions from "./store/actions";
import { Chart } from 'react-charts'
import {Line} from 'react-chartjs-2';
import { FuseAnimateGroup } from "@fuse";

import {Paper, Typography} from "@material-ui/core";




class GraphList extends Component {
    

    render() {
        const { graphs, dates, bodyTemperatureAvg, atmosphericTemperatureAvg, atmosphericHumidityAvg, beatPerMinAvg, axAvg, ayAvg, azAvg, gxAvg, gyAvg, gzAvg } = this.props;
        let data = graphs;

        if (!Array.isArray(data)) {
            data=[]
        }

        return (
            <div className="w-full p-12">
                <FuseAnimateGroup
                    className="flex flex-wrap"
                    enter={{
                        animation: "transition.slideUpBigIn"
                    }}
                >
                    
                    <div className="widget flex w-full sm:w-1/2 md:w-1/2 p-12">
                    <Paper className="w-full rounded-8 border-1">
                                <Line
                                    data={{
                                        labels: dates,
                                        datasets: [
                                        {
                                            label: 'Body Temperature',
                                            fill: false,
                                            lineTension: 0.5,
                                            backgroundColor: '#795548',
                                            borderColor: 'rgba(0,0,0,1)',
                                            borderWidth: 2,
                                            data: bodyTemperatureAvg
                                        }
                                        ]
                                    }}
                                    
                                    />
                            </Paper>
                    </div>


                    <div className="widget flex w-full sm:w-1/2 md:w-1/2 p-12">
                    <Paper className="w-full rounded-8 border-1">
                                <Line
                                    data={{
                                        labels: dates,
                                        datasets: [
                                        {
                                            label: 'Atmospheric Temperature',
                                            fill: false,
                                            lineTension: 0.5,
                                            backgroundColor: '#795548',
                                            borderColor: 'rgba(0,0,0,1)',
                                            borderWidth: 2,
                                            data: atmosphericTemperatureAvg
                                        }
                                        ]
                                    }}
                                    
                                    />
                            </Paper>
                    </div>


                    <div className="widget flex w-full sm:w-1/2 md:w-1/2 p-12">
                    <Paper className="w-full rounded-8 border-1">
                                <Line
                                    data={{
                                        labels: dates,
                                        datasets: [
                                        {
                                            label: 'Atmospheric Humidity',
                                            fill: false,
                                            lineTension: 0.5,
                                            backgroundColor: '#795548',
                                            borderColor: 'rgba(0,0,0,1)',
                                            borderWidth: 2,
                                            data: atmosphericHumidityAvg
                                        }
                                        ]
                                    }}
                                    
                                    />
                            </Paper>
                    </div>


                    <div className="widget flex w-full sm:w-1/2 md:w-1/2 p-12">
                    <Paper className="w-full rounded-8 border-1">
                                <Line
                                    data={{
                                        labels: dates,
                                        datasets: [
                                        {
                                            label: 'Beat / Min',
                                            fill: false,
                                            lineTension: 0.5,
                                            backgroundColor: '#795548',
                                            borderColor: 'rgba(0,0,0,1)',
                                            borderWidth: 2,
                                            data: beatPerMinAvg
                                        }
                                        ]
                                    }}
                                    
                                    />
                            </Paper>
                    </div>


                    <div className="widget flex w-full sm:w-1/2 md:w-1/2 p-12">
                    <Paper className="w-full rounded-8 border-1">
                                <Line
                                    data={{
                                        labels: dates,
                                        datasets: [
                                        {
                                            label: 'Ax',
                                            fill: false,
                                            lineTension: 0.5,
                                            backgroundColor: '#795548',
                                            borderColor: 'rgba(0,0,0,1)',
                                            borderWidth: 2,
                                            data: axAvg
                                        }
                                        ]
                                    }}
                                    
                                    />
                            </Paper>
                    </div>

                    <div className="widget flex w-full sm:w-1/2 md:w-1/2 p-12">
                    <Paper className="w-full rounded-8 border-1">
                                <Line
                                    data={{
                                        labels: dates,
                                        datasets: [
                                        {
                                            label: 'Ay',
                                            fill: false,
                                            lineTension: 0.5,
                                            backgroundColor: '#795548',
                                            borderColor: 'rgba(0,0,0,1)',
                                            borderWidth: 2,
                                            data: ayAvg
                                        }
                                        ]
                                    }}
                                    
                                    />
                            </Paper>
                    </div>


                    <div className="widget flex w-full sm:w-1/2 md:w-1/2 p-12">
                    <Paper className="w-full rounded-8 border-1">
                                <Line
                                    data={{
                                        labels: dates,
                                        datasets: [
                                        {
                                            label: 'Az',
                                            fill: false,
                                            lineTension: 0.5,
                                            backgroundColor: '#795548',
                                            borderColor: 'rgba(0,0,0,1)',
                                            borderWidth: 2,
                                            data: azAvg
                                        }
                                        ]
                                    }}
                                    
                                    />
                            </Paper>
                    </div>


                    <div className="widget flex w-full sm:w-1/2 md:w-1/2 p-12">
                    <Paper className="w-full rounded-8 border-1">
                                <Line
                                    data={{
                                        labels: dates,
                                        datasets: [
                                        {
                                            label: 'Gx',
                                            fill: false,
                                            lineTension: 0.5,
                                            backgroundColor: '#795548',
                                            borderColor: 'rgba(0,0,0,1)',
                                            borderWidth: 2,
                                            data: gxAvg
                                        }
                                        ]
                                    }}
                                    
                                    />
                            </Paper>
                    </div>

                    <div className="widget flex w-full sm:w-1/2 md:w-1/2 p-12">
                    <Paper className="w-full rounded-8 border-1">
                                <Line
                                    data={{
                                        labels: dates,
                                        datasets: [
                                        {
                                            label: 'Gy',
                                            fill: false,
                                            lineTension: 0.5,
                                            backgroundColor: '#795548',
                                            borderColor: 'rgba(0,0,0,1)',
                                            borderWidth: 2,
                                            data: gyAvg
                                        }
                                        ]
                                    }}
                                    
                                    />
                            </Paper>
                    </div>

                    <div className="widget flex w-full sm:w-1/2 md:w-1/2 p-12">
                    <Paper className="w-full rounded-8 border-1">
                                <Line
                                    data={{
                                        labels: dates,
                                        datasets: [
                                        {
                                            label: 'Gz',
                                            fill: false,
                                            lineTension: 0.5,
                                            backgroundColor: '#795548',
                                            borderColor: 'rgba(0,0,0,1)',
                                            borderWidth: 2,
                                            data: gzAvg
                                        }
                                        ]
                                    }}
                                    
                                    />
                            </Paper>
                    </div>

                </FuseAnimateGroup>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            getGraphsData: Actions.getGraphsData
        },
        dispatch
    );
}

function mapStateToProps({ GraphApp }) {
    
    console.log('Graph APP',GraphApp);
    return {
        bodyTemperatureAvg: GraphApp.GraphReducer.bodyTemperatureAvg,
        atmosphericTemperatureAvg: GraphApp.GraphReducer.atmosphericTemperatureAvg,
        atmosphericHumidityAvg: GraphApp.GraphReducer.atmosphericHumidityAvg,
        beatPerMinAvg: GraphApp.GraphReducer.beatPerMinAvg,
        axAvg: GraphApp.GraphReducer.axAvg,
        ayAvg: GraphApp.GraphReducer.ayAvg,
        azAvg: GraphApp.GraphReducer.azAvg,
        gxAvg: GraphApp.GraphReducer.gxAvg,
        gyAvg: GraphApp.GraphReducer.gyAvg,
        gzAvg: GraphApp.GraphReducer.gzAvg,
        dates: GraphApp.GraphReducer.dates
    };
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(GraphList)
);
