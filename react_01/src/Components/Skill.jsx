import PropTypes from "prop-types";

function Skill({ devSkill }) {
  const { skill, level, color } = devSkill;
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "advanced" && "🧙‍♂️"}
        {level === "intermediate" && "😒"}
      </span>
    </div>
  );
}

Skill.propTypes = {
  devSkill: PropTypes.shape({
    skill: PropTypes.string.isRequired,
    level: PropTypes.oneOf(["beginner", "intermediate", "advanced"]).isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
};

export default Skill;
