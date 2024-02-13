import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./InputForm.css";
import { useState } from "react";


function InputForm({ addFruit }) {
  const [value, setValue] = useState("");

  return (
    <div className="input-form">
      <TextField
        id="outlined-basic"
        label="Fruit"
        variant="outlined"
        onChange={(e) => setValue(e.target.value.trim() !== "" ? e.target.value.trim() : "")}
        value={value}
      />
      <Button
        sx={{ ml: 0.5 }}
        variant="contained"
        onClick={() => (value.trim() !== "" ? (addFruit(value.trim()), setValue("")) : null)}
      >
        Add
      </Button>
    </div>
  );
}

export default InputForm;
