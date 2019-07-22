// Update with your config settings.
require('dotenv').config();


module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'skools', //process.env.DATABASE_NAME,
      user:     'postgres',//process.env.DB_USERNAME,
      password: 'postgres'//process.env.PASSWORD
      // database: process.env.DATABASE_NAME,
      // user:     process.env.USER,
      // password: process.env.PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: process.env.DATABASE_NAME,
      user:     process.env.DB_USERNAME,
      password: process.env.PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: process.env.DATABASE_NAME,
      user:     process.env.DB_USERNAME,
      password: process.env.PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
  
};
