import { Link } from "react-router-dom";
import { deleteData } from "../services/delete";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "./Card.css";

function Card({ donor, setUpdate }) {
  const { lastName, age, id } = donor;

  const deleteHandler = async (id) => {
    if (!window.confirm(`Do you really want to delete donor ${lastName}?`)) {
      return;
    }
    await deleteData(id);
    setUpdate((update) => update + 1);
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3>Last name: {lastName}</h3>
        <FontAwesomeIcon
          icon={faTrashCan}
          onClick={() => deleteHandler(donor.id)}
          className="delete-icon"
        />
      </div>
      <p>Age: {age}</p>
      <span className="card-button">
        <Link to={`/donor-details/${id}`}>See more</Link>
      </span>
    </div>
  );
}

export default Card;
