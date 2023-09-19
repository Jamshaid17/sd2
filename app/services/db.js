require('dotenv').config();
const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');

const config = {
  db: {
    host: process.env.MYSQL_HOST,
    port: process.env.DB_PORT,
    user: process.env.MYSQL_ROOT_USER,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    waitForConnections: true,
    connectionLimit: 2,
    queueLimit: 0,
  },
};

// Create the connection pool
const pool = mysql.createPool(config.db);

// Log a confirmation message
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Database connection error:', err);
    return;
  }
  console.log('Database connected successfully!');
  connection.release(); // Release the connection back to the pool
});

// Read and split the SQL script into individual queries
const sqlScript = fs.readFileSync(
  path.join(__dirname, '../../sd2-db.sql'),
  'utf8'
);

const queries = sqlScript
  .split(';')
  .map((query) => query.trim())
  .filter((query) => query);

// Execute each query in sequence
async function runSqlScript() {
  try {
    for (const query of queries) {
      await pool.query(query); // Changed `pool.execute` to `pool.query`
      console.log('Query executed successfully:', query);
    }
  } catch (error) {
    console.error('Error executing script:', error);
  }
}

// Utility function to query the database
async function query(sql, params) {
  const [rows, fields] = await pool.execute(sql, params);
  return rows;
}

runSqlScript();

module.exports = {
  query,
};
