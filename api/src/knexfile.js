// Update with your config settings.
module.exports = {
  development: {
    client: "mysql",
    connection: {
      user: "root",
      password: "",
      database: "luanvan"
    },
    migrations: {
      directory: __dirname + "/config/db/migrations",
    },
    seeds: {
      directory: __dirname + "/config/db/seeds",
    }
  },
  production: {
    client: "mysql",
    connection: {
      user: process.env.username,
      password: process.env.password,
      database: process.env.dbname
    },
    migrations: {
      directory: __dirname + "/config/db/migrations",
    },
  },

}
// module.exports = {

//   development: {
//     client: 'sqlite3',
//     connection: {
//       filename: './dev.sqlite3'
//     }
//   },

//   staging: {
//     client: 'postgresql',
//     connection: {
//       database: 'my_db',
//       user:     'username',
//       password: 'password'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   },

//   production: {
//     client: 'postgresql',
//     connection: {
//       database: 'my_db',
//       user:     'username',
//       password: 'password'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   }

// };
