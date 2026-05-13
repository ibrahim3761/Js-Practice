import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import { Pool } from "pg";

const app: Application = express();
const port = 5000;

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

const pool = new Pool({
  connectionString:
    "postgresql://neondb_owner:npg_RBtIDd9piA6S@ep-square-king-aqi32w7s.c-8.us-east-1.aws.neon.tech/neondb?sslmode=require",
});

app.get("/", (req: Request, res: Response) => {
  //res.send('Hello World!!');
  res.status(200).json({
    message: "Hello World!!",
    author: "Ibrahim",
  });
});

app.post("/", async (req: Request, res: Response) => {
  // console.log(req.body);
  const { name, email } = req.body;
  res.status(201).json({
    message: "Created",
    data: {
      name,
      email,
      pass,
    },
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
