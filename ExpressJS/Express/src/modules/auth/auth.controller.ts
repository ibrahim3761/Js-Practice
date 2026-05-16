import type { Request, Response } from "express";
import { authService } from "./auth.service";

// Login User req&res handler
const loginUser = async (req: Request, res: Response) => {
  try {
    const result = await authService.loginUserintoDB(req.body);
    res.status(201).json({
      success: true,
      message: "User Logged In Successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      data: error.detail,
    });
  }
};

export const authController = {
  loginUser,
};
