import Card from "../Card/Card";
import employees from "../../dev-data/employees.jsx";
import "./CardList.css";

function CardList() {
  return (
    <div className="card-list">
      {employees.map((employee) => (
        <Card employee={employee} key={employee.id} />
      ))}
    </div>
  );
}

export default CardList;
