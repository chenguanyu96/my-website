import main from './_main'

export default (req, res) => {
    main.resetboard()
    res.status(200).json({ message: "board reset" })
}