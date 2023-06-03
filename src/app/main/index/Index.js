import React, {Component} from 'react';
import {Card, CardContent, Tab, Tabs, Typography, withStyles} from '@material-ui/core';
import {darken} from '@material-ui/core/styles/colorManipulator';
import {FuseAnimate} from '@fuse';
import {withRouter} from 'react-router-dom';
import classNames from 'classnames';
import Header from './Header';
import Footer from './Footer';
import { FuseAnimateGroup } from "@fuse";

import RecentAQI from "./RecentAQI"
import CH4 from "./CH4";
import NO2 from "./NO2";
import NH3 from "./NH3"
import CO from "./CO"
import CO2 from "./CO2"
import Dust from "./dust"
import Humidity from "./humidity";
import Temperature from "./temperature"
import Legend from "./legend";
// import { GoogleMap, Marker } from 'react-google-maps';

import AirList from "./AirList"
import GraphList from "./GraphList"

const styles = theme => ({
    root: {
        background:
            'linear-gradient(to right, ' +
            theme.palette.primary.dark +
            ' 0%, ' +
            darken(theme.palette.primary.dark, 0.5) +
            ' 100%)',
        color: theme.palette.primary.contrastText
    }
});

const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: 37.7749, // Latitude of the location
    lng: -122.4194, // Longitude of the location
  };


class Index extends Component {
    state = {
        tabValue: 0
    };

    handleTabChange = (event, value) => {
        this.setState({tabValue: value});
    };

    render() {
        const {classes} = this.props;
        const {tabValue} = this.state;

        return (
            <div>
                <Header />
            
            <div className="w-full p-1">

            <div className="flex flex-wrap flex-row">
    {/* <div className="widget flex w-full sm:w-1/2 md:w-1/6 p-12">
        <Temperature />
    </div> */}
    <div className="widget flex w-full sm:w-1/2 md:w-1/6 p-1">
        <CH4 />
    </div>
    <div className="widget flex w-full sm:w-1/2 md:w-1/6 p-1">
        <NO2 />
    </div>
    <div className="widget flex w-full sm:w-1/2 md:w-1/6 p-1">
        <NH3 />
    </div>
    <div className="widget flex w-full sm:w-1/2 md:w-1/6 p-1">
        <CO />
    </div>
    <div className="widget flex w-full sm:w-1/2 md:w-1/6 p-1">
        <CO2 />
    </div>
    <div className="widget flex w-full sm:w-1/2 md:w-1/6 p-1">
        <Dust />
    </div>
    {/* <div className="widget flex w-full sm:w-1/2 md:w-1/6 p-12">
        <Humidity />
    </div>         */}
    </div>

    <div className="flex flex-wrap mb-16">
        <div className="widget w-full p-1">
            <RecentAQI />
        </div>
    </div>

    {/* <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={center}
      zoom={10}
    >
      <Marker position={center} />
    </GoogleMap> */}
    

    <div className="flex flex-wrap mb-16">
  <div className="w-full md:w-1/2 p-1">
    <div className="widget">
      <AirList />
    </div>
  </div>
  <div className="w-full md:w-1/2 p-1">
    <div className="widget">
      <GraphList />
    </div>
  </div>
</div>


    


    {/* <div className="flex flex-wrap mb-16">
        <div className="widget flex w-full sm:w-1/2 md:w-2/4 p-12">
            <Temperature />
        </div>
        <div className="widget flex w-full sm:w-1/2 md:w-2/4 p-12">
            <Humidity />
        </div>
    </div> */}

    <div className="flex flex-wrap">
        <div className="widget w-full p-16">
            <Legend />
        </div>
    </div>
</div>

<Footer />
      </div>      
        );
    }
}

export default withStyles(styles, {withTheme: true})(withRouter(Index));
