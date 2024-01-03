import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const ServicesDetails = props => {
    // const [servicesDetails,setServicesDetails] = useState()
    const servicesDetails = useLoaderData();
    const {propertyTitle,propertyPrice,picture,propertyDetails} = servicesDetails;
    console.log(servicesDetails)
    const {id} = useParams();
    const idInt = parseInt(id)

    const serviceDetails = servicesDetails.find((serviceDetails)=>serviceDetails.id === idInt)

    console.log(serviceDetails);

    return (
        <div className='grid md:grid-cols md:col-span-12 lg:col-span-9 mt-16'>
            <div
            key={id}
            className="card w-[1000px] bg-base-100 shadow-xl mx-auto m-4"
          >
            <figure>
              <img src={serviceDetails.picture} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center">
                {serviceDetails.propertyTitle}
              </h2>
              <div className="card-actions justify-center">
                <button className="btn bg-green-500  text-white hover:bg-amber-400 ">
                  Package Price {serviceDetails.propertyPrice}$
                </button>
                <p>{serviceDetails.propertyDetails}</p>
                {/* <Link>
                  <button className="btn bg-amber-600 text-white hover:bg-amber-400 justify-end ml-[55px]">
                    Buy Now
                  </button>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
    );
};

ServicesDetails.propTypes = {
    
};

export default ServicesDetails;