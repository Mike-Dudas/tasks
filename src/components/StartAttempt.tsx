import React, { useState, JSX } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, changeAttempts] = useState<number>(4);
    const [inProgress, changeStatus] = useState<boolean>(false);

    return (
        <div>
            <span>
                {/* Start Quiz */}
                <Button
                    disabled={inProgress || attempts === 0}
                    onClick={() => {
                        changeStatus(true);
                        changeAttempts((prev) => prev - 1);
                    }}
                >
                    Start Quiz
                </Button>

                {/* Stop Quiz */}
                <Button
                    disabled={!inProgress}
                    onClick={() => {
                        changeStatus(false);
                    }}
                >
                    Stop Quiz
                </Button>

                {/* Mulligan */}
                <Button
                    disabled={inProgress}
                    onClick={() => {
                        changeAttempts((prev) => prev + 1);
                    }}
                >
                    Mulligan
                </Button>
            </span>

            <span>Attempts: {attempts}</span>
        </div>
    );
}
