/**
 * ============================================================
 * ARJUN EOS
 * Enterprise Import Workflow
 * WKF-IMP-001
 * ============================================================
 *
 * Orchestrates the complete Enterprise Import Process.
 * ============================================================
 */

import AdmissionTicket from "../../departments/EnterpriseAdmissionAuthority/AdmissionTicket";
import AdmissionQueue from "../../departments/EnterpriseAdmissionAuthority/AdmissionQueue";
import EnterpriseReceivingService from "../../departments/EnterpriseReceivingDepartment/EnterpriseReceivingService";

import PdfParser from "../../parser/PdfParser";
import KnowledgeExtractionEngine from "../../feature/KnowledgeExtractionEngine";

import ImportWorkflowResult from "./ImportWorkflowResult";

export default class ImportWorkflow {

    constructor() {

        this.admissionQueue = new AdmissionQueue();

        this.receivingService = new EnterpriseReceivingService();

    }

    async execute({

        knowledgeAsset,

        source = "External World",

        requestedBy = "Knowledge Acquisition Department"

    }) {

        if (!knowledgeAsset) {

            throw new Error("Knowledge Asset is required.");

        }

        try {

            //--------------------------------------------------
            // STEP 1 : Enterprise Admission
            //--------------------------------------------------

            const admissionTicket = new AdmissionTicket({

                ticketId: "AT-" + Date.now(),

                knowledgeAssetName: knowledgeAsset.name,

                knowledgeAssetType: knowledgeAsset.type,

                source,

                requestedBy

            });

            this.admissionQueue.enqueue(

                admissionTicket

            );

            this.admissionQueue.approve(

                admissionTicket.ticketId

            );

            //--------------------------------------------------
            // STEP 2 : Enterprise Receiving
            //--------------------------------------------------

            const receivingResult =

                this.receivingService.receive(

                    {

                        gatePassId:

                            admissionTicket.ticketId,

                        source

                    },

                    knowledgeAsset

                );

            //--------------------------------------------------
            // STEP 3 : PDF Parsing
            //--------------------------------------------------

            const pdfResult =

                await PdfParser.extractText(

                    knowledgeAsset

                );

            if (!pdfResult.success) {

                return new ImportWorkflowResult({

                    success: false,

                    admissionTicket,

                    enterpriseResource:

                        receivingResult.enterpriseResource,

                    statistics:

                        this.admissionQueue.getStatistics(),

                    message:

                        "PDF Parsing Failed",

                    error:

                        pdfResult.error

                });

            }

            //--------------------------------------------------
            // STEP 4 : Knowledge Extraction
            //--------------------------------------------------

            const extractor =

                new KnowledgeExtractionEngine();

            const knowledge =

                extractor.extract({

                    resource:

                        receivingResult.enterpriseResource,

                    text:

                        pdfResult.text

                });

            //--------------------------------------------------
            // STEP 5 : Store Metadata
            //--------------------------------------------------

            receivingResult.enterpriseResource.metadata = {

                pages:

                    pdfResult.pages,

                fileSize:

                    knowledgeAsset.size,

                mimeType:

                    knowledgeAsset.type,

                importedAt:

                    new Date().toISOString()

            };

            //--------------------------------------------------
            // STEP 6 : Enterprise Result
            //--------------------------------------------------

            return new ImportWorkflowResult({

                success: true,

                admissionTicket,

                enterpriseResource:

                    receivingResult.enterpriseResource,

                statistics:

                    this.admissionQueue.getStatistics(),

                knowledge,

                pdf:

                    pdfResult,

                message:

                    "Knowledge Asset Imported Successfully"

            });

        }

        catch (error) {

            return new ImportWorkflowResult({

                success: false,

                message:

                    "Enterprise Import Failed",

                error:

                    error.message

            });

        }

    }

}