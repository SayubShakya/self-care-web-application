// src/components/ContentWrapper.jsx
import React from 'react';

const ContentWrapper = ({ children }) => {
  return (
    <div style={{ paddingTop: ' /* Specify a value */px' }}>
      {children}
    </div>
  );
};

export default ContentWrapper;