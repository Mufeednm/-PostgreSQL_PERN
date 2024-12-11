import  express  from "express";
import bodyParser from 'body-parser';
import cors from 'cors';
// import pool from "./src/config/database";
import authRoutes from "./src/routes/authRoute.js"
import adminRoutes from "./src/routes/adminRoute.js"
const app = express();
app.use(cors())
app.use(express.json());
app.use(bodyParser.json());


app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
// COLLECT DATA form Postgress














// app.get("/data",async(req,res)=>{

//     try {
//         const sqlQuery = "SELECT * FROM clients_tb"
//         const datas=await pool.query(sqlQuery)
//         console.log(datas.rows);
//         res.json({message:"all data ready"})
//     } catch (error) {
//         console.error(err);
//         res.status(500).json({ message: "An error occurred while adding data" }); 
//     }


// })



// //  ADD DATA TO POSTGRESS
// app.post("/addata", async (req, res) => {
//   const { name, email, job, rate, isactive } = req.body;
//   try {
//     const sqlQuery = `
//       INSERT INTO clients_tb (name, email, job, rate, isactive) 
//       VALUES ($1, $2, $3, $4, $5) `;
//     await pool.query(sqlQuery, [name, email, job, rate, isactive]);

//     res.json({ message: "Data added successfully" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "An error occurred while adding data" });
//   }
// });

// // delete data from table 
// app.delete("/data/:empid",async(req,res)=>{
//    const empid= req.params.empid;
//    const sqlQuery= `DELETE from  clients_tb where id = ${empid}  `
//    await pool.query(sqlQuery)
//    console.log(empid);
//    res.json({ message: "Data deleted" });
// })

// app.post("/data/update/:id",async(req,res)=>{
//     const emplyeid =req.params.id
//     const newrate=req.body;
//     // console.log(emplyeid,newjob);
//     const sqlQuery=`UPDATE clients_tb set rate =${newrate.rate} where id=${emplyeid}`
//     await pool.query(sqlQuery)
//      res.json({message:"it had updated"})
// })

app.listen(3000, () => console.log("Server running on port 3000"));