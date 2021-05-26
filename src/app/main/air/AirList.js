/** @format */
import React, { Component } from "react";
import { FuseAnimate } from "@fuse";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import ReactTable from "react-table";
import * as Actions from "./store/actions";
import "react-table/react-table.css";

class AirList extends Component {
    state = {
        page: 0,
        pageSize: 20,
        sorted: [
            {
                id: "id",
                desc: true
            }
        ]
    };

    render() {
        const { airs, getAirsPaginationData, totalPages } = this.props;
        let data = airs;

        if (!Array.isArray(data)) {
            data=[]
        }

        return (
            <FuseAnimate animation="transition.slideUpIn" delay={300}>
                <ReactTable
                    className="-striped -highlight border-0"
                    data={data}
                    columns={[
                        // {
                        //     Header: 'ID',
                        //     accessor: 'id',
                        //     filterable: false,
                        //     className: 'justify-center font-bold'
                        // },
                        {
                            Header: 'Time',
                            accessor: 'created_time',
                            id: 'created_time',
                            width: 150,
                            // accessor: d => {
                            //     return moment(d.created_time)
                            //         // .local()
                            //         .format("DD-MM-YYYY hh:mm:ss")
                            // },
                            filterable: false,
                            className: 'justify-center font-bold'
                        },
                        {
                            Header: 'CH4',
                            accessor: 'ch4',
                            filterable: false,
                            className: 'justify-center font-bold',

                            getProps: (state, rowInfo) => {
                                if (rowInfo && rowInfo.row) {
                                  return {
                                    style: {
                                      background:
                                        rowInfo.row.ch4 < 50 ? "#3CCB47" : rowInfo.row.ch4 < 150 ? "#f1c40f": rowInfo.row.ch4 > 150 ? "#e67e22" : null
                                    }
                                  };
                                } else {
                                  return {};
                                }
                              },
                        },
                        {
                            Header: 'CO',
                            accessor: 'co',
                            filterable: false,
                            className: 'justify-center font-bold',
                            getProps: (state, rowInfo) => {
                                if (rowInfo && rowInfo.row) {
                                  return {
                                    style: {
                                      background:
                                        rowInfo.row.co < 4.4 ? "#3CCB47" : rowInfo.row.co < 6 ? "#f1c40f": rowInfo.row.co > 6 ? "#e67e22" : null
                                    }
                                  };
                                } else {
                                  return {};
                                }
                              },
                        },
                        {
                            Header: 'Dust',
                            accessor: 'dust',
                            filterable: false,
                            className: 'justify-center font-bold',
                            getProps: (state, rowInfo) => {
                                if (rowInfo && rowInfo.row) {
                                  return {
                                    style: {
                                      background:
                                        rowInfo.row.dust < 12 ? "#3CCB47" : rowInfo.row.dust < 55.4 ? "#f1c40f": rowInfo.row.dust > 55.4 ? "#e67e22" : null
                                    }
                                  };
                                } else {
                                  return {};
                                }
                              },
                        },
                        
                        {
                            Header: 'NH3',
                            accessor: 'nh3',
                            filterable: false,
                            className: 'justify-center font-bold',
                            getProps: (state, rowInfo) => {
                                if (rowInfo && rowInfo.row) {
                                  return {
                                    style: {
                                      background:
                                        rowInfo.row.nh3 < 200 ? "#3CCB47" : rowInfo.row.nh3 < 800 ? "#f1c40f": rowInfo.row.nh3 > 800 ? "#e67e22" : null
                                    }
                                  };
                                } else {
                                  return {};
                                }
                              },
                        },
                        {
                            Header: 'NO2',
                            accessor: 'no2',
                            filterable: false,
                            className: 'justify-center font-bold',
                            getProps: (state, rowInfo) => {
                                if (rowInfo && rowInfo.row) {
                                  return {
                                    style: {
                                      background:
                                        rowInfo.row.no2 < 0.053 ? "#3CCB47" : rowInfo.row.no2 < 0.36 ? "#f1c40f": rowInfo.row.no2 > 0.36 ? "#e67e22" : null
                                    }
                                  };
                                } else {
                                  return {};
                                }
                              },
                        },
                        {
                            Header: 'CO2',
                            accessor: 'co2',
                            filterable: false,
                            className: 'justify-center font-bold',
                            getProps: (state, rowInfo) => {
                                if (rowInfo && rowInfo.row) {
                                  return {
                                    style: {
                                      background:
                                        rowInfo.row.co2 < 1000 ? "#3CCB47" : rowInfo.row.co2 < 50000 ? "#f1c40f": rowInfo.row.co2 > 50000 ? "#e67e22" : null
                                    }
                                  };
                                } else {
                                  return {};
                                }
                              },
                        },
                        {
                            Header: 'Humidity',
                            accessor: 'humidity',
                            filterable: false,
                            className: 'justify-center font-bold'
                        },
                        {
                            Header: 'Temperature',
                            accessor: 'temperature',
                            filterable: false,
                            className: 'justify-center font-bold'
                        },
                        {
                            Header: 'Node',
                            accessor: 'node_id',
                            filterable: false,
                            className: 'justify-center font-bold'
                        }
                    ]}
                    defaultPageSize={20}
                    resizable={true}
                    noDataText="No air found"
                    showPagination={true}
                    showPaginationTop={false}
                    showPaginationBottom={true}
                    pages={totalPages}
                    pageSizeOptions={[20, 25, 50, 100]}
                    pageSize={this.state.pageSize}
                    page={this.state.page}
                    sorted={this.state.sorted}
                    onPageChange={(page) => this.setState({ page: page })}
                    onPageSizeChange={(pageSize, page) => {
                        this.setState({ pageSize: pageSize, page: page });
                    }}
                    onSortedChange={(val) => {
                        this.setState({ sorted: val });
                    }}
                    manual
                    onFetchData={(state, instance) => {
                        getAirsPaginationData(
                            state.page,
                            state.pageSize,
                            state.sorted
                        );
                    }}
                />
            </FuseAnimate>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            getAirsPaginationData: Actions.getAirsPaginationData
        },
        dispatch
    );
}

function mapStateToProps({ AirApp }) {
    return {
        airs: AirApp.AirReducer.entities,
        totalPages: AirApp.AirReducer.pages,
    };
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(AirList)
);
