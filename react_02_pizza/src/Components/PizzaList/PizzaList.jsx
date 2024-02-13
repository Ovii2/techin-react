import Pizza from "../Pizza/Pizza";
import pizzas from "../../dev-data/pizzas.jsx";
import "./PizzaList.css";

function PizzaList() {

  return (
    <div className="pizza-list">
      {pizzas.map((pizza) => (
        <Pizza pizza={pizza} key={pizza.name} />
      ))}
    </div>
  );
}

export default PizzaList;
