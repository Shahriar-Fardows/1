import React from "react";
import PropTypes from "prop-types";
import Banner from "../Banner/Banner";
import PropertyNumbers from "../PropertyNumbers/PropertyNumbers";
import Services from "../Services/Services";
import Team from "../Team/Team";
import TrustAgent from "../TrustAgent/TrustAgent";
import IndustrialProperty from "../IndustrialProperty/IndustrialProperty";
const Home = (props) => {

  return (
    <div>
      <Banner></Banner>
      <PropertyNumbers></PropertyNumbers>
      <Services></Services>
      <IndustrialProperty></IndustrialProperty>
      <Team></Team>
      <TrustAgent></TrustAgent>
    </div>
  );
};

Home.propTypes = {};

export default Home;
