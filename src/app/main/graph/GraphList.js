/** @format */
import React, { Component } from "react";
import { FuseAnimate } from "@fuse";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import ReactTable from "react-table";
import * as Actions from "./store/actions";

class GraphList extends Component {
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
        const { graphs, getGraphsPaginationData, totalPages } = this.props;
        let data = graphs;

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
                            className: 'justify-center font-bold'
                        },
                        {
                            Header: 'CO',
                            accessor: 'co',
                            filterable: false,
                            className: 'justify-center font-bold'
                        },
                        {
                            Header: 'Dust',
                            accessor: 'dust',
                            filterable: false,
                            className: 'justify-center font-bold'
                        },
                        {
                            Header: 'Humidity',
                            accessor: 'humidity',
                            filterable: false,
                            className: 'justify-center font-bold'
                        },
                        {
                            Header: 'NH3',
                            accessor: 'nh3',
                            filterable: false,
                            className: 'justify-center font-bold'
                        },
                        {
                            Header: 'NO2',
                            accessor: 'no2',
                            filterable: false,
                            className: 'justify-center font-bold'
                        },
                        {
                            Header: 'CO2',
                            accessor: 'co2',
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
                    noDataText="No graph found"
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
                        getGraphsPaginationData(
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
            getGraphsPaginationData: Actions.getGraphsPaginationData
        },
        dispatch
    );
}

function mapStateToProps({ GraphApp }) {
    return {
        graphs: GraphApp.GraphReducer.entities,
        totalPages: GraphApp.GraphReducer.pages,
    };
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(GraphList)
);
