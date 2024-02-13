import { useState } from "react";
import "./Form.css";

function Form({ addGoalToList }) {
  const [value, setValue] = useState("");

  return (
    <div className="goal-form">
      <p>Course Goal</p>
      <input type="text" onChange={(e) => setValue(e.target.value)} value={value} />
      <button className="goal-button" onClick={() => addGoalToList(value.trim(), setValue(""))}>
        Add Goal
      </button>
    </div>
  );
}

export default Form;
