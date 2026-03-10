import React, { useState, JSX } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question",
    );

    const QUESTION_TRANSITION: Record<QuestionType, QuestionType> = {
        short_answer_question: "multiple_choice_question",
        multiple_choice_question: "short_answer_question",
    };

    function changeQuestionType(): void {
        setQuestionType(QUESTION_TRANSITION[questionType]);
    }

    return (
        <div>
            <Button onClick={changeQuestionType}>Change Type</Button>
            {questionType === "short_answer_question" && (
                <span>Short Answer</span>
            )}
            {questionType === "multiple_choice_question" && (
                <span>Multiple Choice</span>
            )}
        </div>
    );
}
