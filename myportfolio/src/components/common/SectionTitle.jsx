
const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="section-title text-center mb-5">
      <h2 className="display-5 fw-bold">{title}</h2>
      <p className="text-muted">{subtitle}</p>
      <div className="divider mx-auto bg-primary"></div>
    </div>
  );
};

export default SectionTitle;