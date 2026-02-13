import React from "react";
import "./App.css";
import dune from "./assets/pet-dune.jpeg";
import { Container, Row, Col, Button } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>UD CISC275 with React Hooks and TypeScript</h1>
                <p>Michael Dudas</p>
            </header>

            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p>Hello World</p>

            <Container>
                <Row>
                    <Col>
                        <ul style={{ textAlign: "left" }}>
                            <li>My name is Michael</li>
                            <li>I am interested in CS and exercise science</li>
                            <li>I have one brother</li>
                            <li>I have a pet bearded dragon</li>
                        </ul>

                        <div
                            style={{
                                width: "300px",
                                height: "75px",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>

                    <Col>
                        <img
                            src={dune}
                            alt="A picture of my lizard Dune"
                            style={{ width: "300px", height: "350px" }}
                        ></img>
                        <div
                            style={{
                                width: "300px",
                                height: "75px",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>

            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
        </div>
    );
}

export default App;
