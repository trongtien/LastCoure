const bcrypt = require('bcryptjs')
const { randomKey } = require('../config/helper')
const userModel = require('../models/userModel')

const saltRound = 7


let createNewUser = (avartar, fullname, username, password, email, phone, address) => {
  //console.log('[register service]=>', avartar + fullname + username + password + email + phone + address)
  return new Promise(async (resolve, reject) => {
    try {
      let salt = bcrypt.genSaltSync(saltRound)
      let id = randomKey(25)
      console.log('[id]=>', id)
      let userItem = {
        user_id: id,
        level: 0,
        avartar: avartar,
        fullname: fullname,
        username: username,
        password: bcrypt.hashSync(password, salt),
        email: email,
        phone: phone,
        address: address,
      }

      let user = await userModel.createNew(userItem)
      resolve(user)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = {
  createNewUser: createNewUser
}