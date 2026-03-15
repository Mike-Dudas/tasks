import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsRequesting, setAttemptsRequesting] = useState<number>(0);

    return (
        <div>
            <h3>Give Attempts</h3>

            <p>Attempts remaining: {attemptsLeft}</p>

            <Form.Group controlId="quizAttempts">
                <Button
                    disabled={attemptsLeft === 0}
                    onClick={() => {
                        setAttemptsLeft(attemptsLeft - 1);
                    }}
                >
                    use
                </Button>

                <Button
                    onClick={() => {
                        setAttemptsLeft(attemptsLeft + attemptsRequesting);
                    }}
                >
                    gain
                </Button>

                <Form.Control
                    type="number"
                    value={attemptsRequesting}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setAttemptsRequesting(
                            parseInt(event.target.value) || 0,
                        );
                    }}
                ></Form.Control>
            </Form.Group>
        </div>
    );
}
