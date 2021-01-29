const pg = require("pg");
require("dotenv").config();

// env and config here provided to separate testing and developement database

const connectionString = `postgres://${process.env.PGUSER}:@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE}?sslmode=disable`;
const client = new pg.Client({
  connectionString: connectionString || process.env.DATABASE_URL,
});

client.connect((err) => {
  if (err) {
    console.error("connection error", err.stack);
  } else {
    console.log(
      `Connected to ${process.env.PGDATABASE} on ${process.env.PGHOST} in port: ${process.env.PGPORT}`
    );
  }
});

module.exports = client;
