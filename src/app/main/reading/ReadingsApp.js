import React, {Component} from 'react';
import {Fab, Icon, withStyles} from '@material-ui/core';
import {FuseAnimate, FusePageSimple} from '@fuse';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import withReducer from 'app/store/withReducer';
import _ from '@lodash';
import ReadingsList from './ReadingsList';
import ReadingsHeader from './ReadingsHeader';
import ReadingDialog from './ReadingsDialog';
import * as Actions from './store/actions';
import reducer from './store/reducers';
import './style.css';
// import { StickyContainer, Sticky } from 'react-sticky';
const styles = theme => ({
    addButton: {
        position: 'fixed',
        right: 12,
        bottom: 12,
        zIndex: 99
    }
});

class ReadingsApp extends Component {
    componentDidMount() {
        this.props.getReadings(this.props.match.params);
    }

    componentDidUpdate(prevProps, prevState) {
        if (!_.isEqual(this.props.location, prevProps.location)) {
            this.props.getReadings(this.props.match.params);
        }
    }

    render() {
        const {classes, openNewReadingDialog} = this.props;
        if (!localStorage.getItem('jwtToken')) {
            window.location = '/login';
        }
        return (
            <React.Fragment>
                <FusePageSimple
                    classes={{
                        contentCardWrapper: 'p-16 sm:p-24 pb-80',
                        leftSidebar: 'w-256 border-0',
                        header: 'min-h-72 h-72 sm:h-136 sm:min-h-136'
                    }}
                    header={<ReadingsHeader pageLayout={() => this.pageLayout}/>}
                    content={<ReadingsList/>}
                    sidebarInner
                    onRef={instance => {
                        this.pageLayout = instance;
                    }}
                    innerScroll
                />
                {/* <FuseAnimate animation="transition.expandIn" delay={300}>
                    <Fab
                        color="primary"
                        aria-label="add"
                        className={classes.addButton}
                        onClick={openNewReadingDialog}
                    >
                        <Icon>add</Icon>
                    </Fab>
                </FuseAnimate> */}
                <ReadingDialog/>
            </React.Fragment>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            getReadings: Actions.getReadings,
            openNewReadingDialog: Actions.openNewReadingDialog
        },
        dispatch
    );
}

function mapStateToProps({readingsApp}) {
    return {
        // readings: readingsApp.readings.entities,
        selectedReadingIds: readingsApp.readings.selectedReadingIds,
        searchText: readingsApp.readings.searchText,
        user: readingsApp.user
    };
}

export default withReducer('readingsApp', reducer)(
    withStyles(styles, {withTheme: true})(
        withRouter(
            connect(
                mapStateToProps,
                mapDispatchToProps
            )(ReadingsApp)
        )
    )
);
