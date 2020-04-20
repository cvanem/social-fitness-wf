import React from 'react';

function Logo(props) {
  return (
    <img
      alt="Logo"
      src="/static/images/logo.png"
      style={{ height: 48 }}
      {...props}
    />
  );
}

export default Logo;
