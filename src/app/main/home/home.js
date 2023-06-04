import React, {Component} from 'react';
import {Card, CardContent, Tab, Tabs, Typography, withStyles} from '@material-ui/core';
import {darken} from '@material-ui/core/styles/colorManipulator';
import {FuseAnimate} from '@fuse';
import {withRouter} from 'react-router-dom';
import classNames from 'classnames';

const styles = theme => ({
    root: {
        background:'#fffff',
        color: 'black'
    }
});

class Home extends Component {
    state = {
        tabValue: 0
    };

    handleTabChange = (event, value) => {
        this.setState({tabValue: value});
    };

    render() {
        const {classes} = this.props;

        return (
            <div className={classNames(classes.root, 'flex flex-col flex-1 flex-no-shrink p-24 md:flex-row md:p-0')} style={{ justifyContent: 'center', alignItems: 'center' }}>
  <div className="flex flex-col flex-no-grow items-center text-white p-16 text-center md:p-128 md:items-center md:flex-no-shrink md:flex-1 md:text-center">
    <FuseAnimate animation="transition.expandIn">
    <a href="https://iotlab.seecs.nust.edu.pk/">
      <img className="w-128 mb-32" src="lab.png" href="https://iotlab.seecs.nust.edu.pk/" alt="logo" />
      </a>
    </FuseAnimate>
    <FuseAnimate animation="transition.slideUpIn" delay={300}>
      <Typography variant="h3" color="black" className="font-light">
        Welcome to the IoT Lab Projects!
      </Typography>
    </FuseAnimate>
    <div className="flex justify-between mt-32">
  <FuseAnimate delay={400}>
  <a href="/naqm">
    <img className="w-128 mr-16" src="aqm/aqm.png" href="\naqm" alt="logo" />
    </a>
  </FuseAnimate>
  <FuseAnimate delay={400}>
  <a href="/farmbot">
    <img className="w-128 mx-16" src="farmbot/farmbot.png" href="\farmbot" alt="logo" />
    </a>
  </FuseAnimate>
  <FuseAnimate delay={400}>
  <a href="/livestock">
    <img className="w-128 ml-16" src="livestock/livestock.png" href="\livestock" alt="logo" />
    </a>
  </FuseAnimate>
</div>

  </div>
</div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(withRouter(Home));
