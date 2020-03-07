import {
    COLOR_TYPE,
    DRAW,
    CELL_NUM,
    DIRECTIONS
} from '../constants'

import Coordinate from '../js/Coordinate'


export function GetReversedList(row, col, squares, selfColor) {
    var results = [];
    DIRECTIONS.forEach(direction => {
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