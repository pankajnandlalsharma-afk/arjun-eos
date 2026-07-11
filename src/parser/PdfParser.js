import * as pdfjsLib from "pdfjs-dist";

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

class PdfParser {
  async extractText(file) {
    try {
      const arrayBuffer = await file.arrayBuffer();

      const pdf = await pdfjsLib.getDocument({
        data: arrayBuffer,
      }).promise;

      let fullText = "";

      for (let pageNo = 1; pageNo <= pdf.numPages; pageNo++) {
        const page = await pdf.getPage(pageNo);

        const content = await page.getTextContent();

        const pageText = content.items
          .map(item => item.str)
          .join(" ");

        fullText += pageText + "\n\n";
      }

      return {
        success: true,
        pages: pdf.numPages,
        text: fullText
      };

    } catch (error) {
      console.error(error);

      return {
        success: false,
        error: error.message
      };
    }
  }
}

export default new PdfParser();