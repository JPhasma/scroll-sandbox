import React from 'react';

function Hero({ subtitle }) {
  return (
    <div className='hero_header'>
      <h4>{subtitle}</h4>
      <h1>Jane Doe</h1>
      <h2>Fronted Dev (moving to Fullstack)</h2>
    </div>
  );
}

export default Hero;
