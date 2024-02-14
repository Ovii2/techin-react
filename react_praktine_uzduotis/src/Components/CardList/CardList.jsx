import Card from "../Card/Card";
import "./CardList.css";

function CardList({ donors, setUpdate }) {
  return (
    <div className="card-list-container">
      <h1>Here you can view our donors</h1>
      <div className="card-list">
        {donors
          .filter((card) => card.id !== donors.id)
          .sort((a, b) => a.lastName.localeCompare(b.lastName))
          .map((donor) => {
            return <Card key={donor.id} donor={donor} setUpdate={setUpdate} />;
          })}
      </div>
    </div>
  );
}

export default CardList;
