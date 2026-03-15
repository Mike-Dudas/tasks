import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const COLORS: string[] = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "magenta",
        "white",
        "black",
    ];
    const DEFAULT_COLOR: string = COLORS[0];

    const [color, setColor] = useState<string>(DEFAULT_COLOR);

    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((currentColor) => (
                <Form.Check
                    inline
                    key={currentColor}
                    type="radio"
                    name="color"
                    id={`color-${currentColor}`}
                    label={currentColor}
                    value={currentColor}
                    checked={color === currentColor}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setColor(event.target.value);
                    }}
                    style={{ backgroundColor: currentColor }}
                ></Form.Check>
            ))}

            <p>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: color }}
                >
                    {color}
                </span>
                .
            </p>
        </div>
    );
}
