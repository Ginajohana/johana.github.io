import React, { useState } from 'react';
import "../../styles/skills.css";
import 'font-awesome/css/font-awesome.min.css';

export const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skillsData = [
    { skill: 'HTML', percentage: '90%', iconClass: 'fa-html5', color: '#E44D26' },
    { skill: 'CSS', percentage: '60%', iconClass: 'fa-css3', color: '#147BBC' },
    { skill: 'JavaScript', percentage: '50%', iconClass: 'fa-js', color: '#F0DB4F' },
    { skill: 'Python', percentage: '60%', iconClass: 'fa-python', color: '#306998' },
    { skill: 'React', percentage: '60%', iconClass: 'fa-react', color: '#61DAFB' },
  ];

  const professionalSkills = [
    { skill: 'Project Management', percentage: '80%', iconClass: 'fa-tasks', color: '#FF5733' },
    { skill: 'Communication', percentage: '85%', iconClass: 'fa-comments', color: '#2E86C1' },
    { skill: 'Problem Solving', percentage: '75%', iconClass: 'fa-lightbulb', color: '#F39C12' },
    { skill: 'Agile Methodologies', percentage: '75%', iconClass: 'fa-check-square', color: '#27AE60' },
    { skill: 'Client Relationship', percentage: '75%', iconClass: 'fa-handshake', color: '#8E44AD' },
  ];
  
  const handleSkillClick = (index) => {
    setSelectedSkill(selectedSkill === index ? null : index);
  };

  return (
    <div className='sub-title'>
      <h1>My <span>Skills</span></h1>
      <div className="container">
        <div className="row">
          <div className="skills-container">
            <div className="col-md-6">
              <div className='technical-skills'>
                <h2 className='heading1'>Technical Skills</h2>
                <div className='Technical-bars'>
                  {skillsData.map((data, index) => (
                    <div className={`bar ${selectedSkill === index ? 'active' : ''}`} key={index} onClick={() => handleSkillClick(index)}>
                      <i className={`fa ${data.iconClass}`} style={{ color: data.color }}></i>
                      <div className='info'>
                        <p>{data.skill}</p>
                      </div>
                      <div className='progress-line'>
                        <span className='animate' style={{ width: data.percentage }}></span>
                      </div>
                      <div className='percentage'>{data.percentage}</div>
                      {selectedSkill === index && (
                        <div className='details'>
                          <p>Detalles adicionales para {data.skill}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className='professional-skills'>
                <h2 className='heading1'>Professional Skills</h2>
                <div className='Technical-bars'>
                  {professionalSkills.map((data, index) => (
                    <div className={`bar ${selectedSkill === index + skillsData.length ? 'active' : ''}`} key={index} onClick={() => handleSkillClick(index + skillsData.length)}>
                      <i className={`fa ${data.iconClass}`} style={{ color: data.color }}></i>
                      <div className='info'>
                        <p>{data.skill}</p>
                      </div>
                      <div className={`progress-line ${selectedSkill === index + skillsData.length ? 'fill-animation' : ''}`}>
                        <span className='animate' style={{ width: data.percentage }}></span>
                      </div>
                      <div className='percentage'>{data.percentage}</div>
                      {selectedSkill === index + skillsData.length && (
                        <div className='details'>
                          <p>Detalles adicionales para {data.skill}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};