import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { makeBlankQuestion, duplicateQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    return questions.filter((q: Question): boolean => q.published);
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    return questions.filter((q: Question): boolean => {
        return !(q.body === "" && q.expected === "" && q.options.length === 0);
    });
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number,
): Question | null {
    const correctQuestion: Question | undefined = questions.find(
        (q: Question) => {
            if (q.id === id) return q;
        },
    );

    return correctQuestion === undefined ? null : correctQuestion;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    return questions.filter((q: Question): boolean => q.id !== id);
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    return questions.map((q: Question): string => q.name);
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    return questions.reduce(
        (totalPoints: number, q: Question) => totalPoints + q.points,
        0,
    );
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    return questions.reduce((totalPublished: number, q: Question) => {
        if (q.published) return totalPublished + q.points;
        else return totalPublished;
    }, 0);
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    let toString: string = "id,name,options,points,published";
    if (questions.length > 0) toString += "\n";

    toString += questions.reduce(
        (totalString: string, q: Question, i: number) => {
            totalString += `${q.id},${q.name},${q.options.length},${q.points},${q.published}`;
            if (i !== questions.length - 1) totalString += "\n";
            return totalString;
        },
        "",
    );
    return toString;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    return questions.map((q: Question): Answer => {
        return {
            questionId: q.id,
            text: "",
            submitted: false,
            correct: false,
        };
    });
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    return questions.map((q: Question): Question => {
        return {
            ...q,
            published: true,
        };
    });
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    if (questions.length === 0) return true;

    const type: string = questions[0].type;

    const numberQuestionTypes: number = questions.reduce(
        (differentQuestionTypes: number, q: Question) => {
            if (q.type !== type) ++differentQuestionTypes;
            return differentQuestionTypes;
        },
        0,
    );
    return numberQuestionTypes === 0 ? true : false;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType,
): Question[] {
    let newQuestions = questions.map((q: Question): Question => q);
    newQuestions.push(makeBlankQuestion(id, name, type));
    return newQuestions;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string,
): Question[] {
    return questions.map((q: Question): Question => {
        if (q.id === targetId) return { ...q, name: newName };
        else return { ...q };
    });
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType,
): Question[] {
    return questions.map((q: Question): Question => {
        if (q.id === targetId) {
            if (newQuestionType !== "multiple_choice_question")
                return { ...q, type: newQuestionType, options: [] };
            else return { ...q, type: newQuestionType };
        } else return { ...q };
    });
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string,
): Question[] {
    return questions.map((q: Question): Question => {
        if (q.id === targetId) {
            let newQuestion = { ...q, options: [...q.options] };

            if (targetOptionIndex === -1) newQuestion.options.push(newOption);
            else newQuestion.options.splice(targetOptionIndex, 1, newOption);
            return newQuestion;
        } else return { ...q };
    });
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number,
): Question[] {
    let newQuestions = questions.map((q: Question): Question => {
        return { ...q, options: [...q.options] };
    });
    let duplicateIndex = questions.findIndex(
        (q: Question) => q.id === targetId,
    );
    let copy = {
        ...questions[duplicateIndex],
        options: [...questions[duplicateIndex].options],
    };

    newQuestions.splice(
        duplicateIndex + 1,
        0,
        duplicateQuestion(newId, {
            ...copy,
            options: [...copy.options],
        }),
    );

    return newQuestions;
}
