require("dotenv").config();

const mysql = require('mysql2/promise');

const config = {
  db: { /* do not put password or any sensitive info here, done only for demo */
    host: process.env.DB_CONTAINER,
    port: process.env.DB_PORT,
    user: process.env.MYSQL_ROOT_USER,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    waitForConnections: true,
    connectionLimit: 2,
    queueLimit: 0,
  },
};

let pool;

async function initializePool() {
  pool = mysql.createPool(config.db);
}

async function closePool() {
  if (pool) {
    await pool.end();
  }
}

async function executeQuery(sql, params) {
  if (!pool) {
    await initializePool();
  }

  const [rows, fields] = await pool.execute(sql, params);

  return rows;
}

module.exports = {
  closePool,
  executeQuery,
};
