import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
// import logo from '%PUBLIC_URL%naqm.png'; // import the image file

const Header = () => {
  return (
    <header style={{paddingBottom: "10px"}}>
      <div>
                <head>

          <link href='http://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,400,300,600,700,800' rel='stylesheet' type='text/css' />
    <link href='http://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic' rel='stylesheet' type='text/css' />
    <link href="bootstrap/css/bootstrap.css" rel="stylesheet" media="screen" />
    <link rel="stylesheet" href="css/font-awesome.min.css" />
    <link rel="stylesheet" href="css/templatemo-misc.css" />
    <link rel="stylesheet" href="css/animate.css" />
    <link rel="stylesheet" href="css/templatemo-main.css"></link>
    <link rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
      crossorigin="anonymous"/>
        </head>
        <div className="site-header">
          <div className="top-header">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-sm-6">
                  <div className="left-header">
                    <span><i className="fa fa-phone" />051-90852161</span>
                    <span><i className="fa fa-envelope" />iotlab@seecs.edu.pk</span>
                  </div> {/* /.left-header */}
                </div> {/* /.col-md-6 */}
                <div className="col-md-6 col-sm-6">
                  <div className="right-header text-right">
                    <ul className="social-icons">
                      <li><a href="https://www.linkedin.com/in/rafia-mumtaz-6817b535/" className="fa fa-linkedin" /></li>
                      <li><a href="https://scholar.google.com/citations?user=i6qLmkkAAAAJ&hl=en&oi=ao" className="fa fa-google-plus" /></li>
                      <li><a href="https://twitter.com/RafiaMumtaz4" className="fa fa-twitter" /></li>
                    </ul>
                  </div> {/* /.left-header */}
                </div> {/* /.col-md-6 */}
              </div> {/* /.row */}
            </div> {/* /.container */}
          </div> {/* /.top-header */}
          <div className="main-header">
            <div className="container">
              <div className="row">
                <div className="col-md-1 col-sm-1 col-xs-6">
                    <a href="index.html" title="Dreri"><img src={process.env.PUBLIC_URL + '/naqm.png'} height="60px" alt="" /></a>
                </div> {/* /.col-md-4 */}
                <div className="col-md-11 col-sm-11 col-xs-6">
                  <div className="menu text-right hidden-sm hidden-xs">
                    <ul>
                      <li><a href="/index">Home</a></li>
                      <li><a href="/airdashboard">AQI</a></li>
                      <li><a href="/air">Data</a></li>
                      <li><a href="/graph">Graph</a></li>
                      </ul>
                  </div> {/* /.menu */}
                </div> {/* /.col-md-8 */}
              </div> {/* /.row */}
              
              
            </div> {/* /.container */}
          </div> {/* /.header */}
        </div> {/* /.site-header */}
        </div>
        
    </header>
  );
};

export default Header;
