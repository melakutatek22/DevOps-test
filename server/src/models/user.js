const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

class User {
  static async findOne({ email }) {
    const res = await pool.query(
      'SELECT * FROM users WHERE email = $1',
      [email]
    );
    return res.rows[0];
  }

  static async create({ email, password }) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const res = await pool.query(
      'INSERT INTO users (email, password_hash) VALUES ($1, $2) RETURNING *',
      [email, hashedPassword]
    );
    return res.rows[0];
  }
}

module.exports = User;