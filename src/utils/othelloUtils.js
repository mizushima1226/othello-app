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

    IsNull() {
        if (this.squares[this.x][this.y] === null) {
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
        if (target.IsNull() || target.IsSameColor(selfColor)) {
            return;
        } else {
            reverseList.push(target);
        }

        while (1) {
            target = target.next(direction);
            if (target.IsNull()) {
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
