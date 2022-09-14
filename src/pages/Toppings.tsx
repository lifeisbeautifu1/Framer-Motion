import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { IPizza } from '../interfaces';

interface ToppingsProps {
  addTopping: (topping: string) => void;
  pizza: IPizza;
}

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
    },
  },
  exit: {
    x: '-100vh',
    transition: { ease: 'easeInOut' },
  },
};

const buttonVariants = {
  hidden: {
    x: '-100vw',
  },
  visible: {
    x: 0,
  },
  hover: {
    scale: 1.1,
    boxShadow: '0px 0px 8px rgb(255, 255, 255)',
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

const Toppings = ({ addTopping, pizza }: ToppingsProps) => {
  let toppings = [
    'mushrooms',
    'peppers',
    'onions',
    'olives',
    'extra cheese',
    'tomatoes',
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="toppings container"
    >
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li
              whileHover={{
                scale: 1.3,
                originX: 0,
              }}
              transition={{ type: 'spring', stiffness: 300 }}
              key={topping}
              onClick={() => addTopping(topping)}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>

      <Link to="/order">
        <motion.button variants={buttonVariants} whileHover="hover">
          {' '}
          Order
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Toppings;
