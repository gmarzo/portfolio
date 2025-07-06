import * as React from "react";
import "../styles/App.css";
import resume from "../images/Marzo_Resume.pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const ResumePage = () => {
  const [loading, setLoading] = React.useState(true);

  return (
    <div className="Resume-container">
      {/* {loading ? (
        <Document
          file={resume}
          onLoadSuccess={() => {
            setLoading(false);
            console.log("Done");
          }}
        >
          <Page pageIndex={0} />
        </Document>
      ) : (
        <p>Document Loading...</p>
      )} */}
      <Document
        file={resume}
        onLoadSuccess={() => {
          setLoading(false);
          console.log("Done");
        }}
      >
        <Page pageIndex={0} key={0} pageNumber={1} />
      </Document>
      {/* <img src={resume} alt="Loading Document..." className="Resume-img" /> */}
    </div>
  );
};

export default ResumePage;
