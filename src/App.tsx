import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Home, Base, Toppings, Order } from './pages';
import { Modal } from './components';
import { IPizza } from './interfaces';

function App() {
  const [pizza, setPizza] = useState<IPizza>({ base: '', toppings: [] });

  const [showModal, setShowModal] = useState(false);

  const location = useLocation();

  const addBase = (base: string) => {
    setPizza({ ...pizza, base });
  };

  const addTopping = (topping: string) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };

  return (
    <>
      <Header />
      <AnimatePresence mode="wait" onExitComplete={() => setShowModal(false)}>
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route
            path="/base"
            element={<Base addBase={addBase} pizza={pizza} />}
          />
          <Route
            path="/toppings"
            element={<Toppings addTopping={addTopping} pizza={pizza} />}
          />
          <Route
            path="/order"
            element={<Order setShowModal={setShowModal} pizza={pizza} />}
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
