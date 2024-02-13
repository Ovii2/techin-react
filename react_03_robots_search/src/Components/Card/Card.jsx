/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Card.css";

function Card({ data }) {
  const { name, email, avatar } = data;
  const [reserved, setReserved] = useState(data.reserved);

  return (
    <div className={reserved ? "robot-card-reserved" : "robot-card"}>
      <img className="card-avatar" src={avatar} alt="" />
      <p className="card-name">{name}</p>
      <p className="card-email">{email}</p>
      {reserved ? (
        <button className="reserved" onClick={() => setReserved(!reserved)}>
          Reserved ✅
        </button>
      ) : (
        <button className="card-button" onClick={() => setReserved(!reserved)}>
          Reserve
        </button>
      )}
    </div>
  );
}

export default Card;
