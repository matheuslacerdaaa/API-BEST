import mysql from 'mysql2/promise'
import 'dotenv/config'

const con = await mysql.createConnection({

host: 'localhost',
user: 'admin',
password: '@dm!n',
database: 'bestburgers'
})

console.log('--> DB <--');


export default con;