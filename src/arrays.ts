/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const len: number = numbers.length;

    if (len === 0) {
        return [];
    } else if (len === 1) {
        return [numbers[0], numbers[0]];
    } else {
        return [numbers[0], numbers[len - 1]];
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((num: number): number => num * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(strings: string[]): number[] {
    return strings.map((str: string): number => {
        const num = Number(str);
        return isNaN(num) ? 0 : num;
    });
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    return amounts.map((amt: string): number => {
        const trimmedAmt = amt[0] === "$" ? amt.slice(1) : amt;
        const numAmt = Number(trimmedAmt);
        return isNaN(numAmt) ? 0 : numAmt;
    });
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    // Remove "?" strings
    const filteredMsgs = messages.filter(
        (msg: string): boolean => msg[msg.length - 1] !== "?",
    );

    // Capitalize "!" strings
    return filteredMsgs.map((str: string): string => {
        if (str[str.length - 1] === "!") {
            return str.slice(0, -1).toUpperCase() + "!";
        } else {
            return str;
        }
    });
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    return words.filter((word: string): boolean => word.length < 4).length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) return true;

    const amountRGB = colors.reduce((total: number, color: string): number => {
        if (color === "red" || color === "blue" || color === "green")
            return ++total;
        else return total;
    }, 0);

    return amountRGB === colors.length;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum: number = addends.reduce(
        (total: number, num: number) => total + num,
        0,
    );

    const mathString: string =
        addends.length === 0 ?
            "0"
        :   addends.reduce((str: string, num: number, index: number) => {
                str += String(num);
                if (index !== addends.length - 1) str += "+";
                return str;
            }, "");

    return String(sum) + "=" + mathString;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const negativeIndex: number = values.findIndex((num: number) => num < 0);
    const prev: number[] =
        negativeIndex === -1 ? values : values.slice(0, negativeIndex);

    const sumPrev: number = prev.reduce(
        (total: number, num: number): number => total + num,
        0,
    );

    const newValues: number[] = [...values];

    if (negativeIndex === -1) {
        newValues.push(sumPrev);
    } else {
        newValues.splice(negativeIndex + 1, 0, sumPrev);
    }

    return newValues;
}
