/**
 * ============================================================
 * ARJUN EOS
 * Enterprise Vocabulary Standard
 * STD-001
 * ============================================================
 *
 * Every UI, Department, AI Agent, Report and Workflow
 * MUST use these approved enterprise terms.
 *
 * Never hardcode business terminology.
 * Import from EnterpriseVocabulary instead.
 * ============================================================
 */

const EnterpriseVocabulary = {

    //--------------------------------------------------
    // Enterprise Identity
    //--------------------------------------------------

    APPLICATION_NAME: "ARJUN EOS",

    ENTERPRISE: "Enterprise",

    KNOWLEDGE_ASSET: "Knowledge Asset",

    ENTERPRISE_RESOURCE: "Enterprise Resource",

    KNOWLEDGE_COLLECTION: "Knowledge Collection",

    ENTERPRISE_KNOWLEDGE_PROGRAM: "Enterprise Knowledge Program",

    //--------------------------------------------------
    // Enterprise Departments
    //--------------------------------------------------

    ENTERPRISE_ADMISSION_AUTHORITY:
        "Enterprise Admission Authority",

    ENTERPRISE_RECEIVING_DEPARTMENT:
        "Enterprise Receiving Department",

    KNOWLEDGE_VALIDATION_DEPARTMENT:
        "Knowledge Validation Department",

    KNOWLEDGE_ASSIMILATION_DEPARTMENT:
        "Knowledge Assimilation Department",

    KNOWLEDGE_REPOSITORY_DEPARTMENT:
        "Knowledge Repository Department",

    ENTERPRISE_INTELLIGENCE_DEPARTMENT:
        "Enterprise Intelligence Department",

    //--------------------------------------------------
    // Enterprise Actions
    //--------------------------------------------------

    ACTION_ACQUIRE_KNOWLEDGE_ASSET:
        "Acquire Knowledge Asset",

    ACTION_AUTHORIZE_ADMISSION:
        "Authorize Enterprise Admission",

    ACTION_VALIDATE:
        "Validate Knowledge Asset",

    ACTION_ASSIMILATE:
        "Assimilate Knowledge",

    ACTION_CERTIFY:
        "Enterprise Certification",

    ACTION_RETRIEVE:
        "Knowledge Retrieval",

    //--------------------------------------------------
    // Enterprise Status
    //--------------------------------------------------

    STATUS_WAITING:
        "Awaiting Enterprise Admission",

    STATUS_ADMITTED:
        "Knowledge Asset Admitted",

    STATUS_VALIDATION:
        "Knowledge Validation In Progress",

    STATUS_ASSIMILATION:
        "Knowledge Assimilation In Progress",

    STATUS_CERTIFIED:
        "Enterprise Certified",

    STATUS_EXCEPTION:
        "Admission Exception",

    //--------------------------------------------------
    // Enterprise Locations
    //--------------------------------------------------

    ADMISSION_QUEUE:
        "Enterprise Admission Queue",

    VALIDATION_CHAMBER:
        "Knowledge Validation Chamber",

    ASSIMILATION_ENGINE:
        "Knowledge Assimilation Engine",

    KNOWLEDGE_REPOSITORY:
        "Enterprise Knowledge Repository",

    COMMAND_CENTER:
        "Enterprise Command Center"

};

export default EnterpriseVocabulary;