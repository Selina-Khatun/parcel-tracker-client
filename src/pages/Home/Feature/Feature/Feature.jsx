
import React from 'react';

const Feature = ({ heading, description, icon }) => {
    return (
        <div className="card bg-sky-50 ">
            <div className="card-body items-center text-center">
                <span className='text-4xl text-black font-bold'>{icon}</span>
                <div className="card-actions text-black justify-center">
                    <h2 className="card-title font-bold text-xl">{heading}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Feature;