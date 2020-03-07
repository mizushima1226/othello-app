import {
    COLOR_TYPE,
    DRAW,
    CELL_NUM
} from '../constants'

const directions = [[0, 1], [0, -1], [1, 0], [-1, 0], 
                    [1, 1], [1, -1], [-1, -1], [-1, 1]];

class Coordinate {

    constructor(row, col, squares) {
        this.x = row;
        this.y = col;
        this.squares = squares;
    }

    next(p) {
        var x = this.x + p[0];
        var y = this.y + p[1];
        return new Coordinate(x, y, this.squares);
    }

    getCoordinate() {
        return [this.x, this.y];
    }

    IsNullOrEmpty() {
        if (this.squares[this.x][this.y] === null || this.squares[this.x][this.y] === '') {
            return true;
        } else {
            return false;
        }
    }

    IsSameColor(selfColor) {
        if (this.squares[this.x][this.y] === selfColor) {
            return true;
        } else {
            return false;
        }
    }
}

export function GetReversedList(row, col, squares, selfColor) {
    var results = [];
    directions.forEach(direction => {
        var target = new Coordinate(row, col, squares);
        var reverseList = [];
        target = target.next(direction);
        if (target.IsNullOrEmpty() || target.IsSameColor(selfColor)) {
            return;
        } else {
            reverseList.push(target);
        }

        while (1) {
            target = target.next(direction);
            if (target.IsNullOrEmpty()) {
                reverseList = [];
                break;
            } else if (target.IsSameColor(selfColor)) {
                break;
            } else {
                reverseList.push(target);
            }
        }
        if (reverseList.length > 0) {
            results = results.concat(reverseList);
        }
    });
    if (results.length > 0) {
        results = results.concat([new Coordinate(row, col, squares)]);
    }
    return results;

}

export const CheckWinner = (blackNum,whiteNum) => {
    if (blackNum*1 + whiteNum*1 === CELL_NUM) {
        if (blackNum > whiteNum) {
            return COLOR_TYPE.BLACK;
        } else if (blackNum < whiteNum) {
            return COLOR_TYPE.WHITE
        } else {
            return DRAW;
        }
    }

    if (blackNum === 0) {
        return COLOR_TYPE.WHITE;
    }
    if (whiteNum === 0) {
        return COLOR_TYPE.BLACK;
    }

    return null;
}