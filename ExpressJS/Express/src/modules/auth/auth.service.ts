import config from "../../config";
import { pool } from "../../db"
import type { IAuth } from "./auth.interface"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// LOGIN USER sql query
const loginUserintoDB = async(payload : IAuth ) =>{
    const { email, password } = payload;
    // Check if the user exists in the database
    const userData = await pool.query(`SELECT * FROM users WHERE email = $1`, [email]);
    if (userData.rowCount === 0) {
        throw new Error("User not found");
    }

    const user = userData.rows[0];
    
    // Compare provided password with hashed password
    const matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword) {
        throw new Error("Invalid password");
    }

    //Generate token
    const jwtPayload = {
        id: user.id,
        email: user.email,
        name: user.name,
        is_active: user.is_active,
    }
    const accessToken = jwt.sign(jwtPayload,config.secret_key, {expiresIn: '1d'});
    return {accessToken};
}

export const authService = {
    loginUserintoDB
}