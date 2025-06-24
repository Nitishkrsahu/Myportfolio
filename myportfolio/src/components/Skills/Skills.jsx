import React from 'react';
import SectionTitle from '../common/SectionTitle';
import SkillItem from './SkillItem';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Express.js', level: 75 },
    { name: 'MongoDB', level: 70 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Redux', level: 75 },
    { name: 'Git', level: 85 },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <SectionTitle title="My Skills" subtitle="What I know" />
        
        <div className="row g-4">
          {skills.map((skill, index) => (
            <div key={index} className="col-md-6">
              <SkillItem name={skill.name} level={skill.level} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;