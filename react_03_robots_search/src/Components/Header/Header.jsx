/* eslint-disable react/prop-types */
import "./Header.css";

function Header({ searchTerm, setSearchTerm }) {
  return (
    <div className="header">
      <h1>ROBOFRIENDS</h1>
      <input
        className="search"
        type="text"
        placeholder="search for robots"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default Header;
