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
    state = {
        selectedGraph: 'AQI',
    }

    handleGraphChange = (event) => {
        console.log('Change', event.target.value)
        this.setState({
            selectedGraph: event.target.value,
        });
    }


    render() {
        const { graphs, dates, AQIAvg, nh3Avg, coAvg, no2Avg, ch4Avg, co2Avg, dustAvg, humitidyAvg, temperatureAvg } = this.props;
        const { selectedGraph } = this.state;
        let data = [];

        switch (selectedGraph) {
            case 'AQI':
                console.log('AQI CASE')
                data = [
                    {
                        label: 'AQI',
                        fill: false,
                        lineTension: 0.5,
                        backgroundColor: 'rgba(75,192,192,1)',
                        borderColor: 'rgba(0,0,0,1)',
                        borderWidth: 2,
                        data: AQIAvg
                    }
                ];
                break;
            case 'NH3':
                console.log('NH3 CASE')
                data = [
                    {
                        label: 'NH3',
                        fill: false,
                        lineTension: 0.5,
                        backgroundColor: 'rgba(75,192,192,1)',
                        borderColor: 'rgba(0,0,0,1)',
                        borderWidth: 2,
                        data: nh3Avg
                    }
                ];
                break;
            // Add cases for other graphs here
            default:
                data = [
                    {
                        label: 'AQI',
                        fill: false,
                        lineTension: 0.5,
                        backgroundColor: 'rgba(75,192,192,1)',
                        borderColor: 'rgba(0,0,0,1)',
                        borderWidth: 2,
                        data: AQIAvg
                    }
                ];
                break;
        }


        // let data = graphs;

        if (!Array.isArray(data)) {
            data=[]
        }
console.log('data', data)
        return (
            <div className="w-full p-12">
                <div className="mb-16 w-full">
                    <div className="widget w-full p-16">
                        <Paper className="w-full rounded-8 border-1">
                            <div className="flex items-center justify-between mb-8">
                                <h2>{selectedGraph}</h2>
                                <div>
                                    <label htmlFor="graph-select">Select a graph:</label>
                                    <select id="graph-select" value={selectedGraph} onChange={this.handleGraphChange}>
                                        <option value="AQI">AQI</option>
                                        <option value="NH3">NH3</option>
                                        {/* Add options for other graphs here */}
                                    </select>
                                </div>
                            </div>
                            <Line
                                data={{
                                    labels: dates,
                                    datasets: data,
                                }}
                                options={{
                                    title: {
                                        display: true,
                                        text: selectedGraph,
                                        fontSize: 15,
                                    },
                                    legend: {
                                        display: true,
                                        position: 'right',
                                    },
                                    scales: {
                                        yAxes: [
                                            {
                                                display: true,
                                                ticks: {
                                                    suggestedMin: 0, // minimum will be 0, unless there is a lower value.
                                                    // OR //
                                                    beginAtZero: true, // minimum value will be 0.
                                                    suggestedMax: 500,
                                                },
                                            },
                                        ],
                                    },
                                }}
                            />
                        </Paper>
                    </div>
                </div>
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

function mapStateToProps({ IndexApp }) {
    
    
    return {
        nh3Avg: IndexApp.IndexReducer.nh3Avg,
        coAvg: IndexApp.IndexReducer.coAvg,
        no2Avg: IndexApp.IndexReducer.no2Avg,
        ch4Avg: IndexApp.IndexReducer.ch4Avg,
        co2Avg: IndexApp.IndexReducer.co2Avg,
        dustAvg: IndexApp.IndexReducer.dustAvg,
        humitidyAvg: IndexApp.IndexReducer.humitidyAvg,
        temperatureAvg: IndexApp.IndexReducer.temperatureAvg,
        dates: IndexApp.IndexReducer.dates,
        AQIAvg: IndexApp.IndexReducer.AQIAvg
    };
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(GraphList)
);
