import React from "react";
import PropTypes from "prop-types";
import industry from "../../assets/industry.jpg";

const IndustrialDetails = (props) => {
  return (
    <div className="grid md:grid-cols md:col-span-9 lg:col-span-9">
      <div className="card w-[1000px] bg-base-100 shadow-xl mx-auto m-4">
        <figure>
          <img className="m-10" src={industry} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Industrial Property</h2>
          <p>
            Industrial real estate is one of three primary categories in the
            commercial property market. Of the three asset classes, industrial
            properties are the most versatile and specialist of all. Anybody
            interested in real estate investment with a twist should learn more
            about the possible opportunities the industrial world has to
            offer.To summarize, industrial real estate is the business of
            providing properties for non-public commercial use.
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

IndustrialDetails.propTypes = {};

export default IndustrialDetails;
