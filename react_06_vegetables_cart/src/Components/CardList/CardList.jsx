import Card from "../Card/Card";
import database from "../db/database.jsx";
import "./Cardlist.css";

function CardList({ addToBasket }) {
  return (
    <div className="card-list">
      {database.map((item) => (
        <Card data={item} key={item.id} addToBasket={addToBasket} />
      ))}
    </div>
  );
}

export default CardList;
