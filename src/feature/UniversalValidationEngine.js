export default class UniversalValidationEngine {

    validate(item) {

        return {

            id: item.id,

            fileName: item.fileName,

            sourceType: item.sourceType,

            valid: true,

            duplicate: false,

            encrypted: false,

            corrupted: false,

            passwordProtected: false,

            supported: true,

            fileSize: item.size,

            validatedAt: new Date(),

            status: "Validated",

            nextStep: "Knowledge Inspection Engine"

        };

    }

}