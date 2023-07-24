import Framer from "./framer.js";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { motion } from "framer-motion";
import IntroText from "./IntroText.js";
import { Link } from "react-scroll";



// const Efek = {
//     offscreen: {
//       x: -500
//     },
//     onscreen: {
//       x: 0,
//       rotate: 0,
//       transition: {
//         type: "spring",
//         bounce: 0.2,
//         duration: 0.9
//       }
//     }
//   };

const hoverVariant = {
  offscreen: {
    y: -8
  },
  onscreen: {
    y: 0,
    // rotate: -5,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.8
    }
  }
};
function Homepage() {
  return (
    <div>
      <div className="grid h-screen grid-cols-1 p-28 max-sm:p-3 max-md:grid-cols-1">
        <motion.div className="flex flex-row content-center flex-wrap items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            transition={{ type: "spring", bounce: 0.2, duration: 1.2 }}
            animate={{ opacity: 1, y: 0 }}
            className="font block text-4xl font-bold  tracking-normal max-md:mt-0"
          >
            <div className="block">
            Hello <h1 
          className="spin-element inline-block"
            > 🖐</h1> I&rsquo;m

            </div>
            <IntroText />
            <motion.h2
              initial={{ opacity: 0, y: 100 }}
              transition={{ type: "spring", bounce: 0.2, duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex text-xl tracking-normal font justify-start "
            >
              Welcome To My Portofolio
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              transition={{ type: "spring", bounce: 0.2, duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="px-3 mt-5"
              >

              <Link
                to="about"
                smooth={true}
                duration={500}
                className="btn btn-outline"
                >
                {/* Explore */}
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-20 h-8"
                  whileHover="offscreen"
                  initial="onscreen"
                  variants={hoverVariant}
                  >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                    />
                </motion.svg>
              </Link>
                    </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Homepage;
