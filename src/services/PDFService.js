import * as pdfjsLib from "pdfjs-dist";

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url
).toString();

export async function readPDF(file) {

    const arrayBuffer = await file.arrayBuffer();

    const loadingTask = pdfjsLib.getDocument({
        data: arrayBuffer
    });

    const pdf = await loadingTask.promise;

    const page = await pdf.getPage(1);

    const textContent = await page.getTextContent();

    const text = textContent.items
        .map(item => item.str)
        .join(" ");

    return text;

}