
const sql = require('mssql');

const config = {
  user: process.env.DB_USER_NAME,
  password: process.env.DB_USER_PASS,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  encrypt: true,
  port: process.env.DB_PORT,
  dialect: 'mssql',
  dialectOptions: {
    database: process.env.DB_NAME,
    instanceName: process.env.DB_INSTANCE_NAME
  }

};

exports.connect = (cb) => {
  sql.connect(config, (err) => {
    if (err)
    throw err;
    if (cb) cb();
  });
}






