import React from 'react';

const CustomerCard = ({ name, email, location, feedback }) => {
  return (
    <div className='bg-white p-6 rounded shadow-md border border-gray-300'>
      <div className='mb-4'>
        <h3 className='text-xl font-bold mb-2'>{name}</h3>
        <p className='text-gray-600'>{email}</p>
        <p className='text-gray-600'>{location}</p>
      </div>
      <div>
        <h4 className='text-lg font-semibold mb-2'>Feedback:</h4>
        <p className='text-gray-600'>{feedback}</p>
      </div>
    </div>
  );
};

export default CustomerCard;
