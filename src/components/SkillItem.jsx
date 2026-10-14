function SkillItem({ name, level }) {
  return (
    <div className="skill-item">
      <span className="skill-name">{name}</span>
      <span className="skill-level">{level}</span>
    </div>
  );
}

export default SkillItem;
