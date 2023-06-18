'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      { translateX: 0 },
      {
        translateX: '-300vw',
        ease: 'none',
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: '2000 top',
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className='scroll-section-outer'>
      <div ref={triggerRef}>
        <div className='scroll-section-inner' ref={sectionRef}>
          <div className='scroll-section'>
            <h1>Section 1</h1>
          </div>
          <div className='scroll-section'>
            <h1>Section 2</h1>
          </div>
          <div className='scroll-section'>
            <h1>Section 3</h1>
          </div>
          <div className='scroll-section'>
            <h1>Section 4</h1>
          </div>
          {/* <div className='scroll-section'>
            <h1>Section 5</h1>
          </div>
          <div className='scroll-section'>
            <h1>Section 6</h1>
          </div>
          <div className='scroll-section'>
            <h1>Section 7</h1>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
