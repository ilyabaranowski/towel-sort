
// You should implement your task here.

module.exports = function towelSort (matrix) {
    arr = [];
    if (Array.isArray(matrix)) {
        for (i = 0; i < matrix.length; i++) {
            if (i % 2 !==0) {
                arr = arr.concat(matrix[i].reverse());
            } else arr = arr.concat(matrix[i]);
        }
    }
    return arr;
}
