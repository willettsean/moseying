'use client'

import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <h1 className="centered-title">hi, i'm sean 尚书</h1>
      <div className='my-photo-container'>
        <Image
          src='/images/bay-bridge-and-me.jpg'
          alt='Picture of me in front of the Bay Bridge'
          width={180}
          height={120}
        />
      </div>
      <p className='aligned-paragraph'>
        I'm a data engineer living in SF, currently learning Mandarin and trying to read more biographies.
        I don't think of myself as a traveler, but I've ended up going to a lot of places and continue to do so, 
        so I thought it would be good for me to start writing it down. 
      </p>
    </div>
  );
}