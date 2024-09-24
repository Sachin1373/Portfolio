import React from "react";
import './Home.css'

function Home() {
  return (
    <>
      <div className="home">
        <h1>SACHIN V. RATHOD</h1>
        <p>
          Aspiring Computer Science graduate with expertise in
         <span className="mark"> MERN </span>. Proven in full-stack
          development, adept at problem-solving and quick to adapt to new
          technologies.
        </p>
        <div className="buttons">
            <button onClick={()=> window.open('https://peach-gabrielle-34.tiiny.site')}>Resume</button>
            <button onClick={()=> window.open('https://www.linkedin.com/in/sachin-rathod-8958542a3/')}>Linked In</button>
            <button onClick={()=> window.open('https://github.com/Sachin1373/')}>GitHub</button>
        </div>
      </div>
    </>
  );
}

export default Home;
