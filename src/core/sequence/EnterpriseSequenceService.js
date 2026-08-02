/**
 * ============================================================
 * ARJUN EOS
 * Enterprise Sequence Service
 * CORE-001
 * ============================================================
 *
 * Purpose
 * -------
 * Generates sequential enterprise numbers.
 *
 * This service is the ONLY authority responsible for
 * generating enterprise identifiers.
 *
 * Examples
 * --------
 * J-000000001
 * GP-000000001
 * ER-000000001
 * ============================================================
 */

class EnterpriseSequenceService {

    constructor() {

        this.counters = {

            JOURNEY: 0,

            GATE_PASS: 0,

            ENTERPRISE_RESOURCE: 0

        };

    }

    nextJourneyId() {

        this.counters.JOURNEY++;

        return "J-" + String(this.counters.JOURNEY).padStart(9, "0");

    }

    nextGatePassId() {

        this.counters.GATE_PASS++;

        return "GP-" + String(this.counters.GATE_PASS).padStart(9, "0");

    }

    nextEnterpriseResourceId() {

        this.counters.ENTERPRISE_RESOURCE++;

        return "ER-" + String(this.counters.ENTERPRISE_RESOURCE).padStart(9, "0");

    }

}

export default new EnterpriseSequenceService();