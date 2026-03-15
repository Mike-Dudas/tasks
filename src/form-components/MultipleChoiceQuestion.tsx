import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const DEFAULT_SELECTION: string = options[0];

    const [selectedAnswer, setSelected] = useState<string>(DEFAULT_SELECTION);

    return (
        <div>
            <h3>Multiple Choice Question</h3>

            <Form.Group controlId="multipleChoice">
                <Form.Label>Select an answer from the dropdown:</Form.Label>
                <Form.Select
                    value={selectedAnswer}
                    onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                        setSelected(event.target.value);
                    }}
                >
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <p>{selectedAnswer === expectedAnswer ? "✔️" : "❌"}</p>
        </div>
    );
}
