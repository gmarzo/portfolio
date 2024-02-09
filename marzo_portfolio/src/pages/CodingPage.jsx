import * as React from "react";
import "../styles/Coding.css";

import pacman from "../clips/pacman_agent.gif";
import hexedVortex from "../clips/hexed-vortex.gif";
import fucko_swing from "../clips/fucko_swing.gif";
import pro_gen from "../images/procedural_gen.png";

import gh from "../images/github-logo.png";

import { Paper, Tooltip } from "@mui/material";
import { flexbox } from "@mui/system";

const CodingPage = () => {
  return (
    <div className="container">
      <div className="proj-display">
        <h1 className="proj-title">Pacman Agent</h1>
        <div className="proj-desc">
          <img src={pacman} alt="Loading..." className="proj-gif" />
          <p className="desc-text">
            A greedy, particle filter based AI Agent, working off of the same
            kind of AI used in Roombas and similar devices. The only information
            Pac-man is given is the distance to each ghost, but must infer the
            direction to each as he and the ghosts are constantly moving.
          </p>
        </div>
      </div>

      <div className="proj-display">
        <h1 className="proj-title">Hexed Vortex Graphic</h1>
        <div className="proj-desc">
          <p className="desc-text">
            Hexed Vortex Graphic is a custom graphics library made using
            Javascript and rendered through a React App using WebGL. This was
            used to make a picnic scene out of the built-in shapes and
            dimensions.
          </p>
          <img src={hexedVortex} alt="loading..." style={{ height: 250 }} />
        </div>
      </div>

      <div className="proj-display">
        <h1 className="proj-title">Fragment</h1>
        <div className="proj-desc">
          <div className="img-col">
            <img src={pro_gen} alt="loading..." style={{ height: 200 }} />
          </div>
          <p className="desc-text">IT'S FRAGGIN' TIME</p>
          <img
            src={fucko_swing}
            alt="loading..."
            style={{
              height: 200,
              width: 150,
              marginTop: 3,
              aspectRatio: "auto",
            }}
          />
        </div>
      </div>

      <Tooltip title="https://github.com/gmarzo/coursework/" arrow>
        <a href="https://github.com/gmarzo/coursework/">
          <Paper className="portal">
            <img src={gh} alt="" />
          </Paper>
        </a>
      </Tooltip>
    </div>
  );
};

export default CodingPage;
