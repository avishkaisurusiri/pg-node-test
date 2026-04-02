import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "learning_portal",
  password: "avishka@098",
  port: 5432,
});

export default pool;