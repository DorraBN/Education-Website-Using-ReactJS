import React from 'react';
const blog = () => {
  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}><a href="/">Accueil</a></li>
        <li style={liStyle}><a href="/a-propos">À propos</a></li>
        <li style={liStyle}><a href="/services">Services</a></li>
        <li style={liStyle}><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

const navStyle = {
  background: '#333',
  color: '#fff',
  padding: '10px 0',
};

const ulStyle = {
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'center',
};

const liStyle = {
  margin: '0 10px',
};


export default blog
