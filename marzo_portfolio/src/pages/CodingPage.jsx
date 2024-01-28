import * as React from 'react'
import '../styles/Coding.css'

import gh from "../images/github-logo.png"

import { Paper, Tooltip } from '@mui/material'

const CodingPage = () => {

  return(
    <div className="container">
      <h2 className="desc-text">See my previous Coursework Here!</h2>
      <Tooltip title="https://github.com/gmarzo/coursework/" arrow>
        <a href="https://github.com/gmarzo/coursework/">
          <Paper className="portal">
            <img src={gh} alt=""/>
          </Paper>
        </a>
      </Tooltip>
    </div>
    )
}

export default CodingPage