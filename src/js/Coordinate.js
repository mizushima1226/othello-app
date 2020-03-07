class Coordinate {

    constructor(row, col, squares) {
        this.x = row;
        this.y = col;
        this.squares = squares;
    }

    next(direction) {
        var x = this.x + direction[0];
        var y = this.y + direction[1];
        return new Coordinate(x, y, this.squares);
    }

    get getCoordinate() {
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

export default Coordinate;