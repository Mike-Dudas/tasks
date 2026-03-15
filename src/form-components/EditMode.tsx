import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editModeStatus, setModeStatus] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    return (
        <div>
            <h3>Edit Mode</h3>

            <Form.Check
                type="switch"
                label={`Edit mode: ${editModeStatus ? "enabled" : "disabled"}`}
                checked={editModeStatus}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setModeStatus(event.target.checked);
                }}
            ></Form.Check>

            {editModeStatus ?
                <Form.Group id="editMode">
                    <Form.Control
                        type="text"
                        value={name}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>,
                        ) => {
                            setName(event.target.value);
                        }}
                    ></Form.Control>

                    <Form.Check
                        type="checkbox"
                        label="Student?"
                        checked={isStudent}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>,
                        ) => {
                            setIsStudent(event.target.checked);
                        }}
                    ></Form.Check>
                </Form.Group>
            :   <p>
                    {name} is {isStudent ? "a student." : "not a student"}
                </p>
            }
        </div>
    );
}
