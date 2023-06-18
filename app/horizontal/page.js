'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../components/Hero';
import ScrollSection from '../components/ScrollSection';

function Horizontal() {
  return (
    <div className='horizontal'>
      <Hero subtitle={'Horizontal Scroll Example'} />
      <ScrollSection />

      <footer>
        <h3>Footer (or more animation sections etc)</h3>
      </footer>
    </div>
  );
}

export default Horizontal;
