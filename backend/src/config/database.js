import pg from "pg";

const {Pool}=pg;
const pool= new Pool({
    host:"localhost",
    port:"5432",
    database:"DAZZLES",
    password:"1234",
    user:"postgres"
})
pool.connect().then(()=>{
    console.log("pos connected");
})
export default pool