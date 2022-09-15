import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { Loader } from '../components';

const buttonVariants = {
  hover: {
    scale: 1.1,
    boxShadow: '0px 0px 8px rgb(255, 255, 255)',
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ delay: 0.2 }}
      animate={{
        opacity: 1,
      }}
      exit={{
        x: '-100vh',
        transition: { ease: 'easeInOut' },
      }}
      className="home container"
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button variants={buttonVariants} whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader />
    </motion.div>
  );
};

export default Home;
