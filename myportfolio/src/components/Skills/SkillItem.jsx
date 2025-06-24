

const SkillItem = ({ name, level }) => {
  return (
    <div className="skill-item p-3 bg-white rounded shadow-sm">
      <div className="d-flex justify-content-between mb-2">
        <span className="fw-bold">{name}</span>
        <span>{level}%</span>
      </div>
      <div className="progress" style={{ height: '10px' }}>
        <div 
          className="progress-bar bg-primary" 
          role="progressbar" 
          style={{ width: `${level}%` }}
          aria-valuenow={level}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
};

export default SkillItem;