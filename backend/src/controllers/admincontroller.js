import pool from '../config/database.js';


export const addcustomer = async (req, res) => {
    const { customerName, time, date }=req.body
    // console.log("at add customer");
  
    try {
      // Correct the SQL query with the '=' operator between password and $2
      const sqlQuery = `INSERT INTO customers (name,time,date)
       VALUES ($1,$2,$3) `;
      
      // Execute the query to find the user
      const result = await pool.query(sqlQuery,[customerName,time,date]);

      // Check if the result has any rows (user found)
    if (result.rowCount === 0) {
        return res.status(401).json({ error: 'Invalid CUSTOMERS DATa' });
      }
  
      // If user found, send success message
      res.status(200).json({ message: 'added  successful' });
      
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'An error occurred while adding staffs' });
    }
  };
export const allcustomers  = async (req, res) => {
  
    console.log("at add customer details");
  
    try {
      // Correct the SQL query with the '=' operator between password and $2
      const sqlQuery = `SELECT * FROM customers`;
      
      // Execute the query to find the user
      const result = await pool.query(sqlQuery);
console.log(result.rows,"in backend result of all cus");
      // Check if the result has any rows (user found)
    if (result.rowCount === 0) {
        return res.status(401).json({ error: 'no CUSTOMERS DATa' });
      }
  
      // If user found, send success message
      res.status(200).json({ message: 'fetched all datas',customers:result.rows });
      
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'An error occurred while adding staffs' });
    }
  };