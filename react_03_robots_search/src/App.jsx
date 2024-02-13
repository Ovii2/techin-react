import { useState } from "react";
import CardList from "./Components/CardList/CardList";
import Header from "./Components/Header/Header";
import "./index.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CardList searchTerm={searchTerm} />
    </div>
  );
}

export default App;
