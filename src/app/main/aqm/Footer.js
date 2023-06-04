import React from 'react';

const Footer = ({ color }) => {
  const footerColor = color || "#004879"; // Default color if no color prop is provided

  return (
    <footer>
<div className="site-footer" style={{ backgroundColor: footerColor }}>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-8 col-xs-12">
              <a href="https://iotlab.seecs.nust.edu.pk/"><p style={{color: 'white'}}>Copyright &copy; 2023 Internet of Things Lab (IoT), NUST-SEECS</p></a>
              </div> {/* /.col-md-6 */}
              <div className="col-md-4 col-sm-4 col-xs-12">
                
              </div> {/* /.col-md-6 */}
            </div> {/* /.row */}
          </div> {/* /.container */}
        </div> {/* /.site-footer */}
    </footer>
  );
};

export default Footer;
