import "./FruitsList.css";
import { List, ListItem, ListItemButton, ListItemText, ListItemIcon } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import Counter from "../Counter/Counter";
function FruitsList({ fruitsList, deleteFromList, editFruit, totalFruits }) {
  const jsx = fruitsList.map((fruit) => (
    <List key={fruit}>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon onClick={() => deleteFromList(fruit)}>
            <DeleteForeverIcon />
          </ListItemIcon>
          <ListItemIcon onClick={() => editFruit(fruit)}>
            <EditIcon sx={{ ml: -1 }} />
          </ListItemIcon>
          <ListItemText primary={fruit} />
        </ListItemButton>
      </ListItem>
    </List>
  ));

  return (
    <div className="fruits-list">
      {jsx}
      {fruitsList.length > 0 ? (
        <Counter totalFruits={totalFruits} />
      ) : (
        <p>List is empty. Add some fruits! 🍇</p>
      )}
    </div>
  );
}
export default FruitsList;
