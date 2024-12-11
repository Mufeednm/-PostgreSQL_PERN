import pool from '../config/database.js'; // Assuming you're using a pool object for DB connection

export const login = async (req, res) => {
  const { username, password } = req.body;
  console.log("usernamedadadasd");
  
  if (!username || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    // Correct the SQL query with the '=' operator between password and $2
    const sqlQuery = 'SELECT * FROM admin WHERE username = $1 AND password = $2';
    
    // Execute the query to find the user
    const result = await pool.query(sqlQuery, [username, password]);
    // Check if the result has any rows (user found)
    if (result.rows.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // If user found, send success message
    res.status(200).json({ message: 'Login successful', });
    
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'An error occurred while logging in' });
  }
};
