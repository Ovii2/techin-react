import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleMinus, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './Basket.css';

function Basket({ items, deleteFromBasket }) {
  const totalPrice = items.reduce((total, item) => total + item.price, 0);

  return (
    <div className='basket'>
      <div className='title-flex'>
        <h1>Shopping cart</h1>
        <button className='shopping-cart'>
          <FontAwesomeIcon className='shopping-cart-icon' icon={faCartShopping} />
          <span className={items.length > 0 ? 'items-count' : null}>
            {items.length > 0 && items.length}
          </span>
          <p className='cart-item-price'>
            {' '}
            {totalPrice > 0 ? `€${totalPrice.toFixed(2)}` : `€0.00`}
          </p>
        </button>
      </div>
      {items.map((item, index) => (
        <div className='title-weight' key={index}>
          <h4>
            {item.name.split('-')[0]}
            {item.quantity < 1 ? item.quantity * 1000 : item.quantity}{' '}
            {item.quantity < 1 ? 'g' : 'kg'} / {`€${item.price.toFixed(2)}`}
          </h4>

          <FontAwesomeIcon
            icon={faCircleMinus}
            style={{ color: '#ff3860' }}
            onClick={() => deleteFromBasket(item)}
            className='delete-icon'
          />
        </div>
      ))}
      <p> {totalPrice > 0 && `Total price: ${totalPrice.toFixed(2)} €`}</p>
    </div>
  );
}

export default Basket;
