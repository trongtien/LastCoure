const authService = require('../services/auth.service')

const register = async (req, res) => {
  try {
    let avartar = req.body.avartar
    let fullname = req.body.fullname
    let username = req.body.username
    let password = req.body.password
    let email = req.body.email
    let phone = req.body.phone
    let address = req.body.address

    let newUser = await authService.createNewUser(avartar, fullname, username, password, email, phone, address)
    //console.log('[newUser Controller]=>', JSON.stringify(newUser))
    return res.status(200).json({ status: 200, message: "create new user success", newUser })
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message })
  }
}

const login = (req, res) => {
  res.send('Login')
}



module.exports = {
  login: login,
  register: register
}