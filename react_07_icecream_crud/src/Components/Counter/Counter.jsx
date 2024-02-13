import { useState } from 'react';
import './Counter.css';

function Counter({ flavors }) {
  const [discount, setDiscount] = useState(0);

  const calculateSubTotal = () => {
    return flavors.reduce((total, { price, count }) => total + price * count, 0);
  };

  const calculateTotal = () => {
    let subTotal = calculateSubTotal();
    let validDiscount = discount < 0 ? 0 : discount > 100 ? 100 : discount;
    return subTotal - subTotal * (validDiscount / 100);
  };

  return (
    <div className='ice-cream-counter-container'>
      <div className='ice-cream-counter-left'>
        {flavors.map((flavor) => {
          return (
            <div className='ice-cream-counter' key={flavor.key} style={{ color: flavor.color }}>
              <p>
                <strong>{`${flavor.flavor}: ${flavor.count}`}</strong>
              </p>
            </div>
          );
        })}
      </div>

      <div className='total'>
        <p>
          Discount:{' '}
          <input
            className='discount'
            type='number'
            id='number'
            min='0'
            max='100'
            onChange={(e) => setDiscount(e.target.value)}
            value={discount}
          />
          %
        </p>
        <p>Subtotal: €{calculateSubTotal()}</p>
        <h4>Total: €{calculateTotal().toFixed(2)}</h4>
        <p>You saved: €{(calculateSubTotal() - calculateTotal()).toFixed(2)}</p>
      </div>
    </div>
  );
}

export default Counter;
