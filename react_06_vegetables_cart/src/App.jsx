import './index.css';
import CardList from './Components/CardList/CardList';
import Basket from './Components/Basket/Basket';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [basket, setBasket] = useState([]);

  const addToBasket = (item) => {
    setBasket((basket) => [...basket, item]);
    toast.success(`${item.name.split('-')[0]} was added!`);
  };

  const deleteFromBasket = (itemName) => {
    setBasket(basket.filter((item) => item !== itemName));
  };

  return (
    <>
      <ToastContainer limit={5} stacked position='top-center' autoClose={1500} theme='dark' />
      <Basket items={basket} deleteFromBasket={deleteFromBasket} />
      <CardList addToBasket={addToBasket} />
    </>
  );
}

export default App;
