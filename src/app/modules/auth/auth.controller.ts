import { NextFunction, Request, Response } from "express";
import { authServices } from "./auth.service";
import sendResponse from "../../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";
import config from "../../config";
import jwt from 'jsonwebtoken';


const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await authServices.registerIntoDb(req.body);
    
    
    const { email, role, name } = result;
    const accessToken = jwt.sign({ email, role }, config.jwt_access_secret as string, { expiresIn: "2d" });
    const reFreshToken = jwt.sign({ email, role }, config.jwt_refresh_secret as string, { expiresIn: "30d" });

   
    res.cookie("reFreshToken", reFreshToken, {
      secure: config.node_env === "production",
      httpOnly: true,
    });

    sendResponse(res, {
      statusCode: StatusCodes.CREATED, 
      success: true,
      message: "User registered successfully",
      data: {
        accessToken,
        user: {
          name,
          email,
          role
        }
      }
    });
  } catch (err: any) {
    next(err);
  }
};

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await authServices.loginIntoDb(req.body);
    const { reFreshToken, accessUser, accessToken} = result

     res.cookie("reFreshToken", reFreshToken, {
      secure: config.node_env === "production",
      httpOnly: true,
     })

    sendResponse(res, {
      statusCode: StatusCodes.ACCEPTED,
      success: true,
      message: "Login successful",
      data: {
        accessToken,
        reFreshToken,
        accessUser,
      }
    });
  } catch (err: any) {
    next(err);
  }
};

export const authControllers = {
  register,
  login,
};
