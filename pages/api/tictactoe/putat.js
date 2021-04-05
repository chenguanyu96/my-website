import main from './_main'
import { nextMove, board } from './_main'

export default (req, res) => {
    main.putat(parseInt(req.query['r']), parseInt(req.query['c']))
    if ((board[0][0] == nextMove && board[0][1] == nextMove && board[0][2] == nextMove) ||
        (board[1][0] == nextMove && board[1][1] == nextMove && board[1][2] == nextMove) ||
        (board[2][0] == nextMove && board[2][1] == nextMove && board[2][2] == nextMove) ||
        (board[0][0] == nextMove && board[1][1] == nextMove && board[2][2] == nextMove) ||
        (board[0][2] == nextMove && board[1][1] == nextMove && board[2][0] == nextMove)) {
        res.status(200).json({
            message: "Move successful. You won! Please reset board to start over!"
        })
    } else {
        if (nextMove == 'X') {
            nextMove = 'O'
        } else if (nextMove == 'O') {
            nextMove = 'X'
        }
        res.status(200).json({
            message: "Move successful. Please check the board and allow other player to move."
        })
    }
}