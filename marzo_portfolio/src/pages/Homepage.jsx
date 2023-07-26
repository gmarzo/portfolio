import * as React from "react";
import "../App.css";

const Homepage = () => {
  return (
    <div className="Landing-page">
      <div className="Banner">
        <h1 className="Banner-title">Hello World</h1>
        <h2 className="Banner-subtitle">My Name is Garrett</h2>
      </div>

      <div className="Showcase">
        <div className="Portal">
          <p>Game Projects</p>
        </div>
        <div className="Portal">
          <p>Coding Projects</p>
        </div>
        <div className="Portal">
          <p>Something else</p>
        </div>
        <div className="Portal">
          <p>About</p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
