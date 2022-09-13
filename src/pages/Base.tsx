import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { IPizza } from '../interfaces';

interface BaseProps {
  addBase: (base: string) => void;
  pizza: IPizza;
}

const Base: React.FC<BaseProps> = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div
      initial={{ x: '100vw' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
      className="base container"
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li
              whileHover={{
                scale: 1.3,
                originX: 0,
              }}
              transition={{ type: 'spring', stiffness: 300 }}
              key={base}
              onClick={() => addBase(base)}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <div className="next">
          <Link to="/toppings">
            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: '0px 0px 8px rgb(255, 255, 255)',
              }}
              initial={{ x: '-100vw' }}
              animate={{
                x: 0,
              }}
            >
              Next
            </motion.button>
          </Link>
        </div>
      )}
    </motion.div>
  );
};

export default Base;
