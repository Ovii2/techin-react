/* eslint-disable react/prop-types */
import './Pizza.css';

function Pizza({ pizza }) {
  const { name, ingredients, photoName, price, soldOut } = pizza;

  return (
    <article className='pizza-card'>
      <div>
        <img className={soldOut ? 'sold-out' : ' pizza-photo'} src={photoName} alt='pizza' />
      </div>
      <div className='pizza-description'>
        <h4>{name}</h4>
        <p className='pizza-ingredients'>{ingredients}</p>
        <p className='pizza-price'>{soldOut ? 'Sold out' : `${price}€`}</p>
      </div>
    </article>
  );
}

export default Pizza;
