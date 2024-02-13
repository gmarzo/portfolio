import * as React from "react";
import "../styles/Coding.css";

import pacman from "../clips/pacman_agent.gif";
import hexedVortex from "../clips/hexed-vortex.gif";
import fucko_swing from "../clips/fucko_swing.gif";
import pro_gen from "../images/procedural_gen.png";
import ps_logo from "../images/PokerScript_logo_spade.png";

import gh from "../images/github-logo.png";

import { Paper, Tooltip } from "@mui/material";

const CodingPage = () => {
  return (
    <div className="container">
      <div className="page-title">Coursework Projects</div>
      <div className="proj-display" style={{ marginTop: 0 }}>
        <h1 className="proj-title">
          <a
            href="https://github.com/gmarzo/coursework/tree/main/Intro%20to%20Artificial%20Intelligence/lmu-cmsi3300-fall2022-homework3-gmarzo_hw3/src"
            target="_blank"
          >
            Pacman Agent
          </a>
        </h1>

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
        <h1 className="proj-title">
          <a
            href="https://github.com/gmarzo/coursework/tree/main/Computer%20Graphics/our-own-3d-library-hexed-vortex-graphic"
            target="_blank"
          >
            Hexed Vortex Graphic
          </a>
        </h1>

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
        <h1 className="proj-title">
          <a href="https://github.com/jasoncd31/Fragment-Game" target="_blank">
            Fragment
          </a>
        </h1>
        <div className="proj-desc">
          <div className="img-col">
            <img src={pro_gen} alt="loading..." style={{ height: 200 }} />
          </div>
          <p className="desc-text">
            A top-down rougelike video game developed in Unity and featuring
            procedurally generated maps. Fragment's assets are made from the
            ground up in collaobration with students from LMU's school of
            animation, and scripts were written using Unity C#.
          </p>
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
      <div className="proj-display">
        <h1 className="proj-title">
          <a href="https://github.com/naratheman/PokerScript" target="_blank">
            PokerScript
          </a>
        </h1>
        <div className="proj-desc">
          <img src={ps_logo} alt="" style={{ height: 200 }} />
          <p className="desc-text">
            A casino/gambling themed programming language and compiler. Uses a
            separate parser, lexer, analyzer, and optimizer to read a
            PokerScript program and transpile it into JavaScript.
            <br />
            <br />
            See PokerScript's website{" "}
            <a
              href="https://naratheman.github.io/WebsitePokerScript/#"
              target="_blank"
            >
              here
            </a>
            .
          </p>
        </div>
      </div>
      <p style={{ fontFamily: "Trebuchet MS", fontSize: "26pt" }}>
        See my other coursework on GitHub!
      </p>
      <Tooltip title="https://github.com/gmarzo/coursework/" arrow>
        <a href="https://github.com/gmarzo/coursework/" target="_blank">
          <Paper className="portal">
            <img src={gh} alt="" />
          </Paper>
        </a>
      </Tooltip>
    </div>
  );
};

export default CodingPage;
