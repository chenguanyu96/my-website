var board = [
    [], [], [],
    [], [], [],
    [], [], []
]
var nextMove = 'X'

export const resetboard = () => {
    board = [
        [], [], [],
        [], [], [],
        [], [], []
    ]
    nextMove = 'X'
}

export const putat = (r, c) => {
    board[r][c] = nextMove
}

export { nextMove, board }
export default { resetboard, putat }
