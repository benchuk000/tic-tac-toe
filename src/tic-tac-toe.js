class TicTacToe {
    constructor() {
        this.mas = [
            [NaN, NaN, NaN],
            [NaN, NaN, NaN],
            [NaN, NaN, NaN]
        ];
        this.currentSymbol = 'x';

    }

    getCurrentPlayerSymbol() {
        return this.currentSymbol;
    }

    nextTurn(rowIndex, columnIndex) {

        if(this.mas[rowIndex][columnIndex]) {
            return
        }

        this.mas[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
        this.currentSymbol = this.currentSymbol === 'x' ? 'o' : 'x';
    }


    isFinished() {
        return !!this.getWinner() || this.noMoreTurns();
    }

    getWinner() {
        let points = 1;

        for (let i = 0; i < this.mas.length; i++) {
            points = 1;

            for (let j = 1; j < this.mas[i].length; j++) {
                if (this.mas[i][j] === this.mas[i][j - 1]) {
                    points++;
                } else {
                    break;
                }
            }

            if (points === 3) {
                return this.mas[i][0];
            }
        }

        for (let i = 0; i < this.mas.length; i++) {
            points = 1;

            for (let j = 1; j < this.mas[i].length; j++) {
                if (this.mas[j][i] === this.mas[j - 1][i]) {
                    points++;
                } else {
                    break;
                }
            }

            if (points === 3) {
                return this.mas[0][i];
            }
        }

        points = 1;
        for (let i = 1; i < this.mas.length; i++) {
            if (this.mas[i][i] === this.mas[i - 1][i - 1]) {
                points++;
            } else {
                break;
            }
        }

        if (points === 3) {
            return this.mas[1][1];
        }

        points = 1;
        for (let i = 1; i < this.mas.length; i++) {
            if (this.mas[i][this.mas.length-1-i] === this.mas[i - 1][this.mas.length-i]) {
                points++;
            } else {
                break;
            }
        }

        if (points === 3) {
            return this.mas[1][1];
        }

        return null;
    }

    noMoreTurns() {
        let count = 0;
        
        for (let i = 0; i < this.mas.length; i++) {
            for (let j = 0; j < this.mas[i].length; j++) {
                if (this.mas[i][j]) {
                    count++;
                }
            }
        }

        return count === 9;
    }

    isDraw() {
        return this.isFinished() && !this.getWinner();
    }

    getFieldValue(rowIndex, colIndex) {
        return this.mas[rowIndex][colIndex] || null;
    }
}

module.exports = TicTacToe;
