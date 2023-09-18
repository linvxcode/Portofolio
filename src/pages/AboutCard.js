import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import nextj from "../../public/nextj.svg"

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
        src: '/logo/framer-min.png',
        text: 'assad'
      },
        {
          // id: 1,
          src: '/logo/next-min.png',
          text: 'Next Js',
        },
        {
          src: '/logo/React-min.png',
          text: 'React Js'
        },
        {
          src: '/logo/tailwind-min.png',
          text: 'Javascript'
        },
        {
          src: '/logo/laravel-min.png',
          text: 'Laravel'
        },
        {
          src: '/logo/mysql-min.png',
          text: 'MySql'
        },
        {
          src: '/logo/github-min.png',
          text: 'Tailwind'
        },
        // {
        //   id: 7,
        //   src: '/git.jpg',
        //   text: 'Git'
        // },
        // {
        //   id: 8,
        //   src: '/framer.png',
        //   text: 'Framer Motion'
        // },
        // {
        //   id: 9,
        //   src: '/github.png',
        //   text: 'Github'
        // },
      ];
    
  return (
    <>
      <motion.div className="max-[450px]:px-0 px-28 max-sm:px-12"
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
            <Image priority src={item.src} alt={item.text} width={120} height={80} className="w-auto h-auto" style={{width: 'auto', height: 'auto'}} />
          </motion.figure>
          
        </motion.div>
        ))}
        </div>
      </motion.div>
    </>
  );
}

export default AboutCard;
