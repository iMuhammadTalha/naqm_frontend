/** @format */
import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import ReactTable from "react-table";
import * as Actions from "./store/actions";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import ReactSpeedometer from "react-d3-speedometer";

class RecentAQI extends Component {
    componentDidMount() {
        this.props.getRecentAQI();
    }

    refreshData = () => {
        this.props.getRecentAQI();
    };
    getTrProps = (state, rowInfo, instance) => {
        if (rowInfo) {
          return {
            style: {
              background: rowInfo.row.Category == 'Healthy' ? 'green' : rowInfo.row.Category == 'Moderate' ? 'yellow' : rowInfo.row.Category == 'Dangerous' ? 'orange' : 'red',
              color: 'white'
            }
          }
        }
        return {};
      }
    render() {
        const {recentAQI } = this.props;
        const data = [{
            Category: 'Healthy',
            AQI: '0-50',
            color: '#3CCB47',
            desciption: 'Air quality is considered satisfactory and air pollution poses little or no risk.'
          }, {
            Category: 'Moderate',
            AQI: '50-150',
            color: '#f1c40f',
            desciption: 'Air quality is acceptable however for some pollutants there may be a moderate health concern for a very small number of people who are unusally sensitive to air pollution.'
          }, {
            Category: 'Dangerous',
            AQI: '150-250',
            color: '#e67e22',
            desciption: 'Everyone may begin to experience health effects member of sensitive groups may experience more serious health effect.'
          }, {
            Category: 'Hazardous',
            AQI: '250-500',
            color: '#E84C3D',
            desciption: 'Health warning of empergency conditions. The entire population is more likely to be affected.'
          }]
          const columns = [{
            Header: 'Category',
            accessor: 'Category',
            className: 'justify-center font-bold'
          }, {
            Header: 'AQI',
            accessor: 'AQI',
            className: 'justify-center font-bold'
          }];
        return (
            
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                    {/* <div> */}
                    <ReactSpeedometer
                        needleHeightRatio={0.9}
                        maxSegmentLabels={5}
                        // segments={3}
                        maxValue={500}
                        width={500}
                        height={300}
                        // customSegmentStops={[0, 500, 750, 900, 1000]}
                        customSegmentStops={[0, 50, 150, 250, 500]}
                        segmentColors={['#3CCB47', '#f1c40f', '#e67e22', '#E84C3D']}
                        value={recentAQI}
                        currentValueText={'AQI: ${value}'}
                        // textColor={textColor}
                        />
                        <ReactTable
                            data={data}
                            columns={columns}
                            defaultPageSize={4}
                            className="-striped -highlight"
                            showPaginationBottom={false}
                            getTrProps={this.getTrProps}
                            // trStyleCallback={ data => ( {color: data.row.Category=='Healthy' ? 'green' : 'red'} ) }

                        />

                    
            </div>
            

            // <Card className="w-full h-full rounded-8 border-1">
            //     <div className="p-16 pr-4 flex flex-row items-center justify-between">
            //         <Typography className="h1 pr-16">
            //             AQI
            //         </Typography>

            //         <div>
            //             <IconButton
            //                 aria-label="refresh"
            //                 onClick={this.refreshData}
            //             >
            //                 <Icon>refresh</Icon>
            //             </IconButton>
            //         </div>
            //     </div>

            //     <ReactSpeedometer
            //             needleHeightRatio={0.9}
            //             maxSegmentLabels={5}
            //             // segments={3}
            //             maxValue={500}
            //             width={500}
            //             height={500}
            //             // customSegmentStops={[0, 500, 750, 900, 1000]}
            //             customSegmentStops={[0, 50, 150, 250, 500]}
            //             segmentColors={['#3CCB47', '#f1c40f', '#e67e22', '#E84C3D']}
            //             value={333}
            //             // currentValueText="AQI"
            //             // textColor={textColor}
            //             />

            //     {/* <Divider className="card-divider w-full" /> */}

            //     {/* <div className="p-8 pt-16 flex flex-row items-center">
            //         <Button onClick={this.openViewHandler}>
            //             SHOW ALL Reading
            //         </Button>
            //     </div> */}
            // </Card>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            getRecentAQI: Actions.getRecentAQI
        },
        dispatch
    );
}

function mapStateToProps({ AirDashboardApp }) {
    // console.log('AVBFDDD',AirDashboardApp.AirDashboardReducer.recentAQI)
    return {
        recentAQI: AirDashboardApp.AirDashboardReducer.recentAQI.aqi
    };
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(RecentAQI)
);
