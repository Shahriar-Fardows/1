import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import industry from "../../assets/industry.jpg"

const IndustrialProperty = props => {
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={industry} className=" shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Industrial Property</h1>
      <p className="py-6">Industrial real estate is one of three primary categories in the commercial property market. Of the three asset classes, industrial properties are the most versatile and specialist of all. Anybody interested in real estate investment with a twist should learn more about the possible opportunities the industrial world has to offer.</p>
      <Link to="/industrialDetails"><button className="btn bg-green-500 text-white">Read More</button></Link>
    </div>
  </div>
</div>
    );
};

IndustrialProperty.propTypes = {
    
};

export default IndustrialProperty;



