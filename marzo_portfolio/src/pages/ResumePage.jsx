import * as React from "react";
import "../App.css";
import resume from "../images/resume.jpg";
import MarzoResume from "../images/MarzoResume.pdf";

import { Document, Page } from "react-pdf";

import { Paper } from "@mui/material";

const ResumePage = () => {
  const [loading, setLoading] = React.useState(true);

  return (
    <div className="Resume-container">
      <Paper className="Resume-img" elevation={3}>
        {/* {loading ? (
          <Document
            file={MarzoResume}
            onLoadSuccess={() => {
              setLoading(false);
              console.log("Done");
            }}
          >
            <Page />
          </Document>
        ) : (
          <p>Document Loading...</p>
        )} */}
        <img src={resume} alt="Loading Document..." className="Resume-img" />
      </Paper>
    </div>
  );
};

export default ResumePage;
