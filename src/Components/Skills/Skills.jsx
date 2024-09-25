import React, { useState, useEffect } from 'react';
import './Skills.css';

const SkillS = () => {
  const [isMobile, setIsMobile] = useState(false);

  
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <>
      <div className="skillcon">
        <h1>Skills</h1>
        <ul className="Collection">
          <li>
            <div className="skill-item">
              <i className={`ci ci-java ${isMobile ? 'ci-3x' : 'ci-6x'}`}></i>
              <div className="skill-name">JAVA</div>
            </div>
          </li>
          <li>
            <div className="skill-item">
              <i className={`ci ci-html ${isMobile ? 'ci-3x' : 'ci-6x'}`}></i>
              <div className="skill-name">HTML</div>
            </div>
          </li>
          <li>
            <div className="skill-item">
              <i className={`ci ci-css ${isMobile ? 'ci-3x' : 'ci-6x'}`}></i>
              <div className="skill-name">CSS</div>
            </div>
          </li>
          <li>
            <div className="skill-item">
              <i className={`ci ci-js ${isMobile ? 'ci-3x' : 'ci-6x'}`}></i>
              <div className="skill-name">JavaScript</div>
            </div>
          </li>
          <li>
            <div className="skill-item">
              <i className={`ci ci-react ${isMobile ? 'ci-3x' : 'ci-6x'}`}></i>
              <div className="skill-name">React Js</div>
            </div>
          </li>
          <li>
            <div className="skill-item">
              <i className={`ci ci-node ${isMobile ? 'ci-3x' : 'ci-6x'}`}></i>
              <div className="skill-name">Node Js</div>
            </div>
          </li>
          <li>
            <div className="skill-item">
              <i className={`ci ci-mongodb ${isMobile ? 'ci-3x' : 'ci-6x'}`}></i>
              <div className="skill-name">MongoDB</div>
            </div>
          </li>
          <li>
            <div className="skill-item">
              <i className={`ci ci-expressjs ${isMobile ? 'ci-3x' : 'ci-6x'}`}></i>
              <div className="skill-name">Express Js</div>
            </div>
          </li>
          <li>
            <div className="skill-item">
              <i className={`ci ci-mysql ${isMobile ? 'ci-3x' : 'ci-6x'}`}></i>
              <div className="skill-name">SQL</div>
            </div>
          </li>
          <li>
            <div className="skill-item">
              <i className={`ci ci-postman ${isMobile ? 'ci-3x' : 'ci-6x'}`}></i>
              <div className="skill-name">Postman</div>
            </div>
          </li>
          <li>
            <div className="skill-item">
              <i className={`ci ci-git ${isMobile ? 'ci-3x' : 'ci-6x'}`}></i>
              <div className="skill-name">Git</div>
            </div>
          </li>
          <li>
            <div className="skill-item">
              <i className={`ci ci-python ${isMobile ? 'ci-3x' : 'ci-6x'}`}></i>
              <div className="skill-name">Python</div>
            </div>
          </li>
          <li>
            <div className="skill-item">
              <i className={`ci ci-azure ${isMobile ? 'ci-3x' : 'ci-6x'}`}></i>
              <div className="skill-name">Azure</div>
            </div>
          </li>
          <li>
            <div className="skill-item">
              <i className={`ci ci-npm ${isMobile ? 'ci-3x' : 'ci-6x'}`}></i>
              <div className="skill-name">npm</div>
            </div>
          </li>
          <li>
            <div className="skill-item">
              <i className={`ci ci-tailwind ${isMobile ? 'ci-3x' : 'ci-6x'}`}></i>
              <div className="skill-name">Tailwind CSS</div>
            </div>
          </li>
          <li>
            <div className="skill-item">
              <i className={`ci ci-redux ${isMobile ? 'ci-3x' : 'ci-6x'}`}></i>
              <div className="skill-name">Redux</div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SkillS
