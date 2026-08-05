/**
 * ============================================================
 * ARJUN EOS
 * Quiz Intelligence Repository
 *
 * Contract : QUIZ-INTELLIGENCE-002
 * Layer    : Repository
 * Purpose  : Stores Enterprise Quiz Intelligence Sessions.
 * ============================================================
 */

const STORAGE_KEY =
    "arjun.eos.quiz.intelligence";

export default class QuizIntelligenceRepository {

    //--------------------------------------------------
    // Read All Sessions
    //--------------------------------------------------

    getAll() {

        const data =

            localStorage.getItem(

                STORAGE_KEY

            );

        return data

            ? JSON.parse(data)

            : [];

    }

    //--------------------------------------------------
    // Save All Sessions
    //--------------------------------------------------

    saveAll(sessions) {

        localStorage.setItem(

            STORAGE_KEY,

            JSON.stringify(

                sessions

            )

        );

    }

    //--------------------------------------------------
    // Save Session
    //--------------------------------------------------

    save(session) {

        const sessions =

            this.getAll();

        const index =

            sessions.findIndex(

                item =>

                    item.sessionId ===

                    session.sessionId

            );

        if (index >= 0) {

            sessions[index] =

                session;

        }

        else {

            sessions.push(

                session

            );

        }

        this.saveAll(

            sessions

        );

        return session;

    }

    //--------------------------------------------------
    // Find Session
    //--------------------------------------------------

    findById(sessionId) {

        return this

            .getAll()

            .find(

                session =>

                    session.sessionId ===

                    sessionId

            );

    }

    //--------------------------------------------------
    // Delete Session
    //--------------------------------------------------

    delete(sessionId) {

        const sessions =

            this.getAll().filter(

                session =>

                    session.sessionId !==

                    sessionId

            );

        this.saveAll(

            sessions

        );

    }

    //--------------------------------------------------
    // Clear Repository
    //--------------------------------------------------

    clear() {

        localStorage.removeItem(

            STORAGE_KEY

        );

    }

    //--------------------------------------------------
    // Statistics
    //--------------------------------------------------

    getStatistics() {

        const sessions =

            this.getAll();

        return {

            totalSessions:

                sessions.length,

            runningSessions:

                sessions.filter(

                    session =>

                        session.status ===

                        "RUNNING"

                ).length,

            completedSessions:

                sessions.filter(

                    session =>

                        session.status ===

                        "COMPLETED"

                ).length,

            failedSessions:

                sessions.filter(

                    session =>

                        session.status ===

                        "FAILED"

                ).length

        };

    }

}