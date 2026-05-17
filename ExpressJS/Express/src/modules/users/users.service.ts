import bcrypt from "bcrypt";
import { pool } from "../../db";
import type { IUser } from "./users.interface";

// ALL USERS GET sql query
const getUsersfromDB = async () => {
  const result = await pool.query(`
        SELECT * FROM users
  `);
  delete result.rows[0].password
  return result;
};

// USER GET by ID sql query
const getUserByIdfromDB = async ( id : string) => {
  const result = await pool.query(
    `
      SELECT * FROM users WHERE id = $1
    `,
    [id],
  );
  delete result.rows[0].password;
  return result;
};

// USER CREATE sql query
const createUserIntoDB = async(payload: IUser) =>{
    const { name, email, password, age } = payload;

    const hashPassword = await bcrypt.hash(password, 10);

    const result = await pool.query(
      `INSERT INTO users(name,email,password,age)
       VALUES($1,$2,$3,$4)
       RETURNING *
      `,
      [name, email, hashPassword, age],
    );
    delete result.rows[0].password;
    return result;
}

// USER UPDATE sql query
const updateUserInDB = async (id : string, payload : IUser) => {
    const { name, password, age, is_active } = payload;
    const result = await pool.query(`
    UPDATE users SET name = COALESCE($1,name), password = COALESCE($2,password), age = COALESCE($3,age), is_active = COALESCE($4,is_active) 
    WHERE id = $5 
    RETURNING *
    `,[name,password,age,is_active,id]
    );
    return result;
}

// USER DELETE sql query
const deleteUserFromDB = async (id : string) =>{
    const result = await pool.query(`
      DELETE FROM users WHERE id = $1
    `,[id]
    );
    return result;
}

export const usersService = { getUsersfromDB, getUserByIdfromDB,createUserIntoDB, updateUserInDB,deleteUserFromDB };
