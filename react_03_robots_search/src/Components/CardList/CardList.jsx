/* eslint-disable react/prop-types */
import robots from "../../db/robots.jsx";
import Card from "../Card/Card";
import "./CardList.css";

function CardList({ searchTerm }) {
  return (
    <div className="card-list">
      {robots
        .filter((robot) => robot.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .map((robot) => (
          <Card data={robot} key={robot.id} />
        ))}
    </div>
  );
}

export default CardList;

// import robots from "../../db/robots.jsx";
// import Card from "../Card/Card";
// import "./CardList.css";

// function CardList({ searchTerm }) {

//   const filteredRobots = robots.filter((robot) =>
//     robot.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="card-list">
//       {filteredRobots.map((robot) => (
//         <Card data={robot} key={robot.id} />
//       ))}
//     </div>
//   );
// }

// export default CardList;
