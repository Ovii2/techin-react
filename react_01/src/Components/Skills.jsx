import skills from "../dev-data/skills";
import Skill from "./Skill";

function Skills() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill devSkill={skill} key={skill.id} />
      ))}
    </div>
  );
}

export default Skills;
