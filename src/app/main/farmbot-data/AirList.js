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
                            Header: 'Nitrogen',
                            accessor: 'nitrogen',
                            filterable: false,
                            className: 'justify-center font-bold',
                        },
                        {
                            Header: 'Phosphorus',
                            accessor: 'phosphorus',
                            filterable: false,
                            className: 'justify-center font-bold',
                        },
                        {
                            Header: 'Potassium',
                            accessor: 'potassium',
                            filterable: false,
                            className: 'justify-center font-bold',
                        },
                        {
                            Header: 'Soil Moisture',
                            accessor: 'soil_moisture',
                            filterable: false,
                            className: 'justify-center font-bold',
                        }
                    ]}
                    defaultPageSize={20}
                    resizable={true}
                    noDataText="No data found"
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
