import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import { userRouter } from "./modules/users/users.route";
import { profileRoute } from "./modules/profiles/profile.route";
import { authRoute } from "./modules/auth/auth.route";

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

app.use('/api/profiles', profileRoute)

app.use('/api/auth', authRoute)


export default app;
