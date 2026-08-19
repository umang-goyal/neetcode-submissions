class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const db = {};
        let valid = true;
        for (let r = 0; r < board.length; r++) {
            const row = board[r]
            for (let col = 0; col < row.length; col++) {
                const num = row[col];
                if (num === '.') {
                    continue;
                }
                if (db[`r${r}`]) {
                    const set = db[`r${r}`];
                    if (set.has(num)) {
                        valid = false;
                        break;
                    } else {
                        set.add(num);
                    }
                } else {
                    const set = new Set()
                    db[`r${r}`] = set;
                    set.add(num)
                }
                if (db[`c${col}`]) {
                    const set = db[`c${col}`];
                    if (set.has(num)) {
                        valid = false;
                        break;
                    } else {
                        set.add(num);
                    }
                } else {
                    const set = new Set()
                    db[`c${col}`] = set;
                    set.add(num)
                }
                const squareCordX = Math.floor(r / 3)
                const squareCordY = Math.floor(col / 3)
                if (db[`s${squareCordX}${squareCordY}`]) {
                    const set = db[`s${squareCordX}${squareCordY}`];
                    if (set.has(num)) {
                        valid = false;
                        break;
                    } else {
                        set.add(num);
                    }
                } else {
                    const set = new Set()
                    db[`s${squareCordX}${squareCordY}`] = set;
                    set.add(num)
                }
            }
            if (!valid) {
                break;
            }
        }
        return valid;
    }
}
