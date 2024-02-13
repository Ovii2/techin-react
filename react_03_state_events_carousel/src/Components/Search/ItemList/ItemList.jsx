import { nanoid } from "nanoid";
import { useState } from "react";
import "./ItemList.css";

function ItemList() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addItemHandler = () => {
    if (item.trim() === "") return;
    setItems([...items, item]);
    setItem("");
  };

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search">
      <p>Search:</p>
      <input
        type="text"
        value={item}
        placeholder="Add item!"
        onChange={(e) => setItem(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addItemHandler()}
      />
      <input
        type="text"
        placeholder="Search!"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul className="items-list">
        {filteredItems.map((item) => (
          <li key={nanoid()}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
