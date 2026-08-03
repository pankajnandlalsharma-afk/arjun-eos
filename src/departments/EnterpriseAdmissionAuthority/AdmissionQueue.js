/**
 * ============================================================
 * ARJUN EOS
 * Enterprise Admission Authority
 *
 * Admission Queue
 * ADM-001-SVC-001
 * ============================================================
 *
 * Purpose
 * -------
 * Maintains the queue of Knowledge Assets awaiting
 * Enterprise Admission.
 * ============================================================
 */

export default class AdmissionQueue {

    constructor() {

        this.pending = [];

        this.approved = [];

        this.rejected = [];

    }

    enqueue(ticket) {

        this.pending.push(ticket);

        return ticket;

    }

    approve(ticketId) {

        const index = this.pending.findIndex(

            ticket => ticket.ticketId === ticketId

        );

        if (index === -1) {

            throw new Error("Admission Ticket not found.");

        }

        const ticket = this.pending.splice(index, 1)[0];

        ticket.approve();

        this.approved.push(ticket);

        return ticket;

    }

    reject(ticketId, reason) {

        const index = this.pending.findIndex(

            ticket => ticket.ticketId === ticketId

        );

        if (index === -1) {

            throw new Error("Admission Ticket not found.");

        }

        const ticket = this.pending.splice(index, 1)[0];

        ticket.reject(reason);

        this.rejected.push(ticket);

        return ticket;

    }

    getPending() {

        return this.pending;

    }

    getApproved() {

        return this.approved;

    }

    getRejected() {

        return this.rejected;

    }

    getStatistics() {

        return {

            pending: this.pending.length,

            approved: this.approved.length,

            rejected: this.rejected.length,

            total:

                this.pending.length +

                this.approved.length +

                this.rejected.length

        };

    }

}