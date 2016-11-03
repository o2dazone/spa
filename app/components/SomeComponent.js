import React from 'react';

const SomeComponent = ({ onLinkClicked }) => {
  return (
    <a href="#" onClick={onLinkClicked}>Change state</a>
  );
};

export default SomeComponent;
