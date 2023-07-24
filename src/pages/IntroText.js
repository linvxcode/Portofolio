import React from "react";
import { motion } from "framer-motion";

function IntroText() {
  return (
    <>
      <div className="">
        <div className="quote">
          <motion.div
            className="content flex w-[100%] flex-row flex-wrap "
            initial={{ opacity: 0, y: 100 }}
            transition={{ type: "spring", bounce: 0.2, duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.span
              whileHover={{
                scale: 1.25,
                transition: { duration: 0.1 },
              }}
              transition={{
                type: "spring",
                stiffness: 1000,
                damping: 10,
              }}
              drag
              dragConstraints={{
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
              }}
              className="text-ex  table-cell max-md:text-[100px] max-[525px]:text-[60px] "
            >
              F
            </motion.span>
            <motion.span
              whileHover={{
                scale: 1.25,
                transition: { duration: 0.1 },
              }}
              transition={{
                type: "spring",
                stiffness: 1000,
                damping: 10,
              }}
              drag
              dragConstraints={{
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
              }}
              className="text-ex table-cell  max-md:text-[100px] max-[525px]:text-[60px] "
            >
              A
            </motion.span>
            <motion.span
              whileHover={{
                scale: 1.25,
                transition: { duration: 0.1 },
              }}
              transition={{
                type: "spring",
                stiffness: 1000,
                damping: 10,
              }}
              drag
              dragConstraints={{
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
              }}
              className="text-ex table-cell max-md:text-[100px] max-[525px]:text-[60px] "
            >
              H
            </motion.span>
            <motion.span
              whileHover={{
                scale: 1.25,
                transition: { duration: 0.1 },
              }}
              transition={{
                type: "spring",
                stiffness: 1000,
                damping: 10,
              }}
              drag
              dragConstraints={{
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
              }}
              className="text-ex table-cell max-md:text-[100px] max-[525px]:text-[60px] "
            >
              L
            </motion.span>
            <motion.span
              whileHover={{
                scale: 1.25,
                transition: { duration: 0.1 },
              }}
              transition={{
                type: "spring",
                stiffness: 1000,
                damping: 10,
              }}
              drag
              dragConstraints={{
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
              }}
              className="text-ex table-cell max-md:text-[100px] max-[525px]:text-[60px] "
            >
              E
            </motion.span>
            <motion.span
              whileHover={{
                scale: 1.25,
                transition: { duration: 0.1 },
              }}
              transition={{
                type: "spring",
                stiffness: 1000,
                damping: 10,
              }}
              drag
              dragConstraints={{
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
              }}
              className="text-ex table-cell max-md:text-[100px] max-[525px]:text-[60px] "
            >
              V
            </motion.span>
            <motion.span
              whileHover={{
                scale: 1.25,
                transition: { duration: 0.1 },
              }}
              transition={{
                type: "spring",
                stiffness: 1000,
                damping: 10,
              }}
              drag
              dragConstraints={{
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
              }}
              className="text-ex table-cell max-md:text-[100px] max-[525px]:text-[60px] "
            >
              I
            </motion.span>
            {/* <motion.span
                            whileHover={{
                                scale: 1.25,
                                transition: {duration: 0.1}
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 1000,
                                damping: 10,
                            }}
                            drag
                            dragConstraints={{
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                            }}
                            className="text-ex table-cell max-md:text-[100px] max-[525px]:text-[70px] "
                        >
                            g
                        </motion.span>
                        <motion.span
                            whileHover={{
                                scale: 1.25,
                                transition: {duration: 0.1}
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 1000,
                                damping: 10,
                            }}
                            drag
                            dragConstraints={{
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                            }}
                            className="text-ex table-cell max-md:text-5xl max-[525px]:text-[70px] "
                        >
                            .
                        </motion.span> */}
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default IntroText;
