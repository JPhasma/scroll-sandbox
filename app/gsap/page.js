'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function GSAP(props) {
  const header = useRef();
  const divOne = useRef();
  const [lettersRef, setLettersRef] = useArrayRef();

  // custom Hook
  function useArrayRef() {
    const lettersRef = useRef([]);
    lettersRef.current = [];
    return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
  }

  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  const text =
    'This is just a basic example of working with Text and JS/CSS scroll effect GSAP';

  const arr = text.split('');

  useEffect(() => {
    const reveal = gsap.to(lettersRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: true,
        start: 'top center',
        end: 'bottom 80%',
      },
      color: '#2a2a2a',
      duration: 5,
      stagger: 1,
    });

    return () => {
      reveal.kill;
    };
  });

  // we have access to our DOM elements here
  useEffect(() => {
    // Add animations to be played here once page has loaded
    gsap.to(header.current, { color: 'red', duration: 2 });
    gsap.to(divOne.current, { color: 'red', duration: 1 });
  }, [header, divOne]);

  return (
    <div className='gsap_page'>
      <h1 ref={header}>GSAP - here we go!</h1>
      <div className='spacing-small'></div>
      <div className='reveal'>
        <div ref={triggerRef}>
          {arr.map((item, index) => {
            return (
              <span key={index} className='reveal-text' ref={setLettersRef}>
                {item}
              </span>
            );
          })}
        </div>
      </div>
      <div className='spacing'></div>
      <div className='trigger_container' ref={divOne}>
        <h3>divOne</h3>
      </div>
    </div>
  );
}

export default GSAP;
