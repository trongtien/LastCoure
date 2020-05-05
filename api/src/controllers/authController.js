
let login = (req, res) => {
  res.send('Login')
}
let logOut = (req, res) => {
  res.send('LogOut')
}

module.exports = {
  login: login,
  logOut: logOut
}