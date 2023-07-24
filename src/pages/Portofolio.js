
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

function ParallaxLayer({ src }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className="min-h-screen mt-10 relative overflow-hidden group"
      style={{ transform: `translateY(${scrollY * 0.1}px)` }}
    >
      <div className="absolute inset-0 ">
        <Image src={src}  layout="fill" alt="" />
      </div>
    </div>
  );
}

function Portofolio() {
  return (
    <>
    {/* <div className='h-screen'></div> */}
    <div className=''>
      <ParallaxLayer>
        <h1>
          Stay Conected With Me
        </h1>
      </ParallaxLayer>
      <ParallaxLayer src="/pa.webp" />
    </div>
    </>
  );
}

export default Portofolio;
