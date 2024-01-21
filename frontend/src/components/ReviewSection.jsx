// components/ReviewSection.js
import React from 'react';

const reviews = [
  {
    id: 1,
    title: 'Customer Review 1',
    content: 'Positive feedback about our services.',
  },
  {
    id: 2,
    title: 'Customer Review 2',
    content: 'Another satisfied customer sharing their experience.',
  },
  // Add more reviews as needed
];

const ReviewSection = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
      {reviews.map((review) => (
        <div key={review.id} className='bg-white p-6 rounded shadow-md'>
          <h3 className='text-lg font-semibold mb-2'>{review.title}</h3>
          <p className='text-gray-600'>{review.content}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
