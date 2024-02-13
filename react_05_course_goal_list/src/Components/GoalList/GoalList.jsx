import Goal from "../Goal/Goal";

function GoalList({ goalList }) {
  return goalList.map((goal) => <Goal key={goal} goal={goal} />);
}

export default GoalList;
