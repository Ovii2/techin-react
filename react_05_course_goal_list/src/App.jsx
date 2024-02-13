import { useState } from "react";
import "./index.css";
import GoalList from "./Components/GoalList/GoalList";
import Form from "./Components/Form/Form";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [goals, setGoals] = useState([]);

  const addGoalToList = (enteredGoal) => {
    if (enteredGoal.trim() === "") {
      toast.error("No empty values allowed");
    } else if (goals.includes(enteredGoal)) {
      toast.error(`${enteredGoal} is already in the list`);
    } else {
      setGoals((prevGoals) => [...prevGoals, enteredGoal]);
      toast.success(`${enteredGoal} was added`);
    }
  };

  return (
    <>
      <Toaster />
      <Form addGoalToList={addGoalToList} />
      <GoalList goalList={goals} />
    </>
  );
}

export default App;
