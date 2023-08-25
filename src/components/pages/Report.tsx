import { pdfjs } from "react-pdf";
import SinglePage from '../Report/single-page';
import { Main } from "../Main";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export function Report() {
  return (
    <Main>
      <div>
        <SinglePage pdf_path="/assets/pdf/exemple_pdf.pdf" />
      </div>
    </Main>
  );
}