import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Services = (props) => {
  const [services, setServices] = useState([]);
  const [dataLength, setDataLength] = useState(3);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <h2 className="text-4xl text-center mt-20 font-semibold">
        Explore Our Services
      </h2>

      <div className="grid lg:grid-cols-3 md:grid-cols-3 mt-20">
        {services.map((service) => (
          <div
            key={service.id}
            className="card w-96 bg-base-100 shadow-xl mx-auto m-4"
          >
            <figure>
              <img src={service.picture} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center">
                {service.propertyTitle}
              </h2>
              <div className="card-actions">
                <button className="btn bg-green-500 text-white hover:bg-amber-400 justify-start">
                  Package Price {service.propertyPrice}$
                </button>
                <Link to={`/services/${service.id}`}>
                  <button className="btn bg-green-500 text-white hover:bg-amber-400 justify-end ml-[55px]">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Services.propTypes = {};

export default Services;
