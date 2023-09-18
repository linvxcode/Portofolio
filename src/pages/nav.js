// import "./styles.css";
// import Styles from '@/styles/styles.css'
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "react-scroll";
import { Button } from "@nextui-org/react";

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
    <motion.div className="flex"
    initial={{ opacity: 0 }}
    transition={{ type: "spring", bounce: 0.2, duration: 1}}
    animate={{ opacity: 1 }}
    >
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="p-[10px] px-10 max-sm:px-5  fixed top-0 z-10 w-[100%]  transition-all"
        
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
            className=" h-auto"
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
                duration: 0.7,
              },
            },
          }}
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
          className={isOpen ? '' : 'h-20'}
        >
          <motion.li variants={itemVariants} >
            <div className="flex justify-center">
            <Button auto color="secondary" bordered rounded flat
            className="border-black flex justify-center"
            >
            <Link to="home" smooth={true} duration={500} onClick={closeMenu}
            className="flex justify-center text-black"
            >
            <h1 className="w-auto  uppercase font-semibold hover:underline font">Home</h1>
            </Link>
              </Button>
              </div>
          </motion.li>
          <motion.li variants={itemVariants} >
            <div className="flex justify-center">
            <Button auto color="secondary" bordered rounded flat
            className="border-black flex justify-center"
            >
            <Link to="about" smooth={true} duration={500} onClick={closeMenu}
            className="flex justify-center text-black"
            >
            <h1 className="w-auto  uppercase font-semibold hover:underline font">About</h1>
            </Link>
              </Button>
              </div>
          </motion.li>
          <motion.li variants={itemVariants} >
            <div className="flex justify-center">
            <Button auto color="secondary" bordered rounded flat
            className="border-black flex justify-center"
            >
            <Link to="tech" smooth={true} duration={500} onClick={closeMenu}
            className="flex justify-center text-black"
            >
            <h1 className="w-auto  uppercase font-semibold hover:underline font">Technology</h1>
            </Link>
              </Button>
              </div>
          </motion.li>
          <motion.li variants={itemVariants} >
            <div className="flex justify-center">
            <Button auto color="secondary" bordered rounded flat
            className="border-black flex justify-center"
            >
            <Link to="porto" smooth={true} duration={500} onClick={closeMenu}
            className="flex justify-center text-black"
            >
            <h1 className="w-auto  uppercase font-semibold hover:underline font">Portofolio</h1>
            </Link>
              </Button>
              </div>
          </motion.li>
          <motion.li variants={itemVariants} >
            <div className="flex justify-center">
            <Button auto color="secondary" bordered rounded flat
            className="border-black flex justify-center"
            >
            <Link to="contact" smooth={true} duration={500} onClick={closeMenu}
            className="flex justify-center text-black"
            >
            <h1 className="w-auto  uppercase font-semibold hover:underline font">Contact</h1>
            </Link>
              </Button>
              </div>
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
