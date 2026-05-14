import express, {} from "express";
import { Pool } from "pg";
import config from "./config";
const app = express();
const port = config.port;
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));
const pool = new Pool({
    connectionString: config.connection_string,
});
const initDB = async () => {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS users(
                id SERIAL PRIMARY KEY,
                name VARCHAR(20),
                email VARCHAR(20) UNIQUE NOT NULL,
                password VARCHAR(20) NOT NULL,
                is_active BOOLEAN DEFAULT true,
                age INT,

                created_at TIMESTAMP DEFAULT NOW(),
                updated_at TIMESTAMP DEFAULT NOW()
            )
        `);
        console.log("Successful");
    }
    catch (error) {
        console.log(error);
    }
};
initDB();
//normal GET
app.get("/", (req, res) => {
    //res.send('Hello World!!');
    res.status(200).json({
        message: "Hello World!!",
        author: "Ibrahim",
    });
});
// User GET API
app.get("/api/users", async (req, res) => {
    try {
        const result = await pool.query(`
      SELECT * FROM users
   `);
        res.status(200).json({
            success: true,
            message: "Users Retrrieved Successfully",
            data: result.rows,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
            data: error.detail,
        });
    }
});
// User GET API by ID
app.get("/api/users/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query(`
      SELECT * FROM users WHERE id = $1
    `, [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({
                success: false,
                message: "User Not Found",
                data: null,
            });
        }
        res.status(200).json({
            success: true,
            message: "User Retrieved Successfully",
            data: result.rows[0],
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
            error: error.detail,
        });
    }
});
// User Create POST API
app.post("/api/users", async (req, res) => {
    // console.log(req.body);
    const { name, email, password, age } = req.body;
    try {
        const result = await pool.query(`INSERT INTO users(name,email,password,age)
       VALUES($1,$2,$3,$4)
       RETURNING *
      `, [name, email, password, age]);
        //console.log(result);
        res.status(201).json({
            message: "User Created Successfully",
            data: result.rows[0],
        });
    }
    catch (error) {
        res.status(500).json({
            message: error.message,
            error: error.detail,
        });
    }
});
// User Update PUT API
app.put('/api/users/:id', async (req, res) => {
    const { id } = req.params;
    const { name, password, age, is_active } = req.body;
    try {
        const result = await pool.query(`
    UPDATE users SET name = COALESCE($1,name), password = COALESCE($2,password), age = COALESCE($3,age), is_active = COALESCE($4,is_active) 
    WHERE id = $5 
    RETURNING *
    `, [name, password, age, is_active, id]);
        console.log(result);
        if (result.rows.length === 0) {
            return res.status(404).json({
                success: false,
                message: "User Not Found",
                data: null,
            });
        }
        res.status(200).json({
            success: true,
            message: "User Updated Successfully",
            data: result.rows[0],
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
            data: error.detail,
        });
    }
});
//User DELETE API
app.delete('/api/users/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query(`
      DELETE FROM users WHERE id = $1
    `, [id]);
        if (result.rowCount === 0) {
            return res.status(404).json({
                success: false,
                message: "User Not Found",
                data: null,
            });
        }
        res.status(200).json({
            success: true,
            message: "User Deleted Successfully",
            data: null,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
            data: error.detail,
        });
    }
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
//# sourceMappingURL=server.js.map