import React from 'react';
import PropTypes from 'prop-types';
import trusted from "../../assets/trusted.jpeg"

const TrustAgent = (props) => {
    return (
        <div className='mt-30 w-[70%] grid lg:grid-cols-2 md:grid-cols-2 justify-center mx-auto'>
            <div className='m-6'>
                <img src={trusted} alt="" />
            </div>
            <div className='bg-slate-200 m-6 rounded'>
                <h2 className='text-5xl mt-14 ml-10 font-semibold'>Trusted By Best <br /> Exclusive Agents</h2>
                <ul className='mt-[100px] ml-10'>
                    <li className='text-2xl font-semibold tracking-3 list-disc'>Find excellent deals</li>
                    <li className='text-2xl font-semibold tracking-3 list-disc'>Friendly host & Fast support</li>
                    <li className='text-2xl font-semibold tracking- list-disc'>List your own property</li>
                </ul>
            </div>
 
</div>
    );
};

TrustAgent.propTypes = {
    
};

export default TrustAgent;