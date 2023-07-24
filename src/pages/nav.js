// import "./styles.css";
// import Styles from '@/styles/styles.css'
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "react-scroll";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};
const Path = (props) => (
  <path
    fill="transparent"
    strokeWidth="3"
    stroke="var(--background)"
    strokeLinecap="round"
    {...props}
  />
);

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const closeMenu = () => {
    setTimeout(() => {
      setIsOpen(false);

    },200)
  };


  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div className="flex  justify-end"
    initial={{ opacity: 0 }}
    transition={{ type: "spring", bounce: 0.2, duration: 1}}
    animate={{ opacity: 1 }}
    >
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="p-[10px] px-10  fixed top-0 z-10 w-[100%] md:ml-auto  sm:ml-auto transition-all"
      >
        <motion.button
        id="give"
          className={`${hasScrolled ? 'shadow-xl' : ''}`}
          whileTap={{ scale: 0.97 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Menu */}
          <Image
            // className={styles.logo}
            src="/logo1.webp"
            alt="port Logo"
            width={80}
            height={60}
            priority
          />
          {/* <img /> */}
          <motion.div
            variants={{
              open: { rotate: 180 },
              closed: { rotate: 0 },
            }}
            transition={{ duration: 0.2 }}
            style={{ originY: 0.55 }}
          >
            <svg width="15" height="15" viewBox="0 0 20 20">
              <path d="M0 7 L 20 7 L 10 16" />
            </svg>
          </motion.div>
        </motion.button>
        <motion.ul
          variants={{
            open: {
              clipPath: "inset(0% 0% 0% 0% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05,
              },
            },
            closed: {
              clipPath: "inset(10% 50% 90% 50% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3,
              },
            },
          }}
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
        >
          <motion.li variants={itemVariants}>
            <Link to="home" smooth={true} duration={500} onClick={closeMenu}
            className="flex justify-center"
            >
              <button className="w-auto btn btn-outline">Home</button>
              
            </Link>
          </motion.li>
          <motion.li variants={itemVariants}>
            <Link  className="flex justify-center" to="about" smooth={true} duration={500} onClick={closeMenu}>
            <button className="w-auto btn btn-outline">About</button>
            </Link>
          </motion.li>
          <motion.li variants={itemVariants}>
            <Link className="flex justify-center" to="tech" smooth={true} duration={500} onClick={closeMenu}>
            <button className="w-auto btn btn-outline">Technology</button>
            </Link>
          </motion.li>
          {/* <motion.li variants={itemVariants}>Item 2 </motion.li> */}
          {/* <motion.li variants={itemVariants}>Item 3 </motion.li>
        <motion.li variants={itemVariants}>Item 4 </motion.li>
        <motion.li variants={itemVariants}>Item 5 </motion.li> */}
        </motion.ul>
      </motion.nav>
    </motion.div>
  );
}

export default Nav;
