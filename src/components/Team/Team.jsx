import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Team = props => {
    const [team,setTeam] = useState([]);

    useEffect(()=>{
        fetch("/team.json")
        .then(res=>res.json())
        .then(data=>setTeam(data))
    },[])
    return (
        <div className='mb-30'>
            <h2 className='text-4xl text-center mt-28'>Our Expert Team Members</h2>

            <div className='grid lg:grid-cols-3 md:grid-cols-3 mt-20'>
            {
                team.map(team=><div key={team.id} className="card w-96 bg-base-100 shadow-xl m-4 mx-auto">
                <figure><img className='w-[70%]' src={team.picture} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title justify-center">{team.name}</h2>
                  <p className='text-center'>{team.post}</p>
                </div>
              </div>)
            }
            </div>

        </div>
    );
};

Team.propTypes = {
    
};

export default Team;