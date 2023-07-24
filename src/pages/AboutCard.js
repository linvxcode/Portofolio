import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function AboutCard() {

const hoverVariant = {
    offscreen: {
      y: 0
    },
    onscreen: {
      y: 10,
      // rotate: -5,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 0.8
      }
    }
  };

    const images = [
        {
          id: 1,
          src: '/Nextjs.png',
          text: 'Next Js',
        },
        {
          id: 2,
          src: '/React.png',
          text: 'React Js'
        },
        {
          id: 3,
          src: '/js.png',
          text: 'Javascript'
        },
        {
          id: 4,
          src: '/laravel.png',
          text: 'Laravel'
        },
        {
          id: 5,
          src: '/mysql.png',
          text: 'MySql'
        },
        {
          id: 6,
          src: '/php.png',
          text: 'PHP'
        },
      ];
    
  return (
    <>
      <motion.div className=" px-28 max-sm:px-12"
              viewport={{ once: true}}
      >
        <div className="grid grid-cols-3 w-[100%] gap-5 justify-items-center max-md:grid-cols-1">
        {images.map((item ,index) => (
            <motion.div key={index} className="translate-y-0  border-2 flex-wrap flex-row  w-[90%] h-48 flex items-center rounded-2xl justify-center bg-shadow"
              whileHover="offscreen"
              initial="onscreen"
              variants={hoverVariant}
            >
          <motion.figure
          className=""
          whileHover={{scale: 0.9}}
          >
            <Image src={item.src} alt="Next" width={120} height={80} />
          </motion.figure>
          
        </motion.div>
        ))}
        </div>
      </motion.div>
    </>
  );
}

export default AboutCard;
