const { Pool } = require("pg");

const db = new Pool({
    connectionString:process.env.DATABASE_URL,
    ssl:process.env.DATABASE_URL ? true : false
})

// untuk lokal
// const db = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'covid19',
//     password: 'root',
//     port: 5432,
// })

module.exports = db;
