import React, { useState, JSX } from "react";
import { Button } from "react-bootstrap";

// /**
//  * Here is a helper function you *must* use to "roll" your die.
//  * The function uses the builtin `random` function of the `Math`
//  * module (which returns a random decimal between 0 up until 1) in order
//  * to produce a random integer between 1 and 6 (inclusive).
//  */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(1);
    const [rightDie, setRightDie] = useState<number>(2);

    let message: string = "";
    if (leftDie === 1 && rightDie === 1) {
        message = "Lose";
    } else if (leftDie === rightDie) {
        message = "Win";
    }

    return (
        <div>
            <div>
                <span data-testid="left-die">{leftDie}</span>
                {" | "}
                <span data-testid="right-die">{rightDie}</span>
            </div>

            <Button
                onClick={() => {
                    setLeftDie(d6());
                }}
            >
                Roll left
            </Button>
            <Button
                onClick={() => {
                    setRightDie(d6());
                }}
            >
                Roll Right
            </Button>

            <p>{message}</p>
        </div>
    );
}
