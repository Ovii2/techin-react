/* eslint-disable react/prop-types */
import "./Card.css";

function Card({ employee }) {
  const { company, logo, new: isNew, featured, position, postedAt, contract, location } = employee;

  return (
    <article className="card">
      <div className="card-image">
        <img src={logo} alt="logo" />
      </div>
      <div className="card-text">
        <div className="card-text-header">
          <p className="card-company">{company}</p>
          <p className={isNew ? "card-new" : null}>{isNew ? "NEW!" : ""}</p>
          <p className={featured ? "card-featured" : null}>{featured ? "FEATURED" : ""}</p>
        </div>
        <div className="card-text-middle">{position}</div>
        <div className="card-text-bottom">
          <p className="card-ago">{postedAt}</p>
          <p className="card-contract">{contract}</p>
          <p className="card-location">{location}</p>
        </div>
      </div>
    </article>
  );
}

export default Card;
