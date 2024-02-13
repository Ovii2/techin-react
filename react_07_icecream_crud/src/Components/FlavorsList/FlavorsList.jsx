import Flavor from "../Flavor/Flavor";
import "./FlavorsList.css";

function FlavorsList({ flavors, setUpdate }) {
  return (
    <div className="flavors-list">
      {flavors.map((f) => {
        return <Flavor key={f.id} flavor={f} setUpdate={setUpdate} />;
      })}
    </div>
  );
}

export default FlavorsList;
