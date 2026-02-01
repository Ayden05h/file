const { calculateSum, findMinMax, calculateAverage } = require("../src/numberProcessor");

describe("Number Processor", () => {
    const numbers = [10, 20, 30, 40];

    test("calculates sum", () => {
        expect(calculateSum(numbers)).toBe(100);
    });

    test("finds min and max", () => {
        expect(findMinMax(numbers)).toEqual({ min: 10, max: 40 });
    });

    test("calculates average", () => {
        expect(calculateAverage(numbers)).toBe(25);
    });

    test("handles empty array", () => {
        expect(calculateAverage([])).toBe(0);
    });
});
