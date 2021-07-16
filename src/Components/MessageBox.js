import React from 'react';

const MessageBox = ({ message, type, inverted, hover }) => {
  return (
    <div className="error-box">
      <span
        className={`error-title ${type ? type : 'default'} ${
          inverted ? 'invert' : ''
        } ${hover ? 'hover' : ''}`}
      >
        {message ? message : 'ERROR : Something Went Wrong'}
      </span>
    </div>
  );
};

export default MessageBox;
