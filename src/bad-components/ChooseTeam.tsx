import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";

const PEOPLE = [
    "Alan Turing",
    "Grace Hopper",
    "Ada Lovelace",
    "Charles Babbage",
    "Barbara Liskov",
    "Margaret Hamilton",
];

export function ChooseTeam(): React.JSX.Element {
    const [people, setPeople] = useState<string[]>(PEOPLE);
    const [team, setTeam] = useState<string[]>([]);

    return (
        <div>
            <h3>Choose Team</h3>
            <Row>
                <Col>
                    {people.map((person: string) => (
                        <div key={person} style={{ marginBottom: "4px" }}>
                            Add{" "}
                            <Button
                                onClick={() => {
                                    if (!team.includes(person))
                                        setTeam([...team, person]);
                                }}
                                size="sm"
                            >
                                {person}
                            </Button>
                        </div>
                    ))}
                </Col>
                <Col>
                    <strong>Team:</strong>
                    {team.map((member: string) => (
                        <li key={member}>{member}</li>
                    ))}
                    <Button
                        onClick={() => {
                            setTeam([]);
                            setPeople([...PEOPLE]);
                        }}
                    >
                        Clear Team
                    </Button>
                </Col>
            </Row>
        </div>
    );
}
