import type { Request, Response } from "express";
import { usersService } from "./users.service";

// USER GET req&res handler
const getUsers =async (req: Request, res: Response) => {
  try {
    console.log(req.user)
    const result = await usersService.getUsersfromDB();
    res.status(200).json({
      success: true,
      message: "Users Retrrieved Successfully",
      data: result.rows,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      data: error.detail,
    });
  }
}

// USER GET by ID req&res handler
const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await usersService.getUserByIdfromDB(id as string);

    if(result.rows.length === 0){
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
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error.detail,
    });
  }
}

// USER CREATE req&res handler
const createUser = async (req: Request, res: Response) => {
  // console.log(req.body);
//   const { name, email, password, age } = req.body;

  try {
    
    const result = await usersService.createUserIntoDB(req.body)

    //console.log(result);

    res.status(201).json({
      message: "User Created Successfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
      error: error.detail,
    });
  }
}

// USER UPDATE req&res handler
const updateUser =  async (req: Request, res: Response) => {
  const {id} = req.params;
  //const {name,password,age,is_active} = req.body;
  try{
    
    const result = await usersService.updateUserInDB(id as string , req.body) 

    console.log(result);
    if(result.rows.length === 0){
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
  catch(error:any){
    res.status(500).json({
      success: false,
      message: error.message,
      data: error.detail,
    });
  }
}

// USER DELETE req&res handler
const deleteUser = async (req: Request, res: Response) => {
  const {id} = req.params;
  try{
    
    const result = await usersService.deleteUserFromDB(id as string)
    
    if(result.rowCount === 0){
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
  }catch(error:any){
    res.status(500).json({
      success: false,
      message: error.message,
      data: error.detail,
    });
  }
}

export const usersController = { getUsers ,getUserById, createUser, updateUser, deleteUser }