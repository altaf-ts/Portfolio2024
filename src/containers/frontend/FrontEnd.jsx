// FrontEnd.jsx
import React from "react";
import './styles.scss'; // Ensure styles.scss exists if you're using it

const FrontEnd = () => {
  return (
    <div className="frontend">
      <h2>Frontend Skills</h2>
      <nav className="frontend-nav">
        <ul className="frontend-nav__list">
          <li className="frontend-nav__item">HTML</li>
          <li className="frontend-nav__item">CSS</li>
          <li className="frontend-nav__item">JavaScript</li>
          <li className="frontend-nav__item">ReactJS</li>
        </ul>
      </nav>
      <div className="frontend-content">
        <p>Select a skill to learn more.</p>
      </div>
    </div>
  );
};

export default FrontEnd;
