import SkillItem from "./SkillItem.jsx";

function Skills({ skills }) {
  return (
    <section className="section">
      <h2>My Skills</h2>
      <div className="skills-list">
        {skills.map((skill) => (
          <SkillItem key={skill.id} name={skill.name} level={skill.level} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
