import React from 'react';

function Hero({ subtitle }) {
  return (
    <div className='hero_header'>
      <h4>{subtitle}</h4>
      <h1>Jane's been busy...</h1>
      <h2>This example could be used for the Recipe Carousel idea</h2>
      <p>
        I will be looking to work out POCs and examples for the other effects
        and transitions ideas in next few weeks
      </p>
    </div>
  );
}

export default Hero;
