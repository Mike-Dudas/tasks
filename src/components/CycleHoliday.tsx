import React, { useState, JSX } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const EMOJIS: Record<string, string> = {
        Halloween: "🎃",
        Thanksgiving: "🦃",
        Christmas: "🎄",
        Easter: "🐰",
        "Fourth of July": "🎆",
    };

    const HOLIDAYS_ALPHABET: Record<string, string> = {
        Christmas: "Easter",
        Easter: "Fourth of July",
        "Fourth of July": "Halloween",
        Halloween: "Thanksgiving",
        Thanksgiving: "Christmas",
    };

    const HOLIDAYS_YEAR: Record<string, string> = {
        Easter: "Fourth of July",
        "Fourth of July": "Halloween",
        Halloween: "Thanksgiving",
        Thanksgiving: "Christmas",
        Christmas: "Easter",
    };

    const [holiday, changeHoliday] = useState<string>("Easter");

    return (
        <div>
            <p>Holiday: {EMOJIS[holiday]}</p>
            <span>
                <Button
                    onClick={() => {
                        changeHoliday(HOLIDAYS_ALPHABET[holiday]);
                    }}
                >
                    Advance by Alphabet
                </Button>
                <Button
                    onClick={() => {
                        changeHoliday(HOLIDAYS_YEAR[holiday]);
                    }}
                >
                    Advance by Year
                </Button>
            </span>
        </div>
    );
}
