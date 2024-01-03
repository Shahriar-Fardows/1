import React from 'react';
import PropTypes from 'prop-types';

const Contact = props => {
    return (
        <div className='grid md:grid-cols md:col-span-9 lg:col-span-9 m-28'>
            <h2 className='text-4xl mb-10'>Contact New Arizona Real Estate LTD - Your Path to Exceptional Real Estate Services</h2><p>
            At New Arizona Real Estate LTD, we value the opportunity to connect with you and provide personalized assistance for all your real estate needs. Whether you're interested in buying, selling, or investing in properties, or if you simply have questions about the real estate market, our dedicated team is here to help.
            </p>
            <h2 className='text-3xl'>Contact Information</h2>
            <p>Street Address:40/2,New Arizona,USA.</p>
            <p>State:California,ZIP Code:89902782</p>
            <p>Email US: newarizonarealstate@mail.com</p>
            <p>Phone:+9908-6373267777</p>
        </div>
    );
};

Contact.propTypes = {
    
};

export default Contact;