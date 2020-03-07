import React from 'react';
import '../css/othello.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GetReversedList } from '../utils/othelloUtils'

const BLACK = 'black';
const WHITE = 'white';
const DRAW = 'draw';
const H_CELL_NUM = 10;
const V_CELL_NUM = 10;
const CELL_NUM = 64;

export default class Othello extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Othello</h1>
                <div>
                    <Game />
                </div>
            </div>
        );
    }
}

function Square(props){
    return(
        <button className = "square" onClick = {() => props.onClick()} >
            <div className={props.cssClass}></div>
        </button >
    );
}

class Board extends React.Component {
    renderSquare(row,col) {
        var cssClass = "";
        if (this.props.squares[row][col] === BLACK) {
            cssClass = "circle bg-black";
        } else if (this.props.squares[row][col] === WHITE) {
            cssClass = "circle bg-white";
        }
        return (
            <Square
                onClick={() => this.props.onClick(row,col)}
                cssClass={cssClass}
            />
        );
        
    }

    createRow(row) {
        return (
            <div className="board-row">
                {this.renderSquare(row,1)}
                {this.renderSquare(row,2)}
                {this.renderSquare(row,3)}
                {this.renderSquare(row,4)}
                {this.renderSquare(row,5)}
                {this.renderSquare(row,6)}
                {this.renderSquare(row,7)}
                {this.renderSquare(row,8)}
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.createRow(1)}
                {this.createRow(2)}
                {this.createRow(3)}
                {this.createRow(4)}
                {this.createRow(5)}
                {this.createRow(6)}
                {this.createRow(7)}
                {this.createRow(8)}
            </div>
        );
    }
}


class Game extends React.Component {
    constructor(props) {
        super(props);

        //２次元配列を初期化します。
        var squares = [];
        for (var rowNum = 0; rowNum < V_CELL_NUM; rowNum++) {
            squares[rowNum] = Array(H_CELL_NUM).fill(null);
        }
        squares[4][5] = BLACK;
        squares[5][4] = BLACK;
        squares[4][4] = WHITE;
        squares[5][5] = WHITE;
        this.state = {
            history: [{
                squares: squares,
                blackNum: 2,
                whiteNum: 2,
            }],
            firstIsNext: true,
            stepNumber: 0,
            result: null,
        };
        
    }

    handleClick(row, col) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = [];
        current.squares.forEach(square => {
            squares.push(square.slice());
        });

        if (squares[row][col] != null) {
            return;
        }

        var selfColor = this.state.firstIsNext ? BLACK : WHITE;

        var reversedList = GetReversedList(row, col, squares, selfColor);
        if (reversedList.length === 0) {
            return;
        } else {
            reversedList.forEach(p => {
                squares[p.x][p.y] = selfColor;
            });
        }

        var blackNum = 0;
        var whiteNum = 0;
        if (selfColor === BLACK) {
            blackNum = current.blackNum + reversedList.length;
            whiteNum = current.whiteNum - reversedList.length + 1;
        } else if (selfColor === WHITE) {
            whiteNum = current.whiteNum + reversedList.length;
            blackNum = current.blackNum - reversedList.length + 1;
        }

        this.setState({
            history: history.concat([{
                squares: squares,
                blackNum: blackNum,
                whiteNum: whiteNum,
            }]),
            stepNumber: history.length,
            firstIsNext: !this.state.firstIsNext,
        });

        this.setState({
            result: CheckWinner(blackNum, whiteNum),
        });
    }

    HistoryBack() {
        if (this.state.stepNumber === 0) {
            return;
        }
        this.setState({
            stepNumber: this.state.stepNumber - 1,
            firstIsNext: !this.state.firstIsNext,
        });
    }

    HistoryMove() {
        if (this.state.history.length <= this.state.stepNumber+1) {
            return;
        }
        this.setState({
            stepNumber: this.state.stepNumber + 1,
            firstIsNext: !this.state.firstIsNext,
        });
    }

    GameReset() {
        if (!window.confirm("リセットしますか？")) {
            return;
        }
        var squares = [];
        for (var rowNum = 0; rowNum < V_CELL_NUM; rowNum++) {
            squares[rowNum] = Array(H_CELL_NUM).fill(null);
        }
        squares[4][5] = BLACK;
        squares[5][4] = BLACK;
        squares[4][4] = WHITE;
        squares[5][5] = WHITE;
        this.setState({
            history: [{
                squares: squares,
                blackNum: 2,
                whiteNum: 2,
            }],
            firstIsNext: true,
            stepNumber: 0,
        });
    }

    Pass() {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = [];
        current.squares.forEach(square => {
            squares.push(square.slice());
        });

        this.setState({
            history: history.concat([{
                squares: squares,
                blackNum: current.blackNum,
                whiteNum: current.whiteNum,
            }]),
            stepNumber: history.length,
            firstIsNext: !this.state.firstIsNext,
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = this.state.result;
        if (winner) {
            alert("winner:" + winner);
        }
        return (
            <div　className="mainContent">
                <div className="m-2 d-flex justify-content-center">
                    <div className="counter bg-primary d-flex justify-content-center align-items-center">
                        <div className="ml-2 circle bg-black"></div>
                        <div className="ml-2 font-large">{current.blackNum}</div>
                        <div className="ml-2 circle bg-white"></div>
                        <div className="mx-2 font-large text-white">{current.whiteNum}</div>
                    </div>
                    <button className="ml-3 btn btn-warning" onClick={()=>this.HistoryBack()}>戻る</button>
                    <button className="ml-3 btn btn-warning" onClick={() => this.HistoryMove()}>進む</button>
                    <button className="ml-3 btn btn-secondary" onClick={() => this.Pass()}>パス</button>
                    <button className="ml-3 btn btn-danger" onClick={()=>this.GameReset()}>リセット</button>
                </div>
                
                <div className="game"> 
                    <div className="game-board">
                        <Board squares={current.squares} onClick={(row,col)=>this.handleClick(row,col)} />
                    </div>
                </div>
            </div>
        );
    }
}

function CheckWinner(blackNum,whiteNum) {
    if (blackNum + whiteNum == CELL_NUM) {
        if (blackNum > whiteNum) {
            return BLACK;
        } else if (blackNum < whiteNum) {
            return WHITE
        } else {
            return DRAW;
        }
    }

    if (blackNum === 0) {
        return WHITE;
    }
    if (whiteNum === 0) {
        return BLACK;
    }
}