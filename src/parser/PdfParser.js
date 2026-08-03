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

            let totalWords = 0;

            //--------------------------------------------------
            // Read Every Page
            //--------------------------------------------------

            for (let pageNo = 1; pageNo <= pdf.numPages; pageNo++) {

                const page = await pdf.getPage(pageNo);

                const viewport = page.getViewport({
                    scale: 1
                });

                const content = await page.getTextContent();

                const pageText = content.items
                    .map(item => item.str)
                    .join(" ");

                const wordCount = pageText
                    .split(/\s+/)
                    .filter(Boolean)
                    .length;

                totalWords += wordCount;

                fullText += pageText + "\n\n";

                pagesData.push({

                    pageNumber: pageNo,

                    text: pageText,

                    wordCount,

                    characterCount: pageText.length,

                    width: viewport.width,

                    height: viewport.height,

                    orientation:

                        viewport.width > viewport.height

                            ? "Landscape"

                            : "Portrait"

                });

            }

            //--------------------------------------------------
            // Document Statistics
            //--------------------------------------------------

            const statistics = {

                totalPages: pdf.numPages,

                totalWords,

                totalCharacters: fullText.length,

                averageWordsPerPage:

                    pdf.numPages > 0

                        ? Math.round(totalWords / pdf.numPages)

                        : 0

            };

            //--------------------------------------------------
            // Enterprise Metadata
            //--------------------------------------------------

            const metadata = {

                fileName: file.name,

                fileSize: file.size,

                mimeType: file.type,

                importedAt: new Date().toISOString()

            };

            //--------------------------------------------------
            // Return Enterprise Object
            //--------------------------------------------------

            return {

                success: true,

                metadata,

                statistics,

                pages: pdf.numPages,

                pagesData,

                text: fullText,

                capabilities: {

                    text: true,

                    metadata: true,

                    pages: true,

                    statistics: true,

                    images: false,

                    tables: false,

                    bookmarks: false,

                    attachments: false,

                    hyperlinks: false

                }

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