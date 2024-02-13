import * as React from "react";
import "../styles/About.css";
import gh from "../images/github-logo.png";
import lk from "../images/linkedin-logo.png";
import selfie from "../images/the_one_picture_i_have.png";

import { Paper } from "@mui/material";

import SkillsList from "./components/SkillsList";
import LanguagesList from "./components/LanguagesList";

const AboutPage = () => {
  return (
    <div className="container">
      <h2 className="section-title">Hi there!</h2>
      <div className="content-container">
        <p className="section-content" id="intro">
          &emsp;&emsp;My name is Garrett Marzo. I'm a Software Developer that
          graduted with a Bachelor's Degree in Computer Science from Loyola
          Marymout University. Attending LMU is where I first learned and grew a
          love for programming, and in my time since beginning I've grown enough
          to be able to help instruct my juniors and peers as a tutor, develop
          full-stack projects, and represent my school in the International
          Collegiate Programming Competition (ICPC).
          <br />
          &emsp;&emsp;I want to hone my skills as a software developer and
          programmer, and turn the passion I've found into a career.
        </p>
        <Paper style={{ height: 300, width: 175, marginLeft: 50 }}>
          <img src={selfie} alt="" className="pfp" />
        </Paper>
      </div>

      <h2 className="section-title">Coursework</h2>
      <div className="content-container">
        <p className="section-content">
          &emsp;&emsp;In my time programming, I've had relevant coursework
          fostering a multitude of skills such as:
          <SkillsList />
          <br />
          &emsp;&emsp;My coursework has also let me learn and gain proficieny in
          a variety of programming languages:
          <LanguagesList />
        </p>
      </div>

      <h2 className="section-title">Experience</h2>
      <div className="content-container">
        <p className="section-content">
          &emsp;&emsp;For the 2 years following quarantine, I had contributed as
          a TA/tutor working in our school's computer lab. This entailed
          assisting other students in thier own coursework and also properly
          using tools like GitHub or text-based IDE's and code editors. My
          primary focus was for the CMSI 1010 class, which had a focus on
          introductory programming concepts and syntax through Python. I would
          often help with the understanding of homework assignments and the
          purpose of certain data structures, concepts, and debugging of
          programs. The work was fulfilling, and gave me the chance to help
          people with the work that I had struggled with and gained an
          understanding of in the past.
          <br />
          &emsp;&emsp;As part of my position, I was also in charge of leading a
          small team of other TA's in grading the homework for the CMSI 1010
          class. We had to judge the quality of thier programs, gauge whether or
          not they had a good understanding of the concepts at play, and then
          provide detailed feedback for the students and professors. The
          students' assignments and feedback were handled through GitHub, while
          we kept track of any scores and personal notes through a shared Google
          Sheet.
          <br />
          &emsp;&emsp;I am currently working part-time with TheCoderSchool in
          Redondo Beach, CA. I am a Code Coach there, teaching programming to
          students from 6-18. We use a variety of tools, from visual block
          coding languages such as Scratch or Microsoft MakeCode, to using tools
          and IDEs such as Unity and replit. I also teach afterschool classes
          where our students are learning to use HTML5 and CSS to create thier
          own portfolio website pages.
        </p>
      </div>

      <div className="Links-container">
        <Paper
          elevation={5}
          className="link-page"
          style={{ backgroundColor: "#404040" }}
        >
          <a href="https://github.com/gmarzo">
            <img src={gh} alt="" style={{ height: 200, width: 200 }} />
          </a>
        </Paper>

        <Paper
          elevation={5}
          className="link-page"
          style={{ backgroundColor: "#ececec" }}
        >
          <a href="https://www.linkedin.com/in/garrett-marzo-a1315418b/">
            <img src={lk} alt="" style={{ height: 200, width: 200 }} />
          </a>
        </Paper>
      </div>
    </div>
  );
};

export default AboutPage;
