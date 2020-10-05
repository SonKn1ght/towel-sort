
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
    return  matrix.reduce((acc, cur, i) => {
        if (i % 2 === 0) {
            return acc.concat(cur)
        }
        return acc.concat(cur.reverse());
    }, [])
}

