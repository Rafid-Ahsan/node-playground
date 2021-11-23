const login = async (req, res) => {
    res.send('Fake login/register Route')
}

const dashboard = async (req, res) => {
    // const luckyNumber = Math.floor(Math.random(10,100))
    const luckyNumber = Math.random(100)
    res.status(200).json({
        msg: 'Hello John Doe',
        secret: `Here is your authorized data, Your lucky number ${luckyNumber}`
    })
}

module.exports = {
    login,
    dashboard
}