
const ProjectCard = ({ project }) => {
  return (
    <div className="card h-100 shadow-sm">
      <img 
        src={project.image} 
        className="card-img-top" 
        alt={project.title}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text flex-grow-1">{project.description}</p>
        <div className="mb-3">
          {project.technologies.map((tech, index) => (
            <span key={index} className="badge bg-secondary me-1 mb-1">{tech}</span>
          ))}
        </div>
        <div className="d-flex gap-2">
          <a 
            href={project.githubLink} 
            className="btn btn-outline-primary btn-sm flex-grow-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a 
            href={project.liveLink} 
            className="btn btn-primary btn-sm flex-grow-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;