import { Fragment, useState} from "react";
import { Document, Page } from 'react-pdf';
import programPDF from '../images/PlaidProgram.pdf';

const Program = () => {
    const [numPages, setNumPages] = useState(null);
  
    function onDocumentLoadSuccess({ numPages:nextNumPages}:any) {
        setNumPages(nextNumPages);
      }
  
    return (
      <Fragment>
        <Document
          file={programPDF}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {
              Array.from(
                new Array(numPages),
                (el, index) => (
                  <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                  />
                ),
              )
            }
        </Document>
      </Fragment>
    );
};
export default Program;
