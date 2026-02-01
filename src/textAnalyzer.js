const fs = require("fs");
const path = require("path");

function readTextFile(filePath) {
    return fs.readFileSync(path.resolve(filePath), "utf-8");
}

function countWords(text) {
    if (!text) return 0;
    return text.trim().split(/\s+/).length;
}

function findLongestWord(text) {
    if (!text) return "";
    const words = text.match(/\b\w+\b/g) || [];
    return words.reduce((longest, word) =>
    word.length > longest.length ? word : longest, "");
}

function countLines(text) {
    if (!text) return 0;
    return text.split("\n").length;
}

module.exports = {
    countWords,
    findLongestWord,
    countLines,
};


