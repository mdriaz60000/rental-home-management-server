import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import catchAsync from "../../utils/catchAsync";
import { User } from "../modules/user/user.model";
import config from "../config";
import { TUserRole } from "../modules/user/user.interface";

const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    if (!token) {
      res.status(401).json({ message: "Unauthorized no token" });
      return;
    }

    try {
      const decoded = jwt.verify(token, config.jwt_access_secret as string) as JwtPayload;
      const { role, email } = decoded;

      const user = await User.findOne({ email });
      if (!user) {
        res.status(404).json({ message: "User not found" });
        return;
      }

      if (requiredRoles && !requiredRoles.includes(decoded?.role)) {
        res.status(403).json({ message: "You are not authorized" });
        return;
      }

      req.user = decoded as JwtPayload;
      next();
    } catch (error) {
      res.status(401).json({ message: "Invalid token" });
    }
  });
};

export default auth;