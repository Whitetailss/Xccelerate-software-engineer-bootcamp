require('dotenv').config();
var pg = require('pg');

var config = {
    user: process.env.DB_USERNAME, //'wah',
    database: process.env.DB_NAME, //'postgres',
    password: process.env.DB_PASSWORD,//'postgres', //whatever your password is, the default is postgres or password, try both
    host: process.env.WEB_HOSTNAME,//'localhost',
    port: process.env.DB_PORT,//5432,
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
}

var client = new pg.Client(config);

client.connect();

const sqlQueryWithArray = async function (sqlStatement, dataArr) {
    try {
        // BEGIN
        await client.query("BEGIN");
        console.log("check 1")
        // BEGIN

        //SQLStatement
        let result = await client.query(sqlStatement, dataArr);
        console.log("check 2")
        await client.query("COMMIT")
        resultSet = result.rows;
        return resultSet
        //SQLStatement
    }
    catch{
        //ROLLBACK
        console.log("check 3")
        await client.query("ROLLBACK");
        //ROLLBACK
        console.log('err');
        return 'err';
    }
}


module.exports.sqlQueryWithArray = sqlQueryWithArray;
