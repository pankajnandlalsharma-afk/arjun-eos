import * as pdfjsLib from "pdfjs-dist";

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url
).toString();

export async function readPDF(file) {

    try {

        const arrayBuffer = await file.arrayBuffer();

        const loadingTask = pdfjsLib.getDocument({
            data: arrayBuffer
        });

        const pdf = await loadingTask.promise;

        let fullText = "";

        for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {

            const page = await pdf.getPage(pageNumber);

            const textContent = await page.getTextContent();

            const pageText = textContent.items
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