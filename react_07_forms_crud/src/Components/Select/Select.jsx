import "./Select.css";

function Select({ setPerPage }) {
  return (
    <div className="custom-select">
      <label htmlFor="select">Items per page:</label>
      <select onChange={(e) => setPerPage(e.target.value)} id="select">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="30">30</option>
        <option value={Number.MAX_SAFE_INTEGER}>All</option>
      </select>
    </div>
  );
}

export default Select;
