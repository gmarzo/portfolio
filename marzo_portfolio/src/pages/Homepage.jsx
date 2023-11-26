import * as React from "react";
import "../App.css";

import {Link} from "react-router-dom"


const Homepage = () => {
  const [clicked, setClicked] = React.useState(false)

  return (
    <div className="Landing-page">
      <div className="Banner">
        <h1 className="Banner-title">Hello World</h1>
        <h2 className="Banner-subtitle">My Name is Garrett</h2>
      </div>

      <div className="Showcase">
        <Link to={"games"}>
          <div className="Portal">
            <p className="Portal-title">Game Projects</p>
            <p>WIP</p>
          </div>
        </Link>
        <Link to={"code"}>
          <div className="Portal">
            <p className="Portal-title">Coding Projects</p>
            <p>WIP</p>
          </div>
        </Link>
        
        <div className="Portal" onClick={() => setClicked(!clicked)}>
          {clicked ? <p>I've been clicked!</p> : <p>Click me!</p>}
        </div>
        <Link to={"about"}>
          <div className="Portal">
            <p className="Portal-title">About</p>
            <p>WIP</p>
          </div>
        </Link>  
      </div>
    </div>
  );
};

export default Homepage;
