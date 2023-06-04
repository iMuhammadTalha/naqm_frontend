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

const farmBotColor='#6aa84f'

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
        <img src={process.env.PUBLIC_URL + '/farmbot/crop.png'} alt="Image 1" height={400} style={{ width: '100%', margin: '0 auto' }}/>
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
                  <i className="fa fa-umbrella" style={{color: '#6aa84f'}}></i>
                  <h3>Project Discussion</h3>
                </div>
                <div className="service-description" style={{ textAlign: "justify" }}>
                Precision agriculture utilizes technology to efficiently manage crops. A multimodal approach combining machine vision, spectral imagery, and IoT enables autonomous farm management. RGB and hyper-spectral cameras capture multi-temporal images, allowing for vegetation index calculation, plant health prediction, and yield estimation. Soil sensors enhance data fusion, revolutionizing agriculture for long-term sustainability.
                </div>
              </div>
            </div>
  
            <div className="col-md-4 col-sm-6">
              <div className="service-item">
                <div className="service-header">
                  <i className="fa fa-eye" style={{color: '#6aa84f'}}></i>
                  <h3>Outcome</h3>
                </div>
                <div className="service-description" style={{ textAlign: "justify" }}>
                Develop a multimodal precision agriculture system integrating machine vision, spectral imagery, and IoT technologies. Capture multi-temporal images to calculate vegetation indices, predict plant health, and estimate yield. Soil sensor integration enables comprehensive analysis, revolutionizing agriculture for long-term sustainability.
                </div>
              </div>
            </div>
  
            <div className="col-md-4 col-sm-6">
              <div className="service-item">
                <div className="service-header">
                  <i className="fa fa-bullseye" style={{color: '#6aa84f'}}></i>
                  <h3>Benefits</h3>
                </div>
                <div className="service-description" style={{ textAlign: "justify" }}>
  <ul>
    <li>
      Increased Efficiency: Technology-driven precision agriculture optimizes resource allocation, improves decision-making, and enhances crop management efficiency.
    </li>
    <li>
      Sustainable Farming: By accurately assessing plant health and soil quality, the system promotes sustainable practices, minimizing environmental impact and reducing input waste.
    </li>
    <li>
      Improved Yield: Predictive capabilities enable early issue detection, enabling timely interventions and maximizing crop yield and profitability.
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
            <span style={{background: '#6aa84f'}}></span>
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
                <input className="mainBtn" type="submit" name="" value="Send Message"  style={{background: '#6aa84f'}}/>
              </div>
            </div>
            <div className="col-md-5 col-sm-6">
              <h4 className="widget-title">Our location</h4>
              <div className="contact-info">
                <span>
                  <i className="fa fa-home" style={{color: '#6aa84f'}}></i>IoT Lab, SEECS, NUST H-12, Islamabad, Pakistan
                </span>
                <span>
                  <i className="fa fa-phone" style={{color: '#6aa84f'}}></i>051-90852161
                </span>
                <span>
                  <i className="fa fa-envelope" style={{color: '#6aa84f'}}></i>rafia.mumtaz@seecs.edu.pk
                </span>
                <span>
                  <i className="fa fa-envelope" style={{color: '#6aa84f'}}></i>iotlab@seecs.edu.pk
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

<Footer  color="#6aa84f" />
      </div>      
        );
    }
}

export default withStyles(styles, {withTheme: true})(withRouter(Index));
