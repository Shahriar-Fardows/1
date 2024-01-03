import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const PropertyNumbers = props => {
    const [property,setProperty] = useState([]);

    useEffect(()=>{
        fetch("/propertynumbers.json")
        .then(res=>res.json())
        .then(data=>setProperty(data))
    },[])
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-3 mt-14 gap-4'>
            {
                property.map(property=> <div key={property.id} className="card w-[400px] bg-base-100 shadow-xl mx-auto">
                <figure><img className='mt-20 w-[300px]' src={property.picture} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{property.cityName}</h2>
                  <p>{property.propertyNumbers} properties</p>
                </div>
              </div> )
            }
        </div>
    );
};

PropertyNumbers.propTypes = {
    
};

export default PropertyNumbers;