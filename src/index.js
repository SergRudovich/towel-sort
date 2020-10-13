
// You should implement your task here.

module.exports = function towelSort(matrix = []) {

    let result = [];

    for (i = 1; i < matrix.length + 1; i++) {
        (i % 2 === 0) ? result.push(matrix[i - 1].sort(function (a, b) { return b - a })) : result.push(matrix[i - 1]);
    };

    result = result.flat();

    return result;
}
