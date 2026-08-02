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
                data: arrayBuffer
            }).promise;

            let fullText = "";

            const pagesData = [];

            for (let pageNo = 1; pageNo <= pdf.numPages; pageNo++) {

                const page = await pdf.getPage(pageNo);

                const content = await page.getTextContent();

                const pageText = content.items
                    .map(item => item.str)
                    .join(" ");

                fullText += pageText + "\n\n";

                pagesData.push({

                    pageNumber: pageNo,

                    text: pageText,

                    wordCount: pageText
                        .split(/\s+/)
                        .filter(Boolean)
                        .length

                });

            }

            return {

                success: true,

                pages: pdf.numPages,

                text: fullText,

                pagesData

            };

        }
        catch (error) {

            console.error(error);

            return {

                success: false,

                error: error.message

            };

        }

    }

}

export default new PdfParser();