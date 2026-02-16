/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if(numRows===1) return s;
    const matrix = new Array(numRows);

    let i = 0, rowIndex = 0, direction = 1;

    while (i < s.length) {
        const row = (matrix[rowIndex] || [])
        row.push(s[i]);
        matrix[rowIndex] = row;
        i++;
        if (direction === 1 && rowIndex + direction === numRows || direction === -1 && rowIndex + direction === -1) {
            direction *= -1;
        }
        rowIndex += direction;
    }

    return matrix.flatMap(row => row).join('');
};