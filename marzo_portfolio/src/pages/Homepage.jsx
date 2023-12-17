import * as React from "react";
import "../App.css";

import {Link} from "react-router-dom"
import {Paper} from "@mui/material"

const Homepage = () => {
  const [clicked, setClicked] = React.useState(false)

  return (
    <div className="Landing-page">
      <div className="Banner">
        <h1 className="Banner-title">Hello World</h1>
        <h2 className="Banner-subtitle">My Name is Garrett</h2>
      </div>

      <div className="Showcase">
        <div className="Showcase-container">
          <Link to={"games"}>
            <Paper className="Portal" elevation={3}>
              <p className="Portal-title">Game Projects</p>
              <p>WIP</p>
            </Paper>
          </Link>

          <Link to={"code"}>
            <Paper className="Portal" elevation={3}>
              <p className="Portal-title">Coding Projects</p>
              <p>WIP</p>
            </Paper>
          </Link>
          
          <Link to={"about"}>
            <Paper className="Portal" elevation={3}>
              <p className="Portal-title">About</p>
              <p>WIP</p>
            </Paper>
          </Link>
        </div>  
      </div>
    </div>
  );
};

export default Homepage;
