import { useState } from 'react';
import './Card.css';

function Card({ data, addToBasket }) {
  const [quantity, setQuantity] = useState(0.1);
  const { name, price, image } = data;

  return (
    <div className='card'>
      <img className='card-image' src={image} alt='groceries' />
      <p>{name}</p>
      <input
        type='number'
        name='quantity'
        id='quantity'
        min='0'
        step='0.15'
        max='5.00'
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <p>{price}€</p>
      <button
        onClick={() => {
          quantity > 0 && addToBasket({ ...data, price: price * quantity, quantity });
        }}
      >
        Add to cart
      </button>
    </div>
  );
}

export default Card;
