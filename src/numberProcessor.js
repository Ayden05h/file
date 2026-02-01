const fs = require("fs");
const path = require("path");

function readNumberFile(filePath) {
    const data = fs.readFileSync(path.resolve(filePath), "utf-8");
    return data
    .split("\n")
    .map(Number)
    .filter(n => !isNaN(n));
}

function calculateSum(numbers) {
    return numbers.reduce((sum, n) => sum + n, 0);
}

function findMinMax(numbers) {
    return {
    min: Math.min(...numbers),
    max: Math.max(...numbers),
    };
}

function calculateAverage(numbers) {
    if (numbers.length === 0) return 0;
    return calculateSum(numbers) / numbers.length;
}

if (require.main === module) {
    const numbers = readNumberFile("data/sample-numbers.txt");
    console.log("Sum:", calculateSum(numbers));
    console.log("Min/Max:", findMinMax(numbers));
    console.log("Average:", calculateAverage(numbers));
}

module.exports = {
    calculateSum,
    findMinMax,
    calculateAverage,
};