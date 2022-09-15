import { motion } from 'framer-motion';

const loaderVariants = {
  animateOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: 'easeOut',
      },
    },
  },
};

const Loader = () => {
  return (
    <motion.div
      animate="animateOne"
      className="loader"
      variants={loaderVariants}
    ></motion.div>
  );
};

export default Loader;
