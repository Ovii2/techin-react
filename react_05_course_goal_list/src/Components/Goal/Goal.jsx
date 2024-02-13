import "./Goal.css";

function Goal({ goal }) {
  return (
    <ul className="goal">
      <li>{goal}</li>
    </ul>
  );
}

export default Goal;
