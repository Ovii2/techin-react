import { useState } from "react";
import InputForm from "./Components/InputForm/InputForm";
import "./index.css";
import FruitsList from "./Components/FruitsList/FruitsList";
import toast, { Toaster } from "react-hot-toast";
// import Counter from "./Components/Counter/Counter";

function App() {
  const [fruits, setFruits] = useState([]);

  const addFruitToList = (enteredFruitTitle) => {
    // setFruits((fruits) => Array.from(new Set([...fruits, enteredFruitTitle])));
    if (fruits.includes(enteredFruitTitle)) {
      toast.error(`${enteredFruitTitle} is already in a list`);
      return;
    } else {
      setFruits((fruits) => [...fruits, enteredFruitTitle]);
      toast.success(`${enteredFruitTitle} was added`);
    }
  };

  const deleteFruits = (fruitTitle) => {
    let confirmation = window.confirm(`Are you sure you want to delete ${fruitTitle}?`);
    if (!confirmation) {
      return;
    } else {
      setFruits(fruits.filter((fruit) => fruit !== fruitTitle));
      toast.success(`${fruitTitle} deleted`);
    }
  };

  const editFruit = (fruitTitle) => {
    setFruits(fruits.map((fruit) => (fruit === fruitTitle ? `🍏🥭${fruit}🍌🍉` : fruit)));
  };

  return (
    <>
      <Toaster />
      <InputForm addFruit={addFruitToList} />
      <FruitsList
        fruitsList={fruits}
        deleteFromList={deleteFruits}
        editFruit={editFruit}
        totalFruits={fruits.length}
      />
      {/* <Counter totalFruits={fruits.length} /> */}
    </>
  );
}

export default App;
