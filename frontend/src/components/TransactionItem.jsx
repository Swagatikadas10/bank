import React from 'react';

const TransactionItem = ({ transaction }) => {
  const { _id, sender, receiver, amount, timestamp } = transaction;

  const renderUserDetails = (user) => {
    if (user) {
      return (
        <>
          {user.firstName} {user.lastName} (Account No: {user.accountNumber})
        </>
      );
    } else {
      return 'Unknown User';
    }
  };

  return (
    <div className='bg-white rounded-md p-4 shadow-md'>
      <h2 className='text-lg font-semibold mb-2'>Transaction ID: {_id}</h2>
      <div className='mb-2'>
        <strong>Sender:</strong> {renderUserDetails(sender)}
      </div>
      <div className='mb-2'>
        <strong>Receiver:</strong> {renderUserDetails(receiver)}
      </div>
      <div className='mb-2'>
        <strong>Amount:</strong> {amount} RS
      </div>
      <div className='mb-2'>
        <strong>Timestamp:</strong> {new Date(timestamp).toLocaleString()}
      </div>
    </div>
  );
};

export default TransactionItem;
