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
        const { graphs, dates, nitrogenAvg, phosphorusAvg, potassiumAvg, soilMoistureAvg} = this.props;
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
                                            label: 'Nitrogen',
                                            fill: false,
                                            lineTension: 0.5,
                                            backgroundColor: '#6aa84f',
                                            borderColor: 'rgba(0,0,0,1)',
                                            borderWidth: 2,
                                            data: nitrogenAvg
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
                                            label: 'Phosphorus',
                                            fill: false,
                                            lineTension: 0.5,
                                            backgroundColor: '#6aa84f',
                                            borderColor: 'rgba(0,0,0,1)',
                                            borderWidth: 2,
                                            data: phosphorusAvg
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
                                            label: 'Potassium',
                                            fill: false,
                                            lineTension: 0.5,
                                            backgroundColor: '#6aa84f',
                                            borderColor: 'rgba(0,0,0,1)',
                                            borderWidth: 2,
                                            data: potassiumAvg
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
                                            label: 'Soil Moisture',
                                            fill: false,
                                            lineTension: 0.5,
                                            backgroundColor: '#6aa84f',
                                            borderColor: 'rgba(0,0,0,1)',
                                            borderWidth: 2,
                                            data: soilMoistureAvg
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

        nitrogenAvg: GraphApp.GraphReducer.nitrogenAvg,
        phosphorusAvg: GraphApp.GraphReducer.phosphorusAvg,
        potassiumAvg: GraphApp.GraphReducer.potassiumAvg,
        soilMoistureAvg: GraphApp.GraphReducer.soilMoistureAvg,
        dates: GraphApp.GraphReducer.dates
    };
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(GraphList)
);
