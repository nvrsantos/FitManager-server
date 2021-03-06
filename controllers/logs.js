const path = require('path')

module.exports = app => {
    return (req, res) => {
        try {
            if (req.params.type === 'error') {
                res.sendFile(path.resolve('./logs/error.txt'))
            } else if (req.params.type === 'info') {
                res.sendFile(path.resolve('./logs/info.txt'))
            } else if (req.params.type === 'debug') {
                res.sendFile(path.resolve('./logs/debug.txt'))
            } else {
                res.status(400).json({ message: 'Esse tipo de log não existe no nosso sistema!' })
            }
        } catch (err) {
            app.logger.error(err, __filename)
            res.status(500).json({ message: 'Ocorreu um erro no servidor.', error: err })
        }
    }
}