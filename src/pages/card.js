import { motion } from "framer-motion";

const cardVariants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 50,
    rotate: -5,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.8
    }
  }
};

// const hue = (h) => `hsl(${h}, 100%, 50%)`;
const hue = (h) => `hsl(${h} 0% 48.03%), hsl(${h} 2.43% 41.51%)`;

function Card(props) {
  const { text, emoji, hueA, hueB } = props;
  // const textcolor = '';
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
     
      <div className="splash"  style={{ background }} />
      <motion.div className="card" variants={cardVariants}>
        <div className="text-4xl text-black">
        {text}
        </div>
        {/* {emoji} */}
        {/* <img src={imagePath} alt={altText} /> */}
      </motion.div>
    </motion.div>
  );
}

export default Card;
