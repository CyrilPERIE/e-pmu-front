import { useState } from "react";
import { Document, Page } from "react-pdf";
import styled from "styled-components";

//Obligé de faire ça sinon gros espace en dessous
export const SinglePageStyle = styled.div<{}>(() => ({
  ".react-pdf__Page__textContent, .react-pdf__Page__annotations ": {
    display: "none",
  },
}));

export default function SinglePage({pdf_path}: any) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page

  function onDocumentLoadSuccess({numPages}: any) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset: number) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  const pdf: string = pdf_path;

  return (
    <SinglePageStyle>
      <Document
        file={pdf}
        options={{ workerSrc: "/pdf.worker.js" }}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      {numPages != null && <div>
        <p>
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </p>
        <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
          Previous
        </button>
        <button
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Next
        </button>
      </div>}
    </SinglePageStyle>
  );
}
