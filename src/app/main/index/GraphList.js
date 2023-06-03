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
                case 'CO':
                    data = [
                        {
                            label: 'CO',
                            fill: false,
                            lineTension: 0.5,
                            backgroundColor: 'rgba(75,192,192,1)',
                            borderColor: 'rgba(0,0,0,1)',
                            borderWidth: 2,
                            data: coAvg
                        }
                    ];
                    break;
                    case 'NO2':
                    data = [
                        {
                            label: 'NO2',
                            fill: false,
                            lineTension: 0.5,
                            backgroundColor: 'rgba(75,192,192,1)',
                            borderColor: 'rgba(0,0,0,1)',
                            borderWidth: 2,
                            data: no2Avg
                        }
                    ];
                    break;
                    case 'CH4':
                        data = [
                            {
                                label: 'CH4',
                                fill: false,
                                lineTension: 0.5,
                                backgroundColor: 'rgba(75,192,192,1)',
                                borderColor: 'rgba(0,0,0,1)',
                                borderWidth: 2,
                                data: ch4Avg
                            }
                        ];
                        break;
                        case 'CO2':
                            data = [
                                {
                                    label: 'CO2',
                                    fill: false,
                                    lineTension: 0.5,
                                    backgroundColor: 'rgba(75,192,192,1)',
                                    borderColor: 'rgba(0,0,0,1)',
                                    borderWidth: 2,
                                    data: co2Avg
                                }
                            ];
                            break;
                            case 'Dust':
                            data = [
                                {
                                    label: 'Dust',
                                    fill: false,
                                    lineTension: 0.5,
                                    backgroundColor: 'rgba(75,192,192,1)',
                                    borderColor: 'rgba(0,0,0,1)',
                                    borderWidth: 2,
                                    data: dustAvg
                                }
                            ];
                            break;
                            case 'Humidity':
                            data = [
                                {
                                    label: 'Humidity',
                                    fill: false,
                                    lineTension: 0.5,
                                    backgroundColor: 'rgba(75,192,192,1)',
                                    borderColor: 'rgba(0,0,0,1)',
                                    borderWidth: 2,
                                    data: humitidyAvg
                                }
                            ];
                            break;
                            case 'Temperature':
                            data = [
                                {
                                    label: 'Temperature',
                                    fill: false,
                                    lineTension: 0.5,
                                    backgroundColor: 'rgba(75,192,192,1)',
                                    borderColor: 'rgba(0,0,0,1)',
                                    borderWidth: 2,
                                    data: temperatureAvg
                                }
                            ];
                            break;
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
        return (
            
                    <Paper className="w-full rounded-8 border-1">
  <div className="flex items-center justify-between mb-8">
    <div className="flex items-center" style={{margin: "auto", marginTop: '1%'}}>
      <label htmlFor="graph-select" className="mr-2">Select a graph:</label>
      <select id="graph-select" value={selectedGraph} onChange={this.handleGraphChange} className="border border-gray-300 rounded-md px-2 py-1">
        <option value="AQI">AQI</option>
        <option value="NH3">NH3</option>
        <option value="CO">CO</option>
        <option value="NO2">NO2</option>
        <option value="CH4">CH4</option>
        <option value="CO2">CO2</option>
        <option value="Dust">Dust</option>
        <option value="Humitidy">Humitidy</option>
        <option value="Temperature">Temperature</option>
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
              suggestedMin: 0,
              beginAtZero: true,
              suggestedMax: 500,
            },
          },
        ],
      },
    }}
  />
</Paper>
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
