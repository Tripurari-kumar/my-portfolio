import Button from '@/components/button';
import Link from 'next/link';
import React from 'react';

function Hero() {
  return (
    <div className='hero'>
      <h1 className='hero-title'>Hi my name is</h1>
      <h2 className='hero-title-large'>Tripurari Kumar</h2>
      <h3 className='hero-title-large hero-tile-sub'>
        I craft things for Web!
      </h3>
      <p className='hero-text'>
        I&apos;m a software engineer with expertise in creating top-notch
        digital experiences. My current focus is on developing products that are
        accessible and centered around user needs, as part of the team at&nbsp;
        <Link
          href={'https://www.mindstix.com/'}
          target='_blank'
          className='link'
        >
          Mindstix Software Labs.
        </Link>
      </p>
    </div>
  );
}

export default Hero;
