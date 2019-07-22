// Update with your config settings.
require('dotenv').config();

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: process.env.DB_NAME || 'giftreg',
      user:     process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: process.env.DB_NAME || 'giftreg',
      user:     process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
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
      database: process.env.DB_NAME || 'giftreg',
      user:     process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
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
