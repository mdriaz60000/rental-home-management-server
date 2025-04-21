import express, { Application, Request, Response, NextFunction } from "express";
import cookieParser from 'cookie-parser';
import { GlobalErrorFunc } from "./app/global-error-handler";
const app: Application = express();
import cors from "cors";

import { UserRouter } from "./app/modules/user/user.routes";
import { authRouter } from "./app/modules/auth/auth.routes";
import { PropertiesRouter } from "./app/modules/propaties/propaties.routes";



// parser middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({origin :"", credentials : true}));



app.use("/api/v1/", UserRouter)
app.use("/api/v1/", authRouter)
app.use("/api/v1/", PropertiesRouter)


app.get("/", (req: Request, res: Response) => {
  res.send("Hello World! ");
});

app.use(GlobalErrorFunc.handledError);
app.use(GlobalErrorFunc.notFoundUrlError);

export default app;
