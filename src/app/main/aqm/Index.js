import React, {Component} from 'react';
import {Card, CardContent, Tab, Tabs, Typography, withStyles} from '@material-ui/core';
import {darken} from '@material-ui/core/styles/colorManipulator';
import {FuseAnimate} from '@fuse';
import {withRouter} from 'react-router-dom';
import classNames from 'classnames';
import FarmBotHeader from "./Header";
import Footer from './Footer';
import { FuseAnimateGroup } from "@fuse";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'

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

const farmBotColor='#008080'

const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: 37.7749, // Latitude of the location
    lng: -122.4194, // Longitude of the location
  };

  const ImageSlider = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000
    
    };
  
    return (
      <Slider {...settings}>
        <div style={{ textAlign: 'center' }}>
        <img src={process.env.PUBLIC_URL + '/aqm/air.png'} alt="Image 1" height={400} style={{ margin: '0 auto' }}/>
        </div>
        <div style={{ textAlign: 'center' }}>
        <img src={process.env.PUBLIC_URL + '/aqm/air.webp'} alt="Image 1" height={400} style={{ width: '100%', margin: '0 auto' }}/>
        </div>
        <div style={{ textAlign: 'center' }}>
        <img src={process.env.PUBLIC_URL + '/aqm/airnode.webp'} alt="Image 1" height={400} style={{ width: '100%', margin: '0 auto' }}/>
        </div>
      </Slider>
    );
  };
  
  const ServicesSection = () => {
    return (
      <div id="services" className="section-cotent">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="service-item">
                <div className="service-header">
                  <i className="fa fa-umbrella" style={{color: '#008080'}}></i>
                  <h3>Project Discussion</h3>
                </div>
                <div className="service-description" style={{ textAlign: "justify" }}>
                An IoT-based solution is developed to monitor air contaminants such as PM2.5, Carbon dioxide, Carbon monoxide, Nitrogen dioxide, and Methane. This system provides real-time reporting of air quality status to a web portal and generates alerts accordingly. It goes beyond classifying indoor air quality.
</div>
              </div>
            </div>
  
            <div className="col-md-4 col-sm-6">
              <div className="service-item">
                <div className="service-header">
                  <i className="fa fa-eye" style={{color: '#008080'}}></i>
                  <h3>Outcome</h3>
                </div>
                <div className="service-description" style={{ textAlign: "justify" }}>
                Develop an IoT-based solution to monitor air contaminants like PM2.5, Carbon dioxide, Carbon monoxide, Nitrogen dioxide, and Methane. The system reports air quality status in real-time to a web portal and generates alerts. Additionally, it classifies indoor air quality and provides competitive accuracy in projecting future instances, facilitating informed decision-making for maintaining a healthier and safer environment.
</div>
              </div>
            </div>
  
            <div className="col-md-4 col-sm-6">
              <div className="service-item">
                <div className="service-header">
                  <i className="fa fa-bullseye" style={{color: '#008080'}}></i>
                  <h3>Benefits</h3>
                </div>
                <div className="service-description" style={{ textAlign: "justify" }}>
  <ul>
    <li>
    Improved Air Quality Monitoring: The IoT solution enables continuous monitoring of various air contaminants, allowing for proactive measures to maintain healthier and safer indoor environments.
    </li>
    <li>
    Real-time Reporting and Alerts: By reporting air quality status in real-time and generating alerts, the system enables timely actions to mitigate potential health risks and maintain optimal air quality conditions.
    </li>
    <li>
    Accurate Future Projection: The system's ability to accurately project future instances of air quality provides valuable insights for effective planning and decision-making.
    </li>
  </ul>
</div>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  
  const ContactSection = () => {
    return (
      <div id="contact" className="section-cotent">
        <div className="container">
          <div className="title-section text-center">
            <h2>Contact Us</h2>
            <span style={{background: '#008080'}}></span>
          </div>
          <div className="row">
            <div className="col-md-7 col-sm-6">
              <h4 className="widget-title">Send a message to us</h4>
              <div className="contact-form">
                <p className="full-row">
                  <label htmlFor="name-id">Your Name:</label>
                  <input type="text" id="name-id" name="name-id" />
                </p>
                <p className="full-row">
                  <label htmlFor="email-id">Email:</label>
                  <input type="text" id="email-id" name="email-id" />
                </p>
                <p className="full-row">
                  <label htmlFor="subject-id">Subject:</label>
                  <input type="text" id="subject-id" name="subject-id" />
                </p>
                <p className="full-row">
                  <label htmlFor="message">Message:</label>
                  <textarea name="message" id="message" rows="6"></textarea>
                </p>
                <input className="mainBtn" type="submit" name="" value="Send Message"  style={{background: '#008080'}}/>
              </div>
            </div>
            <div className="col-md-5 col-sm-6">
              <h4 className="widget-title">Our location</h4>
              <div className="contact-info">
                <span>
                  <i className="fa fa-home" style={{color: '#008080'}}></i>IoT Lab, SEECS, NUST H-12, Islamabad, Pakistan
                </span>
                <span>
                  <i className="fa fa-phone" style={{color: '#008080'}}></i>051-90852161
                </span>
                <span>
                  <i className="fa fa-envelope" style={{color: '#008080'}}></i>rafia.mumtaz@seecs.edu.pk
                </span>
                <span>
                  <i className="fa fa-envelope" style={{color: '#008080'}}></i>iotlab@seecs.edu.pk
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
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
                <FarmBotHeader />
            
                <ImageSlider />
      <ServicesSection />
      <ContactSection />

<Footer  color="#008080" />
      </div>      
        );
    }
}

export default withStyles(styles, {withTheme: true})(withRouter(Index));
