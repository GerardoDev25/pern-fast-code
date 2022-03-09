import { Pool } from 'pg';

const db = new Pool({
  user: 'example',
  password: 'example',
  host: 'localhost',
  port: 5432,
  database: 'taskdb',
});

export default db;
