/**
 * ====================================================
 * ARJUN EOS
 * Quiz Timer
 * ====================================================
 */

import { useEffect, useState } from "react";

function QuizTimer({
    duration = 60,
    onTimeUp
}) {

    const [timeLeft, setTimeLeft] = useState(duration);

    useEffect(() => {

        if (timeLeft <= 0) {

            onTimeUp?.();

            return;

        }

        const timer = setTimeout(() => {

            setTimeLeft(previous => previous - 1);

        }, 1000);

        return () => clearTimeout(timer);

    }, [timeLeft, onTimeUp]);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return (

        <div
            style={{
                padding: "15px",
                border: "1px solid #d1d5db",
                borderRadius: "10px",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "18px"
            }}
        >

            ⏱ Time Left : {" "}
            {String(minutes).padStart(2, "0")}:
            {String(seconds).padStart(2, "0")}

        </div>

    );

}

export default QuizTimer;