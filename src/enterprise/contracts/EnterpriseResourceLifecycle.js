/**
 * ============================================================
 * ARJUN EOS
 * Enterprise Resource Lifecycle
 * ============================================================
 * Defines the official lifecycle of every Enterprise Resource.
 * Every department must use these states.
 * ============================================================
 */

const EnterpriseResourceLifecycle = Object.freeze({

    REGISTERED: "REGISTERED",

    STORED: "STORED",

    INSPECTED: "INSPECTED",

    EXTRACTED: "EXTRACTED",

    VALIDATED: "VALIDATED",

    PACKAGED: "PACKAGED",

    QUIZ_READY: "QUIZ_READY",

    ARCHIVED: "ARCHIVED"

});

export default EnterpriseResourceLifecycle;