import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");

    function updateUserAnswer(
        event: React.ChangeEvent<HTMLTextAreaElement>,
    ): void {
        setUserAnswer(event.target.value);
    }

    return (
        <div>
            <h3>Check Answer</h3>

            <Form.Group controlId="formShortAnswer">
                <Form.Label>Your Answer:</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    value={userAnswer}
                    onChange={updateUserAnswer}
                ></Form.Control>
            </Form.Group>

            <p>{userAnswer === expectedAnswer ? "✔️" : "❌"}</p>
        </div>
    );
}
