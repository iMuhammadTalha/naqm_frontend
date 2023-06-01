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
import Humidity from "./humidity";
import Temperature from "./temperature"
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
              background: rowInfo.row.Category == 'Good' ? '#00E000' : rowInfo.row.Category == 'Moderate' ? '#FFFF00' : rowInfo.row.Category == 'Unhealthy for Sensitive' ? '#FF7600': rowInfo.row.Category == 'Unhealthy' ? '#FF0000': rowInfo.row.Category == 'Very Unhealthy' ? '#990049' : rowInfo.row.Category == 'Hazardous' ? '#7E0023' : '#3E0023',
              color: 'white'
            }
          }
        }
        return {};
      }
    render() {
        const {recentAQI } = this.props;
        const data = [{
            Category: 'Good',
            AQI: '0-50',
            color: '#00E000',
            desciption: 'Air quality is considered satisfactory and air pollution poses little or no risk.'
          }, {
            Category: 'Moderate',
            AQI: '50-100',
            color: '#FFFF00',
            desciption: 'Air quality is acceptable however for some pollutants there may be a moderate health concern for a very small number of people who are unusally sensitive to air pollution.'
          }, {
            Category: 'Unhealthy for Sensitive',
            AQI: '100-150',
            color: '#FF7600',
            desciption: 'Everyone may begin to experience health effects member of sensitive groups may experience more serious health effect.'
          }, {
            Category: 'Unhealthy',
            AQI: '150-200',
            color: '#FF0000',
            desciption: 'Health warning of empergency conditions. The entire population is more likely to be affected.'
          }, {
            Category: 'Very Unhealthy',
            AQI: '200-300',
            color: '#990049',
            desciption: 'Health warning of empergency conditions. The entire population is more likely to be affected.'
          }, {
            Category: 'Hazardous',
            AQI: '300-400',
            color: '#7E0023',
            desciption: 'Health warning of empergency conditions. The entire population is more likely to be affected.'
          }, {
            Category: 'Highly Dangerous',
            AQI: '400-500',
            color: '#3E0023',
            desciption: 'Health warning of empergency conditions. The entire population is more likely to be affected.'
          }]
          const columns = [{
            Header: 'Category',
            accessor: 'Category',
            width: 170,
            className: 'justify-center font-bold'
          }, {
            Header: 'AQI',
            accessor: 'AQI',
            className: 'justify-center font-bold'
          }];
        return (
            
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                    <div>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    <div className="widget flex w-full sm:w-1/2 md:w-1/6 p-12">
        <Humidity />
    </div>
                    <ReactSpeedometer
                        needleHeightRatio={0.9}
                        maxSegmentLabels={5}
                        // segments={3}
                        maxValue={500}
                        width={550}
                        height={300}
                        // customSegmentStops={[0, 500, 750, 900, 1000]}
                        customSegmentStops={[0, 50, 100, 150, 200, 300, 400, 500]}
                        segmentColors={['#00E000', '#FFFF00', '#FF7600', '#FF0000', '#990049', '#7E0023', '#3E0023']}
                        // customSegmentLabels={[
                        //   { text: 'Good', position: 'OUTSIDE', color: '#000000' },
                        //   { text: 'Moderate', position: 'OUTSIDE', color: '#000000' },
                        //   { text: 'Unhealthy for Sensitive', position: 'OUTSIDE', color: '#000000' },
                        //   { text: 'Unhealthy', position: 'OUTSIDE', color: '#000000' },
                        //   { text: 'Very Unhealthy', position: 'OUTSIDE', color: '#000000' },
                        //   { text: 'Hazardous', position: 'OUTSIDE', color: '#000000' },
                        //   { text: 'Highly Dangerous', position: 'OUTSIDE', color: '#000000' },
                        // ]}
                        value={recentAQI}
                        currentValueText={'AQI: ${value}'}
                        // textColor={textColor}
                        />
                                          <div className="widget flex w-full sm:w-1/2 md:w-1/6 p-12">
        <Temperature />
    </div>
    </div>

                        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Good</th>
          <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Moderate</th>
          <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Unhealthy for Sensitive</th>
          <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Unhealthy</th>
          <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Very Unhealthy</th>
          <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Hazardous</th>
          <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Highly Dangerous</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ border: '1px solid black', padding: '8px', backgroundColor: '#00E000'}}>0-50</td>
          <td style={{ border: '1px solid black', padding: '8px', backgroundColor: '#FFFF00' }}>50-100</td>
          <td style={{ border: '1px solid black', padding: '8px', backgroundColor: '#FF7600' }}>100-150</td>
          <td style={{ border: '1px solid black', padding: '8px', backgroundColor: '#FF0000' }}>150-200</td>
          <td style={{ border: '1px solid black', padding: '8px', backgroundColor: '#990049', color: '#FFFFFF'  }}>200-300</td>
          <td style={{ border: '1px solid black', padding: '8px', backgroundColor: '#7E0023', color: '#FFFFFF'  }}>300-400</td>
          <td style={{ border: '1px solid black', padding: '8px', backgroundColor: '#3E0023', color: '#FFFFFF' }}>400-500</td>
        </tr>
      </tbody>
    </table>
    </div>
                        {/* <ReactTable
                            data={data}
                            columns={columns}
                            defaultPageSize={7}
                            className="-striped -highlight"
                            showPaginationBottom={false}
                            getTrProps={this.getTrProps}
                        /> */}

                    
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

function mapStateToProps({ IndexApp }) {
    return {
        recentAQI: IndexApp.IndexReducer.recentAQI.aqi
    };
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(RecentAQI)
);
