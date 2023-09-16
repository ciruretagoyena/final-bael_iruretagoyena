import React from 'react';

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '20px 0',
};

const imgStyle = {
  width: '150px',
  marginTop: '10px',
};

const textStyles = {
  margin: '0',
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p style={textStyles}>Powered by</p>
      <img src="./images/DH.png" alt="Your Company Logo" style={imgStyle} />
    </footer>
  );
};

export default Footer;
