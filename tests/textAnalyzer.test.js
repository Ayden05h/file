const { countWords, findLongestWord, countLines } = require("../src/textAnalyzer");


describe("Text Analyzer", () => {
    const sampleText = "Hello world\nThis is a test";

    test("counts total number of words", () => {
        expect(countWords(sampleText)).toBe(6);
    });

    test("finds the longest word", () => {
        expect(findLongestWord(sampleText)).toBe("Hello");
    });

    test("counts number of lines", () => {
        expect(countLines(sampleText)).toBe(2);
    });

    test("handles empty text", () => {
        expect(countWords("")).toBe(0);
        expect(findLongestWord("")).toBe("");
        expect(countLines("")).toBe(0);
    });
});
