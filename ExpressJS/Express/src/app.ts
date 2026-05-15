import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import { pool } from "./db";
import { userRouter } from "./modules/users/users.route";

const app: Application = express();


app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));



//normal GET
app.get("/", (req: Request, res: Response) => {
  //res.send('Hello World!!');
  res.status(200).json({
    message: "Hello World!!",
    author: "Ibrahim",
  });
});

app.use('/api/users', userRouter)


export default app;
