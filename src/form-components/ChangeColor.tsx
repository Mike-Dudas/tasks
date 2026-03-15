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
            {COLORS.map((color) => (
                <Form.Check
                    inline
                    key={color}
                    type="radio"
                    name="color"
                    id={`color-${color}`}
                    label={color}
                    value={color}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setColor(event.target.value);
                    }}
                    style={{ backgroundColor: color }}
                ></Form.Check>
            ))}

            <p>
                You have chosen{" "}
                <span style={{ backgroundColor: color }}>{color}</span>.
            </p>
        </div>
    );
}
