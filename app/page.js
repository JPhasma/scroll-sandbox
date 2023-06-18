'use client';

import { useState, useEffect, useRef } from 'react';

import Image from 'next/image';
import styles from './page.module.css';
import colours from './css-colours';

function FadeInSection(props) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <h1>Scroll Sandbox</h1>
      {colours.length}
      {colours.map((colour) => {
        return (
          <FadeInSection key={colour}>
            <div
              className={styles.colour_container}
              style={{ backgroundColor: colour }}
            >
              <h3>{colour}</h3>
            </div>
          </FadeInSection>
        );
      })}
    </main>
  );
}
