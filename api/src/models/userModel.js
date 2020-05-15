const knexDB = require('../config/knex')

createNew = (userItem) => {
  console.log('[userItem Model]', JSON.stringify(userItem))
  console.log('[userItem Model]', JSON.stringify(userItem.user_id))
  return knexDB('user_db').insert([
    { user_id: userItem.user_id },
    { level: userItem.level },
    { avartar: userItem.avartar },
    { fullname: userItem.fullname },
    { username: userItem.username },
    { password: userItem.password },
    { email: userItem.email },
    { phone: userItem.phone },
    { address: userItem.address },
  ]
  )
}

module.exports = {
  createNew: createNew
}