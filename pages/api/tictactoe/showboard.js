import { board } from './_main'

export default (req, res) => {
    res.status(200).json({
        0: [board[0][0], board[0][1], board[0][2]],
        1: [board[1][0], board[1][1], board[1][2]],
        2: [board[2][0], board[2][1], board[2][2]],
    })
}